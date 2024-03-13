import { NavLink } from "react-router-dom";
import logo from '../app-assets/images/logo/logo.png';

export  default function MainMenu() {
    return (
        <div className="main-menu menu-fixed menu-light menu-accordion menu-shadow bg-white">
            <div className="navbar-header">
                <ul className="nav navbar-nav flex-row">
                    <li className="nav-item mr-auto my-1">
                        <NavLink className="" to="/">
                            <div className="brand-logo">
                                <img className="p-0" src={logo} alt="logo" 
                                width="90px"/>
                            </div>
                            {/* <h2 className="brand-text mb-0"></h2> */}
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="shadow-bottom"></div>
            <div className="main-menu-content mt-3">
                <ul className="navigation navigation-main bg-white" id="main-menu-navigation">
                    <li className="navigation-header"><span>Menu</span></li>
                    <li className="nav-item">
                        <NavLink to="/">
                            <i className="bx bx-home-alt"></i>
                            <span className="menu-title">Tableau de bord</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/mes-livres">
                            <i className="bx bx-book"></i>
                            <span className="menu-title">Mes livres</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/ma-boutique">
                            <i className="bx bx-store"></i>
                            <span className="menu-title">Ma boutique</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/mon-profil">
                            <i className="bx bx-user"></i>
                            <span className="menu-title">Mon Profil</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}