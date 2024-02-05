import { Link } from 'react-router-dom';
import avatarImg from '../app-assets/images/portrait/small/avatar-s-11.jpg';

export default function Header() {
    return (
        <nav className="header-navbar main-header-navbar navbar-expand-lg navbar navbar-with-menu fixed-top">
            <div className="navbar-wrapper">
                <div className="navbar-container content">
                    <div className="navbar-collapse" id="navbar-mobile">
                        <div className="mr-auto float-left bookmark-wrapper d-flex align-items-center">
                            <ul className="nav navbar-nav">
                                <li className="nav-item mobile-menu d-xl-none mr-auto">
                                    <Link className="nav-link nav-menu-main menu-toggle hidden-xs" to="/">
                                        <i className="ficon bx bx-menu"></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <ul className="nav navbar-nav float-right">
                            <li className="dropdown dropdown-user nav-item">
                                <Link className="dropdown-toggle nav-link dropdown-user-link" to="/">
                                    <div className="user-nav d-sm-flex d-none">
                                        <span className="user-name">John Doe</span>
                                        <span className="user-status text-muted">Available</span>
                                    </div>
                                    <span>
                                        <img className="round" src={avatarImg} alt="avatar" height="40" width="40" />
                                    </span>
                                </Link>
                                <div className="dropdown-menu dropdown-menu-right pb-0">
                                    <Link className="dropdown-item" to="/age-user-profile.html">
                                        <i className="bx bx-user mr-50"></i> Edit Profile
                                    </Link>
                                    <Link className="dropdown-item" to="/pp-email.html">
                                        <i className="bx bx-envelope mr-50"></i> My Inbox
                                    </Link>
                                    <Link className="dropdown-item" to="/pp-todo.html">
                                        <i className="bx bx-check-square mr-50"></i> Task
                                    </Link>
                                    <Link className="dropdown-item" to="/pp-chat.html">
                                        <i className="bx bx-message mr-50"></i> Chats
                                    </Link>
                                    <div className="dropdown-divider mb-0"></div>
                                    <Link className="dropdown-item" to="/uth-login.html">
                                        <i className="bx bx-power-off mr-50"></i> Logout
                                    </Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}