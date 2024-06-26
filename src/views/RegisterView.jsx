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

        const country = countries.find(country => 
            parseInt(useUser.country_id) == country.id);

        try {
            const payload = {
                fullname: useUser.fullname,
                email: useUser.email,
                password: useUser.password,
                phone_number: (country?.phone_code ?? '') + useUser.phone_number,
                backup_number: (country?.phone_code ?? '') + useUser.backup_number,
                whatsapp_number: (country?.phone_code ?? '') + useUser.whatsapp_number,
                telegram_number: (country?.phone_code ?? '') + useUser.telegram_number,
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

            navigate('/activation');
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
                    <div className="overflow-auto" style={{maxHeight: "300px"}}>
                        Le P.S.S.S.P BUSINESS est un projet communautaire de commercialisation de livres, 
                        documents et fascicules numériques via son application (PSSSP Business). Une adhésion 
                        au projet équivaut à l’achat de quatre e-books qui sont automatiquement livrés avec un 
                        reçu d’achat et un code de parrainage unique. Dans le but de susciter de nouvelles ouvertures 
                        de comptes et promouvoir la fidélité au sein du programme, le PSSSP Business confie sept de 
                        ses e-books à tous les nouveaux membres. 
                        NB: Ces sept E-books restent la propriété exclusive du PSSSP Business mais sont gérés et remis 
                        en vente par les membres contre 50 à 80% des recettes encaissées. En aucun cas, ces E-books 
                        ne feront l’objet de réclamation ni de revendication de la part de qui que soit.                                                                                                  
                        NB: Le projet PSSSP Business s’engage à mettre tout en œuvre pour assurer la permanence, 
                        la continuité et la qualité du fonctionnement de la plateforme de sorte à satisfaire tous 
                        ses Utilisateurs. Cependant, compte tenu de la nature du réseau internet, le PSSSP Business 
                        ne peut garantir l’absence d’interruption ou de dégradation du fonctionnement de l’application.
                        <br /><br />
                        <div className="text-right">
                            <b>Maitre Salomon</b><br />
                            Fondateur et Coordonnateur Général du Projet PSSSP Afrique
                        </div>
                    </div>
                </Components.Modal>
            }
        </Layouts.AuthLayout>
    )
}