import { useCallback, useEffect, useState } from "react";
import { Layouts } from "../layouts";
import { Services } from "../services";
import { Utils } from "../utils";
import {useNavigate} from 'react-router-dom';
import { Components } from "../components";
import successImg from '../app-assets/images/success.png';
import logo from '../app-assets/images/logo/logo.png';

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
            <section className="row flexbox-container flex-wrap align-items-lg-stretch" 
            style={{height:'auto'}}>
                <div className="col-xl-7 col-12 p-0 d-none d-xl-block">
                    <Components.HomeScreen />
                </div>
                <div className="col-xl-5 col-md-7 col-sm-8 col-12 h-100 p-xl-0 py-lg-5 px-lg-1 px-0">
                    <div className="mb-0 px-0 h-100 d-flex flex-column justify-centent-beetween">
                        <div className="bg-success rounded-b-lg">
                            <div className="text-center">
                                <span className="bg-white d-inline-block rounded-circle 
                                overflow-hidden border-success border-3" 
                                style={{
                                    padding: "0.5rem", 
                                    transform: 'translateY(40px)'
                                }}>
                                    <img src={logo} width={50} height={50} 
                                    style={{objectFit: 'contain'}}/>
                                </span>
                            </div>
                        </div>
                        <Components.Loader isLoading={isLoading}>
                            <div className="p-3 py-4 mt-2">
                                <div className="text-center mb-1">
                                    <img src={successImg} alt="success" width={"120px"} 
                                    className="img-fluid position-relative"  style={{
                                        transform: 'translateY(70px)',
                                        marginTop: '-50px',
                                        zIndex: 1
                                    }}/>
                                </div>
                                <div className="card rounded-md mb-0 h-100 
                                d-flex justify-content-center p-0 pt-3">
                                    <div className="card-content">
                                        <div className="card-body px-1">
                                            <h4 className="text-center mb-2 text-uppercase text-success">
                                                Félicitations
                                            </h4>
                                            <small className="text-center d-block">
                                                Votre compte PSSSP Afrique vient d&apos;être créé. Contactez 
                                                la  personne ci-dessous pour  votre Code d&apos;Activation
                                            </small>
                                            <div className="border border-success rounded mt-2 bg-grey">
                                                <ul className="p-1 mb-0" style={{listStyleType: "none"}}>
                                                    <li>Login:{sponsor.email}</li>
                                                    <li>Pays:{sponsor.country?.name}</li>
                                                    <li>Numéro WhatsApp: {sponsor.whatsapp_number}</li>
                                                    <li>Numéro Télégram: {sponsor.telegram_number}</li>
                                                    <li>Numéro Secours: {sponsor.backup_number}  </li>
                                                </ul>
                                            </div>
                                            <div className="mt-2">
                                                <h6 className="text-uppercase text-center font-weight-bolder" 
                                                style={{fontSize: '0.9rem'}}>
                                                    Entrez votre code de validation
                                                </h6>
                                            </div>
                                            <div>
                                                <Components.ErrorMessages style={{fontSize: '14px'}}>
                                                    {errorMessages}
                                                </Components.ErrorMessages>
                                                <form onSubmit={handleActivationSubmit}>
                                                    <div className="row">
                                                        <div className='col-12'>
                                                            <div className='form-group position-relative'>
                                                                <input className='form-control form-control rounded 
                                                                    border-success p-2' type='text' id='activation_code' 
                                                                    name='activation_code' required
                                                                    placeholder='Code alphanumérique de 8 charactères' 
                                                                    value={activation_code ?? ''} disabled={isDisabled}
                                                                    onChange={e => setActivation_code(e.target.value) ?? null} />
                                                            </div>
                                                        </div>
                                                        <div className='col-12'>
                                                            <button disabled={isDisabled ?? false} type='button'
                                                                className='btn btn-primary btn-block mt-1 p-1 rounded btn-sm 
                                                                p-xs bg-success' onClick={handleActivationSubmit}>
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
                                </div>
                            </div>
                        </Components.Loader>
                    </div>
                </div>
            </section>
        </Layouts.AuthLayout>
    )
}