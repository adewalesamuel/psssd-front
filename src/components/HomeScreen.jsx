import logo from '../app-assets/images/logo/logo.png';
import purpleBg from '../app-assets/images/backgrounds/purple-wave.png';

export function HomeScreen({setIsVisible}) {
	return (
			<section className='w-100 h-100 bg-white' 
			style={{
				backgroundImage: `url(${purpleBg})`,
				backgroundPosition: '0 0',
				backgroundSize: '100% 80%',
				backgroundRepeat: 'no-repeat',
			}}>
				<div className="position-relative d-flex flex-column 
				justify-content-between w-100 h-100 text-center">
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
								Projet santé, solidarité spiritualité et prospérité
							</small>
						</div>
						<small className='d-inline-block' style={{maxWidth: "600px"}}>
							Adhérez au projet PSSSP Afrique pour bâtir votre avenir sur les quatre 
							piliers de la vie humaine: &quot;La Santé, la Solidarité, la Spiritualité 
							et la Prospérité financière&quot; 
						</small>
						<div className='pt-4'>
							<h4 className='text-bold-600 text-uppercase text-white'>
								Déjà, 500.000 comptes crées
							</h4>
						</div>
					</div>
					<div className='px-2 pb-1'>
						<div className='text-uppercase pb-1'>Le projet Psssp international</div>
						<small className='text-bold-600'>
							ASIE - AMÉRIQUE - AFRIQUE - EUROPE - PACIFIQUE
						</small>
						<button className='btn btn-block p-1 text-uppercase mt-2 rounded bg-white 
						text-primary text-bold-600 d-block d-lg-none' style={{border: '1px solid var(--color-primary)'}}
						onClick={() => setIsVisible(false)}>
							Suivant
						</button>
					</div>
				</div>
			</section>
		)
}