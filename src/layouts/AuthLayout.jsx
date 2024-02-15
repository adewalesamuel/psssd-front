import "../app-assets/css/pages/authentication.css"
import { useEffect } from "react"
import {useNavigate, useLocation} from 'react-router-dom';
import { Utils } from "../utils";

export default function AuthLayout({children}) {
    const navigate = useNavigate();
    const {isLoggedIn, getUser} = Utils.Auth;

    const {pathname} = useLocation();

    useEffect(() => {
        window.document.body.className = `vertical-layout vertical-menu-modern 
        boxicon-layout no-card-shadow 1-column  navbar-sticky footer-static 
        bg-full-screen-image  blank-page`;

        if (isLoggedIn()) {
            if (getUser().is_active) {
                return navigate('/', {replace: true});
            } else {
                return navigate('/activation', {replace: true});
            }
        } else {
            if (pathname === '/activation')
                return navigate('/connexion', {replace: true});
        }

    }, [pathname])

    return (
        <div className="app-content content">
            <div className="content-overlay"></div>
            <div className="content-wrapper">
                <div className="content-header row">
                </div>
                <div className="content-body">
                    {children}
                </div>
            </div>
        </div>
    )
} 