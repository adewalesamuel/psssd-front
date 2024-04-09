import { Fragment, useCallback, useEffect, useState } from 'react';
import { Services } from '../services';
import { Components } from '../components';
import placeholderImg from '../app-assets/images/placeholder.jpg';
import { Api } from '../services/Api';
import { Utils } from '../utils';

export function ProductListView() {
    let abortController = new AbortController();

    const { ProductService, OrderService } = Services;

    const [products, setProducts] = useState([]);
    const [orders, setOrders] = useState([]);
    const [page, ] = useState(1);
    const [isLoading, setIsLoading] = useState(true);

    const init = useCallback(async () => {
        try {
            const {orders} = await OrderService.getAll(
                {page: page}, abortController.signal);

            setOrders(orders);

            const {products} = await ProductService.getAll(
                {page: page}, abortController.signal);

            setProducts(products);
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
            <hr />
            <Components.Loader isLoading={isLoading}>
                <div className='col-xl-6 col-12 px-0'>
                    <h5 className='mt-1'>Les 7 livres psssp à vendre</h5>
                    <div className='row'>
                        {products.map((product, index) => {
                            const isLast = index <= 4 ? true : false;
                            return (
                                <Fragment key={index}>
                                    <div className="p-1 col-1/5 img-top-card productItem">
                                        <div className='w-100' style={{
                                            height: '40px', backgroundColor: isLast ? "dodgerblue" : "lightgreen" 
                                            }}></div>
                                    </div>
                                </Fragment>
                            )
                        })}
                    </div>
                    <div className='pb-3'>
                        NB: La vente des livres en bleu vous revient et celles des 
                        livres en vert revient aux maisons d&apos;éditions
                    </div>
                </div>
            </Components.Loader>
        </>
    )
}
