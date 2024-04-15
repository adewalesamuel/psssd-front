
import { Fragment, useCallback, useEffect, useState } from 'react';
import { Services } from '../services';
import { Components } from '../components';
import placeholderImg from '../app-assets/images/placeholder.jpg';
import { Utils } from '../utils';
import { Api } from '../services/Api';

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
        <section className="pt-4 pt-md-0">
            <Components.Loader isLoading={isLoading}>
                <div className="pb-1">Vos 4 livres ci-dessous peuvent être téléchargés et imprimés</div>
                <div className='row mt-md-1 py-md-2 mb-4 px-2'>
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
                <div className='row'>
                <div className='mx-auto col-sm-6 col-12'>
                    <button className='btn btn-info btn-block mt-b'>
                        Votre code de parrainage {Utils.Auth.getUser()?.user?.sponsor_code}
                    </button>
                    <a href={`${Api.URL}/accounts/${Utils.Auth.getUser().id}/invoice`} 
                    target='_blank' rel='noreferrer' className='btn btn-primary btn-block'>
                        Télecharger le réçu d&apos;achat
                    </a>
                </div>
            </div>
            </Components.Loader>
        </section>
    )
}
