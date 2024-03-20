import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import { Services } from "../services";
import { Utils } from "../utils";

export function ProfileView(){
    const navigate = useNavigate();

    const handleLogoutClick = async () => {
        const {isConfirmed} = await Swal.fire({
            icon: 'warning',
            titleText: "Deconnexion!",
            text: 'Vous êtes sur le point de vous deconnecter',
            showCancelButton: true,
            cancelButtonText: 'Annuler',
            confirmButtonText: 'Me deconnecter'
        })

        if (isConfirmed) {
            Services.AuthService.logout(null);
            Utils.Auth.removeSessionToken();
            Utils.Auth.setUser(null);
            navigate('/connexion');
        }
    }

    return (
        <section className="row">
            <div className="list-group w-100">
                <Link to='/mon-profil' className="list-group-item d-inline-block text-default 
                d-flex justify-content-between align-items-center">
                    <div>
                        <i className="bx bx-edit mr-2 align-middle"></i>
                        <span className="">Modifier mes informations</span>
                    </div>
                    <i className="bx bx-chevron-right d-inline-block" 
                    style={{fontSize: "1.8rem"}}></i>
                </Link>
                <span className="list-group-item d-inline-block text-default 
                d-flex justify-content-between align-items-center" onClick={handleLogoutClick}>
                    <div>
                        <i className="bx bx-exit mr-2 align-middle"></i>
                        <span className="">Se deconnecter</span>
                    </div>
                    <i className="bx bx-chevron-right d-inline-block" 
                    style={{fontSize: "1.8rem"}}></i>
                </span>
            </div>
        </section>
    )
}