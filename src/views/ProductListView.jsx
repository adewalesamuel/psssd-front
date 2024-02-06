//'use client'
import { useCallback, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Services } from '../services';
import { Components } from '../components';
import { Utils } from '../utils';

export function ProductListView() {
    let abortController = new AbortController();

    const { ProductService } = Services;
    
    const navigate = useNavigate();

    const [products, setProducts] = useState([]);
    const [page, ] = useState(1);
    const [, setPageLength] = useState(1);
    const [isLoading, setIsLoading] = useState(true);

    const handleEditClick = (e, data) => {
        e.preventDefault();
        navigate(`/products/${data.id}/modifier`);
    }
    const handleDeleteClick = async (e, product) => {
        e.preventDefault();

        const {isConfirmed} = await Utils.SweetAlert.fireAlert(
            'supprimer', 'ce product');

        if (isConfirmed) {
            const productsCopy = [...products];
            const index = productsCopy.findIndex(productItem => 
                productItem.id === product.id);

            productsCopy.splice(index, 1);
            setProducts(productsCopy);

            await ProductService.destroy(product.id, 
                abortController.signal);
        }
    }

    const init = useCallback(async () => {
        try {
            const {products} = await ProductService.getAll(
                {page: page}, abortController.signal);

            setProducts(products.data);
            setPageLength(products.last_page);
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
            {/* <h6>Liste Products</h6> */}
            <Components.Loader isLoading={isLoading}>
                <Link className='btn btn-info' to='/products/creer'>
                    <i className='icon ion-plus'></i> Ajout product
                </Link>
                <div className='table-responsive'>

                </div>
            </Components.Loader>
        </>
    )
}
