import { useCallback, useEffect, useState } from "react";
import { Services } from '../services';
import { Components } from "../components";
import { Utils } from "../utils";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import {Psssp} from '../Psssp';

export default function DashbaordView() {
    const abortController = new AbortController();
    
    const navigate = useNavigate();

    const [analytics, setAnalytics] = useState({});
    const [, setIsLoading] = useState(false);

    const init = useCallback(async () => {
        setIsLoading(true);
        try {
            const {analytics} = await Services.UserService.analytics(
                abortController.signal);

            setAnalytics(analytics);

            if (analytics.products_count > 0) return;
            if (Utils.Auth.getUser().is_active == false) return;
            if (Psssp.SPONSOR_CODE === Utils.Auth.getUser().user.sponsor_code) return;

            const {isConfirmed} = await Swal.fire({
                icon: 'warning',
                titleText: 'Attention!',
                text: `Vous n'avez plus de livres dans votre boutique. 
                Veuillez creer un nouveau compte.`,
                reverseButtons: true,
                showCancelButton: true,
                cancelButtonText: 'Fermer',
                confirmButtonText: 'Nouveau compte'
            })
    
            if (isConfirmed) {
                const user = Utils.Auth.getUser();

                Services.AuthService.logout(null);
                Utils.Auth.removeSessionToken();

                navigate(`/inscription?user=${JSON.stringify(user)}`);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }, [])

    useEffect(() => {
        init()
    }, [init])

    return (
        <section id="dashboard">
            <div className="row">
                <div className="col-12 py-1 text-center">
                    <p className="user-name mt-1 text-secondary">
                        Bienvenu dans votre compte nº{analytics.account_number ?? "__"}
                        &nbsp;de la categorie {Utils.Auth.getUser()
                        .user?.subscription_plan?.name ?? "___"}
                    </p>
                </div>  
            </div>
            <div className="row widget-radial-charts p-sm-1 p-0 align-items-stretch p
            osition-relative mb-2"> 
                <div className="col-4 top-card-item-wrapper">
                    <div className="card p-0 mb-0 text-center rounded bg-info h-100">
                        <div className="card-content">
                            <div className="card-body p-0">
                                <div className="d-lg-flex justify-content-between">
                                    <div className="widget-card-details d-flex flex-column 
                                    justify-content-between p-0 py-1 p-md-2 w-100">
                                        <div>
                                            <h2 className="font-weight-bolder text-white mb-0">
                                                {analytics.initial_stock ?? "--"}
                                            </h2>
                                            <p className="text-white label mb-0">
                                                Stock initial boutique
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-4 top-card-item-wrapper">
                    <div className="card p-0 mb-0 text-center rounded bg-info h-100">
                        <div className="card-content">
                            <div className="card-body p-0">
                                <div className="d-lg-flex justify-content-between">
                                    <div className="widget-card-details d-flex flex-column 
                                    justify-content-between p-0 py-1 p-md-2 w-100">
                                        <div>
                                            <h2 className="font-weight-bolder text-white mb-0">
                                                {analytics.orders_count ?? "--"}
                                            </h2>
                                            <p className="text-white label mb-0">
                                                Ebook(s) vendu(s)
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="col-4 top-card-item-wrapper">
                    <div className="card p-0 mb-0 text-center rounded bg-info h-100">
                        <div className="card-content">
                            <div className="card-body p-0">
                                <div className="d-lg-flex justify-content-between">
                                    <div className="widget-card-details d-flex flex-column 
                                    justify-content-between p-0 py-1 p-md-2 w-100">
                                        <div>
                                            <h2 className="font-weight-bolder text-white mb-0">
                                                {analytics.current_stock ?? "--"}
                                            </h2>
                                            <p className="text-white label mb-0">
                                                Ebook(s) en stocks
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row widget-radial-charts border-radius-t-lg mt-sm-1 
            mt-0 bg-white bg-primary px-3 pt-3" style={{paddingBottom: "30vh"}}>   
                
                <Components.DashbaordCard 
                iconElement={<i className="bx bx-store text-info" 
                style={{fontSize: "3rem"}}></i>}
                title={'Boutique'}
                handleClick={() => navigate('/ma-boutique')}
                value={analytics.products_count}/>
            
                <Components.DashbaordCard 
                iconElement={<i className="bx bx-wallet text-info" 
                style={{fontSize: "3rem"}}></i>}
                title={'Solde actuel'}
                value={`${analytics.revenu}$`}/>
            
                <Components.DashbaordCard 
                iconElement={<i className="bx bx-user text-info" 
                style={{fontSize: "3rem"}}></i>}
                title={'Filleuls'}
                handleClick={() => navigate('/mes-filleuls')}
                value={analytics.clients_count}/>
            
                <Components.DashbaordCard 
                iconElement={<i className="bx bx-bell text-info" 
                style={{fontSize: "3rem"}}></i>}
                title={'Notifications'}
                handleClick={() => navigate('/notifications')}
                value={analytics.notifications_count}/>
            </div>
        </section>
    )
}