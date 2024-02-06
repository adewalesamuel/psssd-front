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
        bg-full-screen-image  blank-page blank-page`;

        if (isLoggedIn() && getUser().is_active) 
            return navigate('/', {replace: true});

        if (pathname !== '/activation') {
            if (isLoggedIn() && !getUser().is_active)
                return navigate('/activation', {replace: true});
        } else {
            if (!isLoggedIn()) return navigate('/', {replace: true});
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