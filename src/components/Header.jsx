import { Link } from 'react-router-dom';
import {Utils} from "../utils";
import {Services} from "../services";
import Swal from 'sweetalert2';
import {useNavigate, useLocation} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Components } from '.';
import logo from '../app-assets/images/logo/logo.png';

export default function Header() {

    const navigate = useNavigate();
    
    const {pathname} = useLocation();

    const [title, setTitle] = useState('');

    const handleProfileClick = e => {
        e.preventDefault();
        Utils.Dom.toggleElement("#headerDropdown");
    }

    const handleLogoutClick = async () => {
        const {isConfirmed} = await Swal.fire({
            icon: 'warning',
            iconColor: 'red',
            titleText: "Deconnexion!",
            text: 'Vous êtes sur le point de vous deconnecter',
            showCancelButton: true,
            cancelButtonText: 'Annuler',
            confirmButtonText: 'Me deconnecter',
            confirmButtonColor: 'red'
        })

        if (isConfirmed) {
            Services.AuthService.logout(null);
            Utils.Auth.removeSessionToken();
            Utils.Auth.setUser(null);
            navigate('/connexion');
        }
    }

    useEffect(() => {
        if (pathname === '/' || pathname === undefined || !pathname) {
            setTitle('Tableau de bord')
        } else {
            setTitle(`${(pathname[1].toUpperCase() + pathname.slice(2)).replace('-', ' ')}`)
        }

        window.scrollTo({top: 0});
    }, [pathname])
    return (
        <nav className="header-navbar main-header-navbar navbar-expand-lg navbar 
        navbar-with-menu fixed-top">
            <div className='w-100 bg-primary px-1 text-center d-block d-lg-none d-flex 
            justify-content-between align-items-center py-1 rounded-b-md'>
                <Link className="" to="/">
                    <span className="bg-white d-inline-block rounded-circle 
                    overflow-hidden">
                        <img src={logo} alt={"logo"} width={"40px"} height={"40px"} 
                        style={{objectFit: 'contain'}}/>
                    </span>
                </Link>
                <h6 className='h6 mb-0 font-weight-bolder text-white text-uppercase'>{title}</h6>
                <Link to='/mon-profil'>
                    <Components.AvatarImg />
                </Link>
            </div>
            <div className="d-none d-lg-block navbar-wrapper">
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
                            <div className='h5'>{title}</div>
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
                                    <span><Components.AvatarImg /></span>
                                </Link>
                                <div className="dropdown-menu dropdown-menu-right pb-0" id="headerDropdown">
                                    <Link className="dropdown-item text-secondary" to="/notifications">
                                        <i className="bx bx-bell mr-50"></i> Notifications
                                    </Link>
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