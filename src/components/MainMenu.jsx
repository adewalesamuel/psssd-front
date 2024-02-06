import { NavLink } from "react-router-dom";
import logo from '../app-assets/images/logo/logo.png';

export  default function MainMenu() {
    return (
        <div className="main-menu menu-fixed menu-light menu-accordion menu-shadow">
            <div className="navbar-header">
                <ul className="nav navbar-nav flex-row">
                    <li className="nav-item mr-auto">
                        <NavLink className="navbar-brand" to="/">
                            <div className="brand-logo">
                                <img className="logo p-0" src={logo} alt="logo"/>
                            </div>
                            <h2 className="brand-text mb-0">Frest</h2>
                        </NavLink>
                    </li>
                    <li className="nav-item nav-toggle">
                        <NavLink className="nav-link modern-nav-toggle pr-0">
                            <i className="bx bx-x d-block d-xl-none font-medium-4 primary toggle-icon"></i>
                            <i className="toggle-icon bx bx-disc font-medium-4 d-none d-xl-block 
                            collapse-toggle-icon primary"></i>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="shadow-bottom"></div>
            <div className="main-menu-content">
                <ul className="navigation navigation-main" id="main-menu-navigation">
                    <li className="navigation-header"><span>Menu</span></li>
                    <li className="nav-item">
                        <NavLink className='text-secondary' to="/">
                            <i className="bx bx-home-alt"></i>
                            <span className="menu-title" data-i18n="Dashboard">Tableau de bord</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className='text-secondary' to="/mes-publications">
                            <i className="bx bx-cart"></i>
                            <span className="menu-title" data-i18n="Email">Mes Publications</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className='text-secondary' to="/mon-profil">
                            <i className="bx bx-user"></i>
                            <span className="menu-title" data-i18n="Chat">Mon Profil</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className='text-secondary' to="/nouveau-produit">
                            <i className="bx bx-plus-circle"></i>
                            <span className="menu-title" data-i18n="Todo">Publier un produit</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}