
import { useCallback, useEffect, useState } from 'react';
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
                            <div className="col-xl-3 col-6 img-top-card" key={index}>
                                <div className="card widget-img-top p-0">
                                    <div className="card-content">
                                        <img className="card-img-top mb-1" src={productImg} 
                                        alt={product.name} width="180px" height="180px" 
                                        style={{objectFit: 'scale-down'}}/>
                                        <div className="heading-elements">
                                            <i className="bx bx-dots-vertical-rounded font-medium-3 
                                            align-middle text-white"></i>
                                        </div>
                                        <div className="text-center">
                                            <h4>{product.name}</h4>
                                            <p>{category.name} {category?.category && 
                                            `- ${category.category?.name ?? ""}`}</p>
                                            <p className="px-2">{product.download_code}</p>
                                        </div>
                                    </div>
                                    {/* <div className="card-footer text-center d-flex justify-content-between 
                                    align-items-center">
                                        <a href={product.file_url} className='btn btn-info btn-block'
                                        target='_blank' rel='noreferrer'>
                                            <i className='bx bx-download'></i>
                                        </a>
                                    </div> */}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </Components.Loader>
        </>
    )
}
