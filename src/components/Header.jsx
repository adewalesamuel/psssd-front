export default function Header() {
    return (
        <nav className="header-navbar main-header-navbar navbar-expand-lg navbar navbar-with-menu fixed-top">
            <div className="navbar-wrapper">
                <div className="navbar-container content">
                    <div className="navbar-collapse" id="navbar-mobile">
                        <div className="mr-auto float-left bookmark-wrapper d-flex align-items-center">
                            <ul className="nav navbar-nav">
                                <li className="nav-item mobile-menu d-xl-none mr-auto">
                                    <a className="nav-link nav-menu-main menu-toggle hidden-xs" href="#">
                                        <i className="ficon bx bx-menu"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <ul className="nav navbar-nav float-right">
                            <li className="dropdown dropdown-user nav-item">
                                <a className="dropdown-toggle nav-link dropdown-user-link" href="#" data-toggle="dropdown">
                                    <div className="user-nav d-sm-flex d-none">
                                        <span className="user-name">John Doe</span>
                                        <span className="user-status text-muted">Available</span>
                                    </div>
                                    <span>
                                        <img className="round" src="../../../app-assets/images/portrait/small/avatar-s-11.jpg" alt="avatar" height="40" width="40" />
                                    </span>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right pb-0">
                                    <a className="dropdown-item" href="page-user-profile.html">
                                        <i className="bx bx-user mr-50"></i> Edit Profile
                                    </a>
                                    <a className="dropdown-item" href="app-email.html">
                                        <i className="bx bx-envelope mr-50"></i> My Inbox
                                    </a>
                                    <a className="dropdown-item" href="app-todo.html">
                                        <i className="bx bx-check-square mr-50"></i> Task
                                    </a>
                                    <a className="dropdown-item" href="app-chat.html">
                                        <i className="bx bx-message mr-50"></i> Chats
                                    </a>
                                    <div className="dropdown-divider mb-0"></div>
                                    <a className="dropdown-item" href="auth-login.html">
                                        <i className="bx bx-power-off mr-50"></i> Logout
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}