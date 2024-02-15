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
            const {user, tk} = await Services.AuthService.login(
                JSON.stringify(payload), abortContoller.signal);

            Utils.Auth.setSessionToken(tk);
            Utils.Auth.setUser(user);

            if (user.is_active) return navigate('/', {replace: true});

            navigate('/activation', {replace: true});
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
            <section className="row flexbox-container flex-wrap align-items-lg-stretch">
                <div className="col-xl-7 col-12"></div>
                <div className="col-xl-5 col-md-7 col-sm-8 col-12 h-100 p-xl-0 
                py-sm-5 px-sm-1 px-0">
                    <div className="bg-white bg-authentication mb-0 p-0 h-100 d-flex 
                    flex-column justify-content-around">
                        <div className="row m-0">
                            <div className="col-12 px-0">
                                <div className="card mb-0 p-2 h-100 
                                d-flex justify-content-center">
                                    <div className="card-header pb-1">
                                        <div className="card-title">
                                            <h4 className="text-center text-uppercase">Connexion</h4>
                                        </div>
                                    </div>
                                    <div className="card-content">
                                        <div className="w-100 py-2 text-center">
                                            <img src={logo} alt={import.meta.env.VITE_APP_NAME} 
                                            width={"120px"}/>
                                        </div>
                                        <div className="card-body">
                                            <Components.ErrorMessages>
                                                {errorMessages}
                                            </Components.ErrorMessages>
                                            <Components.LoginForm isDisabled={isDisabled} email={email} 
                                            setEmail={setEmail} password={password} setPassword={setPassword}
                                            handleFormSubmit={handleLoginSubmit}/>
                                            <div className="text-center mt-1">
                                                <p className="mr-25 d-inline-block">Vous n&apos;avez pas de compte?</p>
                                                <Link to="/inscription"><b className="d-inline-block">Inscrivez-vous</b> </Link>
                                            </div>
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