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
                    <small>
                        Les 7 livres ci-dessous vous ont été confiés par le
                        PSSSP Afrique pour les vendre et non pour les télécharger 
                        ni les imprimer.
                    </small>
                    <div className='row p-1'>
                        {products.map((product, index) => {
                            const isLast = index <= 4 ? true : false;
                            return (
                                <Fragment key={index}>
                                    <div className="p-xxs col-1/5 img-top-card productItem">
                                        <div className='w-100 rounded-sm' style={{
                                            height: '50px', backgroundColor: isLast ? "dodgerblue" : "lightgreen" 
                                            }}></div>
                                    </div>
                                </Fragment>
                            )
                        })}
                    </div>
                    <div className='pb-3'>
                        NB: La vente des livres en bleu vous revient et celle de livres en vert revient aux
                        écrivains, maisons d&apos;édition, frais de maintenance, frais d&apos;hébergement, à la
                        solidarité et à la communauté.
                    </div>
                </div>
                 <div className='mx-auto col-sm-6 col-12 px-0'>
                    <button className='btn btn-info btn-block mt-b'>
                        Votre code de parrainage {Utils.Auth.getUser()?.user?.sponsor_code}
                    </button>
                </div>
            </Components.Loader>
        </>
    )
}
