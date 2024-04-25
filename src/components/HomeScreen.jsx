import logoNoBg from '../app-assets/images/logo/logo.png';
import homeImg from '../app-assets/images/home-img.jpeg';
import { Link } from 'react-router-dom';

export function HomeScreen() {
	return (
			<section className='w-100 h-100 bg-white'>
				<div className="position-relative d-flex flex-column 
				justify-content-between align-items-center w-100 vh-100 text-center">
					<div className='position-absolute w-100' style={{top: 0, left: 0, zIndex:0}}>
						<img className='img-fluid w-100' src={homeImg} 
						style={{maxHeight: "400px", objectFit: 'cover'}}/>
					</div>
					<img src={logoNoBg} width={60} className='position-relative mt-2'/>
					<div className='position-relative px-1' style={{maxWidth:'500px'}}>
						<div id="homeText" className='bg-primary px-1 rounded-lg text-white text-center'
						style={{paddingTop: '2rem', paddingBottom: '2rem'}}>
							<h2 className='text-uppercase text-white mb-0'>
								Psssp Business
							</h2>
							<small className='text-uppercase' style={{fontSize:"0.56rem"}}>
								<b>Projet: santé, solidarité, spiritualité et prospérité</b>
							</small>
							<div className='px-1 mt-2'>
								Adhérez au projet PSSSP Business pour bâtir un avenir sur 
								les quatres pilliers de la vie humaine
								<i style={{opacity: 0.5}} className='d-block'>
									&laquo; La Santé, la Solidarité, la Spiritualité 
									et la Prospérité Financière &raquo;
								</i>
							</div>
							<h6 className='text-uppercase mb-0 mt-2 font-weight-bolder text-white'>
								Déjà, 500 000 comptes créés
							</h6>
						</div>
						<h2 className='text-uppercase text-primary mt-4'>
								Le projet Psssp international
						</h2>
						<div className='text-primary'>
							<small className='text-uppercase'>
								asie - amérique - afrique - europe - pacifique
							</small>
						</div>
						<div className='px-2 mb-4 mt-4'>
							<Link to={'/mobile-choice'} className='btn btn-block btn-sm px-1 
							text-uppercase btn-info mt-2 text-bold-600 d-block d-lg-none'>
								Suivant
							</Link>
						</div>
					</div>
				</div>
			</section>
		)
}