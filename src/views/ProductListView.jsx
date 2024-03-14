
import { Fragment, useCallback, useEffect, useState } from 'react';
import { Services } from '../services';
import { Components } from '../components';
import placeholderImg from '../app-assets/images/placeholder.jpg';

export function ProductListView() {
    let abortController = new AbortController();

    const { ProductService } = Services;

    const [products, setProducts] = useState([]);
    const [page, ] = useState(1);
    const [isLoading, setIsLoading] = useState(true);

    const init = useCallback(async () => {
        try {
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
            <Components.Loader isLoading={isLoading}>
                <div className='row mt-1 py-2'>
                    {products.map((product, index) => {
                        const productImg = (product.img_url && product.img_url !== "") ? 
                        product.img_url : placeholderImg;
                        const category = product.category ?? {};
                        return (
                            <Fragment key={index}>
                                <Components.ProdcutItem productImg={productImg} 
                                product={product} category={category} canDownlaod={false}/>
                            </Fragment>
                        )
                    })}
                </div>
            </Components.Loader>
        </>
    )
}
