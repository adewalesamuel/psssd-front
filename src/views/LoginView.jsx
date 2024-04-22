import { Link } from "react-router-dom";
import { Layouts } from "../layouts";
import { Components } from "../components";
import { useState } from "react";
import { Services } from "../services";
import { Utils } from "../utils";
import {useNavigate} from "react-router-dom";
import logo from '../app-assets/images/logo/logo.png';

export default function LoginView() {
    const abortContoller = new AbortController();

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isDisabled, setIsDisabled] = useState(false);
    const [errorMessages, setErrorMessages] = useState([]);

    const handleLoginSubmit = async e => {
        e.preventDefault();

        setErrorMessages([]);
        setIsDisabled(true);

        try {
            const payload = {
                email, password
            }
            const {account, tk} = await Services.AuthService.login(
                JSON.stringify(payload), abortContoller.signal);

            Utils.Auth.setSessionToken(tk);
            Utils.Auth.setUser(account);

            if (account.is_active) return navigate('/', {replace: true});

            navigate('/activation');
        } catch (error) {
            if ('message' in error) return setErrorMessages([error.message])
            if (!('messages' in error)) return;

            const messages = await error.messages;

            setErrorMessages(messages);
            setIsDisabled(false);
        }
        
    }

    return (
        <Layouts.AuthLayout>

            <section className="row flexbox-container flex-wrap align-items-lg-stretch h-100">
                <div className="col-xl-7 col-12 p-0 d-none d-xl-block">
                    <Components.HomeScreen />
                </div>
                <div className="col-xl-5 col-md-7 col-sm-8 col-12 h-100 p-xl-0 py-lg-5 px-lg-1 px-0">
                    <div className="mb-0 px-0 h-100 d-flex flex-column justify-centent-beetween">
                        <div className="bg-primary rounded-b-lg">
                            <div className="text-center">
                                <span className="bg-white d-inline-block rounded-circle 
                                overflow-hidden border-primary border-3" 
                                style={{
                                    padding: "0.5rem", 
                                    transform: 'translateY(40px'
                                }}>
                                    <img src={logo} width={50} height={50} 
                                    style={{objectFit: 'contain'}}/>
                                </span>
                            </div>
                        </div>
                        <div className="p-4 mt-2">
                            <div className="card rounded-md mb-0 h-100 
                            d-flex justify-content-center p-2">
                                <div className="card-content pt-sm-0">
                                    <Components.ErrorMessages>
                                        {errorMessages}
                                    </Components.ErrorMessages>
                                    <Components.LoginForm isDisabled={isDisabled} email={email} 
                                    setEmail={setEmail} password={password} setPassword={setPassword}
                                    handleFormSubmit={handleLoginSubmit}/>
                                     <div className="text-center mt-1">
                                        <small className="mr-25 d-inline-block text-xxs">
                                            Vous n&apos;avez pas de compte?
                                            <Link to="/inscription" className="text-primary mt-2 d-inline-block">
                                                <b className="d-inline-block">Inscrivez-vous</b> 
                                            </Link>
                                        </small>
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