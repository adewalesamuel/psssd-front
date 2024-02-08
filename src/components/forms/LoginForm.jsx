export default function LoginForm(props) {
    return (
        <form onSubmit={props.handleFormSubmit}>
            <div className='row'>
                <div className='col-12'>
                    <div className='form-group position-relative has-icon-left'>
                        <input
                            className='form-control form-control border-bottom-1 border-top-0 
                            border-left-0 border-right-0 rounded-0'
                            type='email'
                            id='email'
                            name='email'
                            placeholder='Email'
                            value={props.email ?? ''}
                            disabled={props.isDisabled}
                            onChange={e => props.setEmail(e.target.value) ?? null}
                            required
                        />
                        <div className="form-control-position">
                            <i className="bx bx-user text-primary"></i>
                        </div>
                    </div>
                </div>
                <div className='col-12'>
                    <div className='form-group position-relative has-icon-left'>
                        <input
                            className='form-control form-control border-bottom-1 border-top-0 
                            border-left-0 border-right-0 rounded-0'
                            type='password'
                            id='password'
                            name='password'
                            placeholder='Mot de passe'
                            value={props.password ?? ''}
                            disabled={props.isDisabled}
                            onChange={e => props.setPassword(e.target.value) ?? null}
                            required
                        />
                        <div className="form-control-position">
                            <i className="bx bx-lock text-primary"></i>
                        </div>
                    </div>
                </div>
                <div className='col-12'>
                    <button
                        disabled={props.isDisabled ?? false}
                        type='submit'
                        className='btn btn-primary btn-block mt-2 p-1'
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