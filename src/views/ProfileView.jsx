import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import { Services } from "../services";
import { Utils } from "../utils";
import imgPlaceholder from '../app-assets/images/placeholder.jpg';

export function ProfileView(){
    const navigate = useNavigate();

    const handleLogoutClick = async () => {
        const {isConfirmed} = await Swal.fire({
            icon: 'warning',
            iconColor: 'red',
            // iconHtml
            titleText: "Deconnexion!",
            text: 'Vous êtes sur le point de vous deconnecter',
            showCancelButton: true,
            cancelButtonText: 'Annuler',
            confirmButtonText: 'Me deconnecter',
            confirmButtonColor: "red"
        })

        if (isConfirmed) {
            Services.AuthService.logout(null);
            Utils.Auth.removeSessionToken();
            Utils.Auth.setUser(null);
            navigate('/connexion');
        }
    }

    return (
        <section className="row d-block pt-3">
            <div className="bg-primary text-white py-2">
                <div className="px-5 pb-2 d-flex align-items-center 
                justify-content-center flex-row flex-wrap">
                    <img src={Utils.Auth.getUser().profile_img_url ?? imgPlaceholder}
                    className="mr-2 img-fluid rounded-circle" width={80} height={80}/>
                    <div>
                        <h6 className="mb-0 text-white">Bonjour !</h6>
                        <h5 className="mb-0 text-white">
                            {Utils.Auth.getUser().fullname}
                        </h5>
                    </div>
                </div>
                <div className="list-group w-100">
                    <Link to='/mon-profil' className="list-group-item d-inline-block 
                    text-default d-flex justify-content-between align-items-center 
                    bg-info text-white">
                        <div>
                            <i className="bx bx-edit mr-2 align-middle"></i>
                            <span className="">Modifier mes informations</span>
                        </div>
                        <i className="bx bx-chevron-right d-inline-block" 
                        style={{fontSize: "1.8rem"}}></i>
                    </Link>
                    <span className="list-group-item d-inline-block text-default 
                    d-flex justify-content-between align-items-center bg-info 
                    text-white" onClick={handleLogoutClick}>
                        <div>
                            <i className="bx bx-exit mr-2 align-middle"></i>
                            <span className="">Se deconnecter</span>
                        </div>
                        <i className="bx bx-chevron-right d-inline-block" 
                        style={{fontSize: "1.8rem"}}></i>
                    </span>
                </div>
            </div>
        </section>
    )
}