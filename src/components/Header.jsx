import { Link } from 'react-router-dom';
import avatarImg from '../app-assets/images/placeholder.jpg';
import {Utils} from "../utils";
import {Services} from "../services";
import Swal from 'sweetalert2';
import {useNavigate} from 'react-router-dom';

export default function Header() {

    const navigate = useNavigate();

    const handleProfileClick = e => {
        e.preventDefault();
        Utils.Dom.toggleElement("#headerDropdown");
    }

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
        <nav className="header-navbar main-header-navbar navbar-expand-lg navbar 
        navbar-with-menu fixed-top">
            <div className="navbar-wrapper">
                <div className="navbar-container content">
                    <div className="navbar-collapse" id="navbar-mobile">
                        <div className="mr-auto float-left bookmark-wrapper d-flex a
                        lign-items-center">
                            <ul className="nav navbar-nav">
                                <li className="nav-item mobile-menu d-xl-none mr-auto">
                                    <Link className="nav-link nav-menu-main menu-toggle 
                                    hidden-xs" to="/">
                                        <i className="ficon bx bx-menu"></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <ul className="nav navbar-nav float-right">
                            <li className="dropdown dropdown-user nav-item">
                                <Link className="dropdown-toggle nav-link dropdown-user-link" to=""
                                onClick={handleProfileClick}>
                                    <div className="user-nav d-sm-flex d-none">
                                        <span className="user-name">
                                            {Utils.Auth.getUser().fullname ?? "---"}
                                        </span>
                                        <span className="user-status text-muted">En ligne</span>
                                    </div>
                                    <span>
                                        <img className="round" src={avatarImg} alt="avatar" 
                                        height="40" width="40" />
                                    </span>
                                </Link>
                                <div className="dropdown-menu dropdown-menu-right pb-0" id="headerDropdown">
                                    <Link className="dropdown-item text-secondary" to="/mon-profil">
                                        <i className="bx bx-user mr-50"></i> Mon Profil
                                    </Link>
                                    <div className="dropdown-divider mb-0"></div>
                                    <span className="dropdown-item" role='button' onClick={handleLogoutClick}>
                                        <i className="bx bx-power-off mr-50"></i> Deconnexion
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}