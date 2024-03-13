import { useCallback, useEffect, useState } from "react";
import { Services } from '../services';
import { Components } from "../components";
import { Utils } from "../utils";
import { Link } from "react-router-dom";

export default function DashbaordView() {
    const abortController = new AbortController();

    const [analytics, setAnalytics] = useState({});
    const [, setIsLoading] = useState(false);

    const init = useCallback(async () => {
        setIsLoading(true);
        try {
            const {analytics} = await Services.UserService.analytics(
                abortController.signal);
            setAnalytics(analytics);
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
                            {Utils.Auth.getUser().shop_name ?? "---"}
                            &nbsp; <i className="bx bx-pencil"></i>
                        </p>
                    </Link>
                </div>  
            </div>
            <div className="row widget-radial-charts p-1 bg-primary rounded-lg"> 
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
                                            <p className="text-white">
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
                                            <p className="text-white">
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
                                            <p className="text-white">
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

            <div className="row widget-radial-charts p-1 rounded-lg mt-1 bg-white">   
                <div className="col-6">
                    <Components.DashbaordCard 
                    iconElement={<i className="bx bx-store text-primary p-1 mb-1
                    rounded-circle shadow-md" style={{fontSize: "1.7rem"}}></i>}
                    title={'Publications'}
                    value={analytics.products_count}/>
                </div>
                <div className="col-6">
                    <Components.DashbaordCard 
                    iconElement={<i className="bx bx-wallet text-primary p-1 mb-1
                    rounded-circle shadow-md" style={{fontSize: "1.7rem"}}></i>}
                    title={'Solde actuel'}
                    value={analytics.revenu_count}/>
                </div>
                <div className="col-6">
                    <Components.DashbaordCard 
                    iconElement={<i className="bx bx-user text-primary p-1 mb-1
                    rounded-circle shadow-md" style={{fontSize: "1.7rem"}}></i>}
                    title={'Clients'}
                    value={analytics.clients_count}/>
                </div>
                <div className="col-6">
                    <Components.DashbaordCard 
                    iconElement={<i className="bx bx-bell text-primary p-1 mb-1
                    rounded-circle shadow-md" style={{fontSize: "1.7rem"}}></i>}
                    title={'Notifications'}
                    value={analytics.notifications_count}/>
                </div>
            </div>
        </section>
    )
}