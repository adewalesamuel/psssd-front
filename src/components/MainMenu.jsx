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
                    <li className="navigation-header"><span>Apps</span></li>
                    <li className="nav-item">
                        <NavLink to="/"><i className="bx bx-home-alt"></i>
                            <span className="menu-title" data-i18n="Dashboard">Dashboard</span>
                            <span className="badge badge-light-danger badge-pill badge-round 
                            float-right mr-2">
                                2
                            </span>
                        </NavLink>
                        <ul className="menu-content">
                            <li>
                                <NavLink to="/"><i className="bx bx-right-arrow-alt"></i>
                                    <span className="menu-item" data-i18n="eCommerce">eCommerce</span>
                                </NavLink>
                            </li>
                            <li className="active">
                                <NavLink to="/"><i className="bx bx-right-arrow-alt"></i>
                                    <span className="menu-item" data-i18n="Analytics">Analytics</span>
                                </NavLink>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/"><i className="bx bx-envelope"></i>
                            <span className="menu-title" data-i18n="Email">Email</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/"><i className="bx bx-chat"></i>
                            <span className="menu-title" data-i18n="Chat">Chat</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/"><i className="bx bx-check-circle"></i>
                            <span className="menu-title" data-i18n="Todo">Todo</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/"><i className="bx bx-calendar"></i>
                            <span className="menu-title" data-i18n="Calendar">Calendar</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/"><i className="bx bx-grid-alt"></i>
                            <span className="menu-title" data-i18n="Kanban">Kanban</span>
                        </NavLink>
                    </li>
                    <li className="disabled nav-item">
                        <NavLink to="/"><i className="bx bx-unlink"></i>
                            <span className="menu-title" data-i18n="Disabled Menu">Disabled Menu</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}