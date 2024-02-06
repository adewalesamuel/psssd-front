import { Layouts } from "../layouts";

export default function ActivationView() {

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
                                            <h4 className="text-center mb-2 text-uppercase">Connexion</h4>
                                        </div>
                                    </div>
                                    <div className="card-content">
                                        <div className="card-body">

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