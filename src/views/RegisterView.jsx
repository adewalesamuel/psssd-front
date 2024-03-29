import { Link } from "react-router-dom";
import { Layouts } from "../layouts";
import { Components } from "../components";
import {Hooks} from '../hooks';
import { useCallback, useEffect, useState } from "react";
import { Services } from "../services";
import { Utils } from "../utils";
import {useNavigate, useSearchParams} from "react-router-dom";

export default function RegisterView() {
    const abortContoller = new AbortController();

    const navigate = useNavigate();

    const useUser = Hooks.useUser();

    const [searchParams,] = useSearchParams();

    const [countries, setCountries] = useState([]);
    const [errorMessages, setErrorMessages] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        setErrorMessages([]);

        useUser.setIsDisabled(true);

        try {
            const payload = {
                fullname: useUser.fullname,
                email: useUser.email,
                password: useUser.password,
                phone_number: useUser.phone_number,
                backup_number: useUser.backup_number,
                whatsapp_number: useUser.whatsapp_number,
                telegram_number: useUser.telegram_number,
                shop_name: useUser.shop_name,
                sponsor_code: useUser.sponsor_code,
                referer_sponsor_code: useUser.referer_sponsor_code,
                country_id: useUser.country_id
            }
            const {account, tk} = await Services.AuthService.register(
                JSON.stringify(payload), abortContoller.signal);

            Utils.Auth.setSessionToken(tk);
            Utils.Auth.setUser(account);

            if (account.is_active) return navigate('/', {replace:true});

            navigate('/activation', {replace:true});
            setIsModalVisible(false);
        } catch (error) {
            if ('message' in error) return setErrorMessages([error.message])
            if (!('messages' in error)) return;

            const messages = await error.messages;

            setErrorMessages(messages);
            useUser.setIsDisabled(false);
            setIsModalVisible(false);
        }
    } 

    const init = useCallback(async () => {
        useUser.setIsDisabled(true);

        try {
            if (searchParams.get('user')) {
                const user = JSON.parse(searchParams.get('user'));

                useUser.fillUser(user);
                useUser.setEmail('');
                useUser.setShop_name('');
                useUser.setFullname(user.fullname);
                useUser.setPhone_number(user.user.phone_number)
            }

            const {countries} = await Services.CountryService.getAll(
                abortContoller.signal);
            
            setCountries(countries);
        } catch (error) {
            if ('message' in error) return setErrorMessages([error.message])
            if (!('messages' in error)) return;

            const messages = await error.messages;
            setErrorMessages(messages);
        } finally {
            useUser.setIsDisabled(false);
        }
    }, [])

    useEffect(() => {
        init()
    }, [init])

    return (
        <Layouts.AuthLayout>
            <section className="row flexbox-container flex-wrap align-items-lg-stretch">
                <div className="col-xl-7 col-12"></div>
                <div className="col-xl-5 col-md-7 col-sm-8 col-12 h-100 p-xl-0 
                py-sm-5 px-sm-1 px-0">
                    <div className="bg-white bg-authentication mb-0 p-0 h-100 d-flex 
                    flex-column">
                        <div className="row m-0">
                            <div className="col-12 px-0">
                                <div className="card disable-rounded-right mb-0 p-1 p-sm-2 h-100 
                                d-flex justify-content-center">
                                    <div className="card-header pb-1">
                                        <div className="card-title">
                                            <h4 className="text-center mb-2 text-uppercase">Inscription</h4>
                                        </div>
                                    </div>
                                    <div className="card-content login-wrapper border-radius-t-lg pt-sm-0 pt-3">
                                        <div className="card-body bg-white border-radius-t-lg pt-sm-0 pt-2">
                                            <Components.ErrorMessages>
                                                {errorMessages}
                                            </Components.ErrorMessages>
                                            <Components.RegisterForm isDisabled={useUser.isDisabled} 
                                            useUser={useUser} countries={countries} 
                                            handleFormSubmit={() => setIsModalVisible(true)}/>
                                            <div className="text-center mt-1">
                                                <span className="mr-25 d-inline-block">Vous avez déjà un compte ?</span>
                                                <Link to="/connexion" className="text-primary">
                                                    <b className="d-inline-block">Connectez-vous</b> 
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {isModalVisible && 
                <Components.Modal isControlVisible={true} handleModalClose={() => setIsModalVisible(false)}
                title={"Nos termes et conditions"} handleModalValidate={handleRegisterSubmit}
                isDisabled={useUser.isDisabled}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                    culpa qui officia deserunt mollit anim id est laborum.
                </Components.Modal>
            }
        </Layouts.AuthLayout>
    )
}