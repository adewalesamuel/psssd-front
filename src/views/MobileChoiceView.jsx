import { Layouts } from "../layouts";
import logo from '../app-assets/images/logo/logo.png';
import { Link } from "react-router-dom";
export function MobileChoiceView() {
    return (
        <Layouts.AuthLayout>
            <section className='w-100 vh-100 bg-primary d-flex 
            justify-content-center align-items-center'>
                <div className="px-2 w-100" style={{maxWidth: '300px'}}>
                    <div className="text-center mb-1">
                        <span className="bg-white d-inline-block rounded-circle 
                        overflow-hidden p-1">
                            <img src={logo} width={50} height={50} 
                            style={{objectFit: 'contain'}}/>
                        </span>
                    </div>
                    <Link className="btn btn-block font-weight-bolder text-uppercase 
                    btn-info btn-sm" to={'/connexion'}>
                        Se connecter
                    </Link>
                    <Link className="btn btn-block font-weight-bolder text-uppercase 
                    bg-white btn-sm text-primary" to={'/inscription'}>
                        S&apos;inscrire
                    </Link>
                </div>
			</section>
        </Layouts.AuthLayout>
    )
}