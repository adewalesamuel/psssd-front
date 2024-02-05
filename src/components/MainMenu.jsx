export  default function MainMenu() {
    return (
        <div className="main-menu menu-fixed menu-light menu-accordion menu-shadow">
            <div className="navbar-header">
                <ul className="nav navbar-nav flex-row">
                    <li className="nav-item mr-auto">
                        <a className="navbar-brand" href="../../../html/ltr/vertical-menu-boxicons-template/index.html">
                            <div className="brand-logo">
                                <img className="logo" src="../../../app-assets/images/logo/logo.png" />
                            </div>
                            <h2 className="brand-text mb-0">Frest</h2>
                        </a>
                    </li>
                    <li className="nav-item nav-toggle"><a className="nav-link modern-nav-toggle pr-0">
                        <i className="bx bx-x d-block d-xl-none font-medium-4 primary toggle-icon"></i>
                        <i className="toggle-icon bx bx-disc font-medium-4 d-none d-xl-block 
                        collapse-toggle-icon primary"></i>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="shadow-bottom"></div>
            <div className="main-menu-content">
                <ul className="navigation navigation-main" id="main-menu-navigation">
                    <li className=" nav-item">
                        <a href="index.html"><i className="bx bx-home-alt"></i>
                            <span className="menu-title" data-i18n="Dashboard">Dashboard</span>
                            <span className="badge badge-light-danger badge-pill badge-round 
                            float-right mr-2">
                                2
                            </span>
                        </a>
                        <ul className="menu-content">
                            <li>
                                <a href="dashboard-ecommerce.html"><i className="bx bx-right-arrow-alt"></i>
                                    <span className="menu-item" data-i18n="eCommerce">eCommerce</span>
                                </a>
                            </li>
                            <li className="active">
                                <a href="dashboard-analytics.html"><i className="bx bx-right-arrow-alt"></i>
                                    <span className="menu-item" data-i18n="Analytics">Analytics</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className=" navigation-header"><span>Apps</span>
                    </li>
                    <li className=" nav-item">
                        <a href="app-email.html"><i className="bx bx-envelope"></i>
                            <span className="menu-title" data-i18n="Email">Email</span>
                        </a>
                    </li>
                    <li className=" nav-item">
                        <a href="app-chat.html"><i className="bx bx-chat"></i>
                            <span className="menu-title" data-i18n="Chat">Chat</span>
                        </a>
                    </li>
                    <li className=" nav-item">
                        <a href="app-todo.html"><i className="bx bx-check-circle"></i>
                            <span className="menu-title" data-i18n="Todo">Todo</span>
                        </a>
                    </li>
                    <li className=" nav-item">
                        <a href="app-calendar.html"><i className="bx bx-calendar"></i>
                            <span className="menu-title" data-i18n="Calendar">Calendar</span>
                        </a>
                    </li>
                    <li className=" nav-item">
                        <a href="app-kanban.html"><i className="bx bx-grid-alt"></i>
                            <span className="menu-title" data-i18n="Kanban">Kanban</span>
                        </a>
                    </li>
                    <li className="disabled nav-item">
                        <a href="#"><i className="bx bx-unlink"></i>
                            <span className="menu-title" data-i18n="Disabled Menu">Disabled Menu</span>
                        </a>
                    </li>
                    <li className=" navigation-header"><span>Support</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}