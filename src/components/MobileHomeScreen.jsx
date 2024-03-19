import logo from '../app-assets/images/logo/logo.png';
import purpleBg from '../app-assets/images/backgrounds/purple-wave.png';

export function MobileHomeScreen({setIsVisible}) {
	return (
			<section className='fixed-top w-100 h-100 bg-white d-block d-lg-none' 
			style={{
				backgroundImage: `url(${purpleBg})`,
				backgroundPosition: '0 0',
				backgroundSize: 'contain',
				backgroundRepeat: 'no-repeat',
			}}>
				<div className="position-relative d-flex flex-column justify-content-between 
				w-100 h-100 text-center">
					<div className='text-white'>
						<div className="py-4">
							<span className="bg-white d-inline-block rounded-circle 
							overflow-hidden p-1">
								<img src={logo} alt={import.meta.env.VITE_APP_NAME} 
								width={"120px"} height={"120px"} style={{objectFit: 'contain'}}/>
							</span>
						</div>
						<div className='text-uppercase mb-2'>
							<h2 className='text-white mb-0 text-bold-600'>Le Psssp Afrique</h2>
							<small className='text-white'>
								Projet solidarite, sante spiritualité et prospérité
							</small>
						</div>
						<small>
							Adhérez au projet PSSSP achetant nos ebooks afin de bâtir votre avenir 
							sur les quatres piliers de la vie humaine. &laquo; La solidarite, la santé, 
							la spiritualité et la prospérité financière&raquo;
						</small>
						<div className='py-5'>
							<h4 className='text-bold-600 text-uppercase text-white'>
								Déjà, 500.000 comptes crées
							</h4>
						</div>
					</div>
					<div className='px-2 pb-3'>
						<div className='text-uppercase py-2'>Le projet Psssp international</div>
						<small className='text-bold-600'>
							ASIE - EUROPE - AMERIQUE - AFRIQUE - PACIFIQUE
						</small>
						<button className='btn btn-block p-1 text-uppercase mt-2 rounded 
						text-primary text-bold-600' style={{border: '1px solid var(--color-primary)'}}
						onClick={() => setIsVisible(false)}>
							Suivant
						</button>
					</div>
				</div>
			</section>
		)
}