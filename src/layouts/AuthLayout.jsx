import { useEffect } from "react"
import "../app-assets/css/pages/authentication.css"

export default function AuthLayout({children}) {
    useEffect(() => {
        window.document.body.className = `vertical-layout vertical-menu-modern 
boxicon-layout no-card-shadow 1-column  navbar-sticky footer-static 
        bg-full-screen-image  blank-page blank-page`
    })

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