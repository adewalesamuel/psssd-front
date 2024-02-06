
import { useCallback, useEffect, useState } from 'react';
import { Components } from '../components';
import { Hooks } from '../hooks';
import { useParams } from 'react-router-dom';
import { Services } from '../services';

export function ProductEditView() {
    let abortController = new AbortController();

    const {id} = useParams();

    const useProduct = Hooks.useProduct();

	const [categories, setCategories] = useState([]);
	
    const [errorMessages, setErrorMessages] = useState([]);
    const [, setIsLoading] = useState(true);

    const handleFormSubmit = async e => {
        e.preventDefault();
        useProduct.setIsDisabled(true);
        setErrorMessages([]);
        
        try {
            await useProduct.updateProduct(useProduct.id, 
                abortController.signal);
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
            await useProduct.getProduct(id, abortController.signal);
            
			const { categories } = await Services.CategoryService.getAll(
                abortController.signal);
			setCategories(categories);
			
        } catch (error) {
            console.log(error);
        }finally{
            setIsLoading(false);
            useProduct.setIsDisabled(false);
        }
    }, [])

    useEffect(() => {
        init();
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
