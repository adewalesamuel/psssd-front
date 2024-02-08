
import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Services } from '../services';
import { Components } from '../components';
import placeholderImg from '../app-assets/images/placeholder.jpg';

export function ProductListView() {
    let abortController = new AbortController();

    const { ProductService } = Services;


    const [products, setProducts] = useState([]);
    const [page, ] = useState(1);
    const [, setPageLength] = useState(1);
    const [isLoading, setIsLoading] = useState(true);

    // const handleDeleteClick = async (e, product) => {
    //     e.preventDefault();

    //     const {isConfirmed} = await Utils.SweetAlert.fireAlert(
    //         'supprimer', 'ce product');

    //     if (isConfirmed) {
    //         const productsCopy = [...products];
    //         const index = productsCopy.findIndex(productItem => 
    //             productItem.id === product.id);

    //         productsCopy.splice(index, 1);
    //         setProducts(productsCopy);

    //         await ProductService.destroy(product.id, 
    //             abortController.signal);
    //     }
    // }

    const init = useCallback(async () => {
        try {
            const {products} = await ProductService.getAll(
                {page: page}, abortController.signal);

            setProducts(products.data);
            setPageLength(products.last_page);
        } catch (error) {
            // console.log(error);
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
                        return (
                            <div className="col-xl-3 col-6 img-top-card" key={index}>
                                <div className="card widget-img-top p-0">
                                    <div className="card-content">
                                        <img className="card-img-top img-fluid mb-1" src={productImg} 
                                        alt="Card image cap" style={{height: "200px", objectFit: 'scale-down'}}/>
                                        <div className="heading-elements">
                                            <i className="bx bx-dots-vertical-rounded font-medium-3 
                                            align-middle text-white"></i>
                                        </div>
                                        <div className="text-center">
                                            <h4>{product.name}</h4>
                                            <p>{product?.category?.name}</p>
                                            <p className="px-2">{product.download_code}</p>
                                        </div>
                                    </div>
                                    <div className="card-footer text-center d-flex justify-content-between 
                                    align-items-center">
                                        <a href={product.file_url} className='btn btn-secondary'
                                        target='_blank' rel='noreferrer'>
                                            <i className='bx bx-download'></i>
                                        </a>
                                        <Link to={`/articles/${product.slug}/modifier`} 
                                        className="btn btn-info text-white">
                                            <i className='bx bx-pencil'></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </Components.Loader>
        </>
    )
}
