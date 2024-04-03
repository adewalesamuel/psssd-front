import { useCallback, useEffect, useState } from "react";
import { Services } from '../services';
import { Components } from "../components";
import { Utils } from "../utils";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

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
                    <Link className="text-center" to='/mon-profil'>
                        <Components.AvatarImg size={"100"}/>
                        <p className="user-name mt-1 text-secondary">
                            Bienvenu dans votre compte nº{analytics.accounts_count ?? 1}
                            &nbsp;de la categorie <b>{Utils.Auth.getUser().user?.subscription_plan?.name ?? "___"}</b>
                            &nbsp; <i className="bx bx-pencil"></i>
                        </p>
                    </Link>
                </div>  
            </div>
            <div className="row widget-radial-charts p-sm-1 p-0 bg-primary border-radius-t-lg"> 
                <div className="col-4 top-card-item-wrapper">
                    <div className="card p-0 my-1 text-center rounded-lg" 
                    style={{backgroundColor: "rgba(225,225,225,0.7)"}}>
                        <div className="card-content">
                            <div className="card-body p-0">
                                <div className="d-lg-flex justify-content-between">
                                    <div className="widget-card-details d-flex flex-column 
                                    justify-content-between p-0 py-1 p-md-2 w-100">
                                        <div>
                                            <h5 className="font-medium-2 font-weight-normal text-white">
                                                {analytics.initial_stock ?? "--"}
                                            </h5>
                                            <p className="text-white label">
                                                Stock initial
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-4 top-card-item-wrapper">
                    <div className="card p-0 my-1 text-center rounded-lg" 
                    style={{backgroundColor: "rgba(225,225,225,0.7)"}}>
                        <div className="card-content">
                            <div className="card-body p-0">
                                <div className="d-lg-flex justify-content-between">
                                    <div className="widget-card-details d-flex flex-column 
                                    justify-content-between p-0 py-1 p-md-2 w-100">
                                        <div>
                                            <h5 className="font-medium-2 font-weight-normal text-white">
                                                {analytics.orders_count ?? "--"}
                                            </h5>
                                            <p className="text-white label">
                                                Ebooks vendus
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="col-4 top-card-item-wrapper">
                    <div className="card p-0 my-1 text-center rounded-lg" 
                    style={{backgroundColor: "rgba(225,225,225,0.7)"}}>
                        <div className="card-content">
                            <div className="card-body p-0">
                                <div className="d-lg-flex justify-content-between">
                                    <div className="widget-card-details d-flex flex-column 
                                    justify-content-between p-0 py-1 p-md-2 w-100">
                                        <div>
                                            <h5 className="font-weight-normal text-white">
                                                {analytics.current_stock ?? "--"}
                                            </h5>
                                            <p className="text-white label">
                                                Ebooks en stocks
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row widget-radial-charts p-1 border-radius-t-lg mt-sm-1 mt-0 bg-white">   
                <div className="col-6">
                    <Components.DashbaordCard 
                    iconElement={<i className="bx bx-store text-primary p-1 mb-1
                    rounded-circle shadow-md" style={{fontSize: "1.7rem"}}></i>}
                    title={'Boutique'}
                    handleClick={() => navigate('/ma-boutique')}
                    value={analytics.products_count}/>
                </div>
                <div className="col-6">
                    <Components.DashbaordCard 
                    iconElement={<i className="bx bx-wallet text-primary p-1 mb-1
                    rounded-circle shadow-md" style={{fontSize: "1.7rem"}}></i>}
                    title={'Solde actuel'}
                    value={analytics.revenu}/>
                </div>
                <div className="col-6">
                    <Components.DashbaordCard 
                    iconElement={<i className="bx bx-user text-primary p-1 mb-1
                    rounded-circle shadow-md" style={{fontSize: "1.7rem"}}></i>}
                    title={'Filleuls'}
                    value={analytics.clients_count}/>
                </div>
                <div className="col-6">
                    <Components.DashbaordCard 
                    iconElement={<i className="bx bx-bell text-primary p-1 mb-1
                    rounded-circle shadow-md" style={{fontSize: "1.7rem"}}></i>}
                    title={'Notifications'}
                    handleClick={() => navigate('/notifications')}
                    value={analytics.notifications_count}/>
                </div>
            </div>
        </section>
    )
}