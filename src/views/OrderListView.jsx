
import { Fragment, useCallback, useEffect, useState } from 'react';
import { Services } from '../services';
import { Components } from '../components';
import placeholderImg from '../app-assets/images/placeholder.jpg';

export function OrderListView() {
    let abortController = new AbortController();

    const { OrderService } = Services;


    const [orders, setOrders] = useState([]);
    const [page, ] = useState(1);
    const [isLoading, setIsLoading] = useState(true);

    const init = useCallback(async () => {
        try {
            const {orders} = await OrderService.getAll(
                {page: page}, abortController.signal);

            setOrders(orders);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }, [page]);

    useEffect(() => {
        init();

        return () => {
            abortController.abort();
            abortController = new AbortController();
        }
    }, [init])

    return (
        <>
            <Components.Loader isLoading={isLoading}>
                <div className='row mt-md-1 py-md-2'>
                    {orders.map((order, index) => {
                        const product = order?.product ?? {};
                        const category = product?.category ?? {};
                        const productImg = (product.img_url && product.img_url !== "") ? 
                        product.img_url : placeholderImg;
                        return (
                            <Fragment key={index}>
                                <Components.ProductItem productImg={productImg} 
                                product={product} category={category} canDownlaod={true}/>
                            </Fragment>
                        )
                    })}
                </div>
            </Components.Loader>
        </>
    )
}
