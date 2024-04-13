import { Layouts } from "../layouts";
import { Components } from "../components";
import {Hooks} from '../hooks';
import { useCallback, useEffect, useState } from "react";
import { Services } from "../services";
import { Utils } from "../utils";
import {useNavigate, useSearchParams} from "react-router-dom";
import logo from '../app-assets/images/logo/logo.png';

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

            if (account.is_active) return navigate('/mes-achats', {replace:true});

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
            <section className="row flexbox-container flex-wrap align-items-lg-stretch h-100">
                <div className="col-xl-7 col-12 p-0 d-none d-xl-block">
                    <Components.HomeScreen />
                </div>
                <div className="col-xl-5 col-md-7 col-sm-8 col-12 h-100 p-xl-0 
                py-sm-5 px-sm-1 px-0">
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
                                    <Components.RegisterForm isDisabled={useUser.isDisabled} 
                                    useUser={useUser} countries={countries} 
                                    handleFormSubmit={() => setIsModalVisible(true)}/>
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