export default function Footer() {
    return (
        <footer className="footer footer-static footer-light">
            <p className="clearfix mb-0">
                <span className="float-left d-inline-block">{new Date().getFullYear()} &copy; {import.meta.env.VITE_APP_NAME}</span>
                <span className="float-right d-sm-inline-block d-none">
                    Fait avec<i className="bx bxs-heart pink mx-50 font-small-3"></i>par
                    <a className="text-uppercase" href="" target="_blank">Digit</a>
                </span>
                <button className="btn btn-primary btn-icon scroll-top" type="button">
                    <i className="bx bx-up-arrow-alt"></i>
                </button>
            </p>
        </footer>
    )
}