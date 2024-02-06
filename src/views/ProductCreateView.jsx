
import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Services } from '../services';
import { Components } from '../components';
import { Hooks } from '../hooks';

export function ProductCreateView() {
    let abortController = new AbortController();

    const navigate = useNavigate();

    const useProduct = Hooks.useProduct();

	const [categories, setCategories] = useState([]);	
    const [errorMessages, setErrorMessages] = useState([]);
    // const [isLoading, setIsLoading] = useState(true);

    const handleFormSubmit = async e => {
        e.preventDefault();
        useProduct.setIsDisabled(true);
        setErrorMessages([]);
        
        try {
            await useProduct.createProduct(abortController.signal);
            navigate('/mes-publications');
        } catch (error) {
            if ('messages' in error)
                error.messages.then(messages => setErrorMessages(messages));
        } finally {
            useProduct.setIsDisabled(false);
        }
    }

    const init = useCallback(async () => {
        useProduct.setIsDisabled(true);

        try {
			const { categories } = await Services.CategoryService.getAll(
                abortController.signal);
            setCategories(categories);
			
        } catch (error) {
            console.log(error);
        }finally {
            useProduct.setIsDisabled(false);
        }
    }, [])

    useEffect(() => {
        init()
    }, [init])

    return (
        <>
            <div style={{maxWidth: '600px'}}>
                <div className='card'>
                    <Components.ErrorMessages>
                        {errorMessages}
                    </Components.ErrorMessages>
                    <div className='card-content'>
                        <Components.ProductForm useProduct={useProduct} 
                        categories={categories} setCategories={setCategories} 
                        isDisabled={useProduct.isDisabled} 
                        handleFormSubmit={handleFormSubmit}/>

                    </div>
                </div>

            </div>
        </>
    )
}
