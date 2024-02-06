import { useEffect } from "react";
import { Components } from "../components";
import {useNavigate} from 'react-router-dom';
import { Utils } from "../utils";

export default function MainLayout({children}) {
    const navigate = useNavigate();
    const {isLoggedIn, getUser} = Utils.Auth;

    useEffect(() => {
        window.document.body.className = `vertical-layout vertical-menu-modern 
        boxicon-layout no-card-shadow 2-columns navbar-sticky footer-static`;

        if (!isLoggedIn()) return navigate('/connexion', {replace: true});
        if (getUser().is_active === false) navigate('/activation', {replace: true});
    }, [])

    if (!isLoggedIn()) return null;

    return (
        <>
            <Components.Header />
            <Components.MainMenu />
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
            <Components.Footer />
        </>
    )
}