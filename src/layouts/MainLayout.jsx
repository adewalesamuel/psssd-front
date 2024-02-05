import { Components } from "../components";

export default function MainLayout({children}) {
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