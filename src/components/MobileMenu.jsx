import { NavLink } from "react-router-dom";

export function MobileMenu() {
    return (
        <nav className="bg-white mobile-menu w-100 position-fixed">
            <ul className="position-relative shadow-md d-flex 
            justify-content-between align-items-center m-0" style={{listStyleType: 'none'}}>
                <li className="text-center">
                    <NavLink to="/" className='text-secondary'>
                        <i className="bx d-inline-block w-100 bx-home-alt m-0" 
                        style={{fontSize: "1.6rem"}}></i>
                        <span className="menu-title text-uppercase">
                            Acceuil
                        </span>
                    </NavLink>
                </li>
                <li className="text-center">
                    <NavLink to="/mes-achats" className='text-secondary'>
                        <i className="bx d-inline-block w-100 bx-book m-0" 
                        style={{fontSize: "1.6rem"}}></i>
                        <span className="menu-title text-uppercase">
                            Mes achats
                        </span>
                    </NavLink>
                </li>
                <li className="text-center">
                    <NavLink to="/ma-boutique" className='text-secondary'>
                        <i className="bx d-inline-block w-100 bx-store m-0" 
                        style={{fontSize: "1.6rem"}}></i>
                        <span className="menu-title text-uppercase">
                            Ma boutique
                        </span>
                    </NavLink>
                </li>
                <li className="text-center">
                    <NavLink to="/mon-profil" className='text-secondary'>
                        <i className="bx d-inline-block w-100 bx-user m-0" 
                        style={{fontSize: "1.6rem"}}></i>
                        <span className="menu-title text-uppercase">
                            Mon Profil
                        </span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}