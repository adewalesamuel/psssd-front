
import { useCallback, useEffect, useState } from 'react';
import { Components } from '../components';
import { Hooks } from '../hooks';
import { Services } from '../services';
import { Utils } from '../utils';

export function UserEditView() {
    let abortController = new AbortController();

    const useUser = Hooks.useUser();

    const [countries, setcountries] = useState([]);
	
    const [errorMessages, setErrorMessages] = useState([]);
    const [, setIsLoading] = useState(true);

    const handleFormSubmit = async e => {
        e.preventDefault();
        useUser.setIsDisabled(true);
        setErrorMessages([]);
        
        try {
            const {user} = await useUser.updateUser(abortController.signal);
            const authUser = {...Utils.Auth.getUser(), ...user};

            Utils.Auth.setUser(authUser);
        } catch (error) {
            if ('message' in error) return setErrorMessages([error.message])
            if (!('messages' in error)) return;

            const messages = await error.messages;
            setErrorMessages(messages);
        } finally {
            useUser.setIsDisabled(false);
        }
    }

    const init = useCallback(async () => {
        useUser.setIsDisabled(true);

        try {
            useUser.fillUser(Utils.Auth.getUser());
            
            const { countries } = await Services.countrieservice.getAll(
                abortController.signal);
			setcountries(countries);
			
        } catch (error) {
            console.log(error);
        }finally{
            setIsLoading(false);
            useUser.setIsDisabled(false);
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
                        <Components.UserForm useUser={useUser} 
                        countries={countries} setcountries={setcountries}
                        isDisabled={useUser.isDisabled} 
                        handleFormSubmit={handleFormSubmit}/>
                    </div>
                </div>
            </div>
        </>
    )
}
