import { useCallback, useEffect, useState } from "react";
import { Layouts } from "../layouts";
import { Services } from "../services";
import { Utils } from "../utils";
import {useNavigate} from 'react-router-dom';
import { Components } from "../components";

export default function ActivationView() {
    const abortContoller = new AbortController();

    const navigate = useNavigate();

    const [activation_code, setActivation_code] = useState('');
    const [isDisabled, setIsDisabled] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessages, setErrorMessages] = useState([]);
    const [sponsor, setSponsor] = useState({});

    const handleActivationSubmit = async e => {
        e.preventDefault();
        setIsDisabled(true);
        setErrorMessages([]);

        try {
            await Services.AuthService.activation(
                JSON.stringify({activation_code}), 
                abortContoller.signal)
            
            const user = Utils.Auth.getUser();
            user.is_active = true;

            Utils.Auth.setUser(user);

            navigate('/mes-achats', {replace:true});
        } catch (error) {
            if ('message' in error) return setErrorMessages([error.message])
            if (!('messages' in error)) return;

            const messages = await error.messages;
            setErrorMessages(messages);
        } finally {
            setIsDisabled(false);
        }
    }

    const init = useCallback(async () => {
        setIsDisabled(true);

        try {
            const {sponsor} = await Services.UserService.getAccountSponsor(
                abortContoller.signal);

            setSponsor(sponsor);
        } catch (error) {
            if ('message' in error) return setErrorMessages([error.message])
            if (!('messages' in error)) return;

            const messages = await error.messages;
            setErrorMessages(messages);
        }finally {
            setIsDisabled(false);
            setIsLoading(false);
        }
    }, [])
    
    useEffect(() => {
        init();
    }, [init])

    return (
        <Layouts.AuthLayout>
            <section className="row flexbox-container flex-wrap align-items-lg-stretch">
                <div className="col-xl-7 col-12"></div>
                <div className="col-xl-5 col-md-7 col-sm-8 col-12 h-100 p-xl-0 py-sm-5 px-sm-1 px-0">
                    <div className="bg-white bg-authentication mb-0 p-0 h-100 d-flex flex-column">
                        <div className="row m-0">
                            <div className="col-12 px-0">
                                <div className="card mb-0 p-2 h-100 d-flex justify-content-center">
                                    <div className="card-header pb-1">
                                        <div className="card-title">
                                            <Components.Loader isLoading={isLoading}>
                                                <h4 className="text-center mb-2 text-uppercase">
                                                    Félicitations
                                                </h4>
                                                <p style={{textTransform: 'none'}}>
                                                    Vous venez de créer votre compte sur l&apos;interface
                                                    PSSSP. Contactez la personne ci-dessous pour l&apos;acquisition
                                                    de votre code d&apos;activation et de téléchargement de vos
                                                    premiers ebooks
                                                </p>
                                                <div className="border border-primary rounded mt-2">
                                                    <ul className="p-1" style={{listStyleType: "none"}}>
                                                        <li className="mb-1"><strong>Login:</strong> {sponsor.email}</li>
                                                        <li className="mb-1"><strong>Pays:</strong> {sponsor.country?.name}</li>
                                                        <li className="mb-1"><strong>Numéro WhatsApp:</strong> {sponsor.whatsapp_number}</li>
                                                        <li className="mb-1"><strong>Numéro Télégram:</strong> {sponsor.telegram_number}</li>
                                                        <li><strong>Numéro Secours:</strong> {sponsor.backup_number}  </li>
                                                    </ul>
                                                </div>
                                            </Components.Loader>
                                            <div className="mt-2">
                                                <p className="text-uppercase text-center">
                                                    Entrez votre code de validation et de téléchargement
                                                </p>
                                            </div>
                                            <div className="mt-2" style={{textTransform:'none'}}>
                                                <Components.ErrorMessages style={{fontSize: '14px'}}>
                                                    {errorMessages}
                                                </Components.ErrorMessages>
                                                <form onSubmit={handleActivationSubmit}>
                                                    <div className="row">
                                                        <div className='col-12'>
                                                            <div className='form-group position-relative'>
                                                                <input className='form-control form-control rounded 
                                                                    border-primary p-2' type='text' id='activation_code' 
                                                                    name='activation_code' required
                                                                    placeholder='Code alphanumérique de 8 charactères' 
                                                                    value={activation_code ?? ''} disabled={isDisabled}
                                                                    onChange={e => setActivation_code(e.target.value) ?? null} />
                                                            </div>
                                                        </div>
                                                        <div className='col-12'>
                                                            <button
                                                                disabled={isDisabled ?? false} type='submit'
                                                                className='btn btn-primary btn-block mt-1 p-1 rounded'
                                                                onClick={handleActivationSubmit}>
                                                                <span className="text-uppercase">
                                                                    {isDisabled ? "Chargement..." : "Validez votre compte"}
                                                                </span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-content">
                                        <div className="card-body">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layouts.AuthLayout>
    )
}