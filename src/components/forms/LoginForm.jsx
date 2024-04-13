import userPlaceholder from '../../app-assets/images/user-placeholder.png';

export default function LoginForm(props) {
    return (
        <form onSubmit={props.handleFormSubmit}>
            <div className='row'>
                <div className="col-12 py-3 text-center">
                    <img src={userPlaceholder} width={100}/>
                </div>
                <div className='col-12'>
                    <div className='form-group position-relative'>
                        <input
                            className='form-control form-control bg-grey'
                            type='test'
                            id='email'
                            name='email'
                            placeholder='Login'
                            value={props.email ?? ''}
                            disabled={props.isDisabled}
                            onChange={e => props.setEmail(e.target.value) ?? null}
                            required
                        />
                    </div>
                </div>
                <div className='col-12 mt-2'>
                    <div className='form-group position-relative'>
                        <input
                            className='form-control form-control bg-grey'
                            type='password'
                            id='password'
                            name='password'
                            placeholder='Mot de passe'
                            value={props.password ?? ''}
                            disabled={props.isDisabled}
                            onChange={e => props.setPassword(e.target.value) ?? null}
                            required
                        />
                    </div>
                </div>
                <div className='col-12'>
                    <button
                        disabled={props.isDisabled ?? false}
                        type='submit'
                        className='btn btn-info btn-block mt-2 btn-sm p-xs rounded'
                        onClick={props.handleFormSubmit}
                    >
                        <span className="text-uppercase">
                            {props.isDisabled ? "Chargement..." : "Connexion"}
                        </span>
                    </button>
                </div>
            </div>
        </form>
    )
}