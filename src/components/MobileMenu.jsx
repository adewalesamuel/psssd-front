import { Link } from "react-router-dom";

export function MobileMenu() {
    return (
        <nav className="d-inline-block d-xl-none bg-primary mobile-menu w-100 
        position-fixed rounded-t-md">
            <ul className="position-relative shadow-md d-flex 
            justify-content-between align-items-center m-0" style={{listStyleType: 'none'}}>
                <li className="text-center">
                    <Link to="/" className='text-white'>
                        <i className="bx d-inline-block w-100 bx-home-alt m-0" 
                        style={{fontSize: "1.6rem"}}></i>
                        <span className="menu-title">
                            Accueil
                        </span>
                    </Link>
                </li>
                <li className="text-center">
                    <Link to="/mes-achats" className='text-white'>
                        <i className="bx d-inline-block w-100 bx-cart m-0" 
                        style={{fontSize: "1.6rem"}}></i>
                        <span className="menu-title">
                            Mes achats
                        </span>
                    </Link>
                </li>
                <li className="text-center">
                    <Link to="/ma-boutique" className='text-white'>
                        <i className="bx d-inline-block w-100 bx-store m-0" 
                        style={{fontSize: "1.6rem"}}></i>
                        <span className="menu-title">
                            Ma boutique
                        </span>
                    </Link>
                </li>
                <li className="text-center">
                    <Link to="/mes-comptes" className='text-white'>
                        <i className="bx d-inline-block w-100 bx-book m-0" 
                        style={{fontSize: "1.6rem"}}></i>
                        <span className="menu-title">
                            Mes comptes
                        </span>
                    </Link>
                </li>
                <li className="text-center">
                    <Link to="/profil" className='text-white'>
                        <i className="bx d-inline-block w-100 bx-user m-0" 
                        style={{fontSize: "1.6rem"}}></i>
                        <span className="menu-title">
                            Mon Profil
                        </span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}