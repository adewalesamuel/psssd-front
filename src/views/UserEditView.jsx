
import { useCallback, useEffect, useState } from 'react';
import { Components } from '../components';
import { Hooks } from '../hooks';
import { Services } from '../services';
import { Utils } from '../utils';
import {Edit} from 'react-feather'

export function UserEditView() {
    let abortController = new AbortController();

    const useUser = Hooks.useUser();

    const [countries, setcountries] = useState([]);
	
    const [errorMessages, setErrorMessages] = useState([]);
    const [, setIsLoading] = useState(true);

    const handleImageUpload = async file => {
        useUser.setIsDisabled(true);

        try {
            const formData = new FormData();

            formData.append('img', file);

            const {img_url} = await Services.FileService.store(
                formData, abortController.signal);

            useUser.setProfile_img_url(img_url);
        } catch (error) {
            console.log(error);
        } finally {
            useUser.setIsDisabled(false);
        }

    }

    const handleFormSubmit = async e => {
        e.preventDefault();
        useUser.setIsDisabled(true);
        setErrorMessages([]);
        
        try {
            const {account} = await useUser.updateUser(abortController.signal);
            const authUser = {...Utils.Auth.getUser(), ...account};

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
            const { countries } = await Services.CountryService.getAll(
                abortController.signal);
                
            useUser.fillUser(Utils.Auth.getUser());
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
        <section className='py-3 bg-primary row px-1' id="userEdit">
            <div style={{maxWidth: '600px'}}>
                <div className='d-flex align-items-center justify-content-center mb-2'>
                    <div className='position-relative'>
                        <Components.ImageFileInput img_url={useUser.profile_img_url} 
                        handleFileChange={handleImageUpload} />
                        <Edit className='bg-info text-white position-absolute rounded-pill' 
                        width={20} height={20} style={{
                            top: '-3px',
                            left: '-3px',
                            padding: "3px"
                        }}/>
                    </div>
                    <h6 className='text-white font-weight-bolder ml-1'>
                        {Utils.Auth.getUser().fullname}
                    </h6>
                </div>
                <div className='card p-2 rounded-md'>
                    <h6 className='text-primary text-center font-weight-bolder mb-2'>
                        Modifier vos informations
                    </h6>
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
        </section>
    )
}
