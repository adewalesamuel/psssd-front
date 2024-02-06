import { Link } from "react-router-dom";
import { Layouts } from "../layouts";
import { Components } from "../components";
import {Hooks} from '../hooks';
import { useCallback, useEffect, useState } from "react";
import { Services } from "../services";

export default function RegisterView() {
    const abortContoller = new AbortController();

    const useUser = Hooks.useUser();

    const [countries, setCountries] = useState([]);

    const init = useCallback(async () => {
        useUser.setIsDisabled(true);

        try {
            const {countries} = await Services.CountryService.getAll(
                abortContoller.signal);
            
            setCountries(countries);
        } catch (error) {
            console.log(error);
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
                                <div className="card disable-rounded-right mb-0 p-2 h-100 
                                d-flex justify-content-center">
                                    <div className="card-header pb-1">
                                        <div className="card-title">
                                            <h4 className="text-center mb-2 text-uppercase">Inscription</h4>
                                        </div>
                                    </div>
                                    <div className="card-content">
                                        <div className="card-body">
                                            <Components.RegisterForm isDisabled={useUser.isDisabled} 
                                            useUser={useUser} countries={countries}/>
                                            <div className="text-center mt-1">
                                                <p className="mr-25 d-inline-block">Vous avez déjà un compte?</p>
                                                <Link to="/connexion"><b className="d-inline-block">Connectez-vous</b> </Link>
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