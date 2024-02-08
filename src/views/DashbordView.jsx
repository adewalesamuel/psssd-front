import { useCallback, useEffect, useState } from "react";
import {Services} from '../services';

export default function DashbaordView() {
    const abortController = new AbortController();

    const [analytics, setAnalytics] = useState({});
    const [isLoading, setIsLoading] = useState(false);

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
        <section>
            <div className="row widget-radial-charts p-1 bg-primary rounded-lg">   
                <div className="col-sm-4">
                    <div className="card p-0 my-1 text-center rounded-lg" 
                    style={{backgroundColor: "rgba(225,225,225,0.7)"}}>
                        <div className="card-content">
                            <div className="card-body p-0">
                                <div className="d-lg-flex justify-content-between">
                                    <div className="widget-card-details d-flex flex-column 
                                    justify-content-between p-2 w-100">
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
                <div className="col-sm-4">
                    <div className="card p-0 my-1 text-center rounded-lg" 
                    style={{backgroundColor: "rgba(225,225,225,0.7)"}}>
                        <div className="card-content">
                            <div className="card-body p-0">
                                <div className="d-lg-flex justify-content-between">
                                    <div className="widget-card-details d-flex flex-column 
                                    justify-content-between p-2 w-100">
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
                
                <div className="col-sm-4">
                    <div className="card p-0 my-1 text-center rounded-lg" 
                    style={{backgroundColor: "rgba(225,225,225,0.7)"}}>
                        <div className="card-content">
                            <div className="card-body p-0">
                                <div className="d-lg-flex justify-content-between">
                                    <div className="widget-card-details d-flex flex-column 
                                    justify-content-between p-2 w-100">
                                        <div>
                                            <h3 className="font-weight-normal text-white">
                                                {analytics.current_stock ?? "--"}
                                            </h3>
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
                    <div className="card p-0 my-1 text-center rounded-lg shadow-md">
                        <div className="card-content">
                            <div className="card-body p-0">
                                <div className="d-lg-flex justify-content-between">
                                    <div className="widget-card-details d-flex flex-column 
                                    justify-content-between p-2 w-100">
                                        <div>
                                            <p className="font-weight-bold">Publications</p>
                                            <h3 className="font-weight-normal">
                                                {analytics.products_count ?? "--"}
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="card p-0 my-1 text-center rounded-lg shadow-md">
                        <div className="card-content">
                            <div className="card-body p-0">
                                <div className="d-lg-flex justify-content-between">
                                    <div className="widget-card-details d-flex flex-column 
                                    justify-content-between p-2 w-100">
                                        <div>
                                            <p className="font-weight-bold">Solde actuel</p>
                                            <h3 className="font-weight-normal">
                                                {analytics.revenu ?? "--"}
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="card p-0 my-1 text-center rounded-lg shadow-md">
                        <div className="card-content">
                            <div className="card-body p-0">
                                <div className="d-lg-flex justify-content-between">
                                    <div className="widget-card-details d-flex flex-column 
                                    justify-content-between p-2 w-100">
                                        <div>
                                            <p className="font-weight-bold">Clients</p>
                                            <h3 className="font-weight-normal">
                                                {analytics.clients_count ?? "--"}
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="card p-0 my-1 text-center rounded-lg shadow-md">
                        <div className="card-content">
                            <div className="card-body p-0">
                                <div className="d-lg-flex justify-content-between">
                                    <div className="widget-card-details d-flex flex-column 
                                    justify-content-between p-2 w-100">
                                        <div>
                                            <p className="font-weight-bold">Notifications</p>
                                            <h3 className="font-weight-normal">
                                                {analytics.notifications_count ?? "--"}
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}