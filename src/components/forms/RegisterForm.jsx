export default function RegisterForm(props) {
    return (
        <form onSubmit={props.handleFormSubmit}>
            <div className='row'>
                <div className='col-12'>
                    <div className='form-group position-relative has-icon-left'>
                        <input
                            className='form-control form-control border-bottom-1 border-top-0 
                            border-left-0 border-right-0 rounded-0'
                            type='text'
                            id='fullname'
                            name='fullname'
                            placeholder='Nom complet'
                            value={props.useUser.fullname ?? ''}
                            disabled={props.isDisabled}
                            onChange={e => props.useUser.setFullname(e.target.value) ?? null}
                            required
                        />
                        <div className="form-control-position">
                            <i className="bx bx-user text-primary"></i>
                        </div>
                    </div>
                </div>
                <div className='col-12'>
                    <div className='form-group'>
                        <select
                            className='select2 form-control border-bottom-1 border-top-0 
                            border-left-0 border-right-0 rounded-0'
                            id='country_id'
                            name='country_id'
                            value={props.useUser.country_id ?? ''}
                            disabled={props.isDisabled}
                            onChange={e => props.useUser.setCountry_id(e.target.value) ?? null}
                        >
                            <option hidden>Pays de residence</option>
                            {props.countries.map((country,index) => {
                                return (<option value={country.id} key={index}>{country.name}</option>)
                            })}
                        </select>
                    </div>
                </div>
                <div className='col-12'>
                    <div className='form-group position-relative has-icon-left'>
                        <input
                            className='form-control border-bottom-1 border-top-0 
                            border-left-0 border-right-0 rounded-0'
                            type='text'
                            id='phone_number'
                            name='phone_number'
                            placeholder='Numéro de téléphone'
                            value={props.useUser.phone_number ?? ''}
                            disabled={props.isDisabled}
                            onChange={e => props.useUser.setPhone_number(e.target.value) ?? null}
                            required
                        />
                        <div className="form-control-position">
                            <i className="bx bx-phone text-primary"></i>
                        </div>
                    </div>
                </div>
                <div className='col-12'>
                    <div className='form-group position-relative has-icon-left'>
                        <input
                            className='form-control form-control border-bottom-1 border-top-0 
                            border-left-0 border-right-0 rounded-0'
                            type='text'
                            id='whatsapp_number'
                            name='whatsapp_number'
                            placeholder='Numéro WhatsApp'
                            value={props.useUser.whatsapp_number ?? ''}
                            disabled={props.isDisabled}
                            onChange={e => props.useUser.setWhatsapp_number(e.target.value) ?? null}
                            required
                        />
                        <div className="form-control-position">
                            <i className="bx bx-phone text-primary"></i>
                        </div>
                    </div>
                </div>
                <div className='col-12'>
                    <div className='form-group position-relative has-icon-left'>
                        <input
                            className='form-control form-control border-bottom-1 border-top-0 
                            border-left-0 border-right-0 rounded-0'
                            type='text'
                            id='telegram_number'
                            name='telegram_number'
                            placeholder='Numéro Telegram'
                            value={props.useUser.telegram_number ?? ''}
                            disabled={props.isDisabled}
                            onChange={e => props.useUser.setTelegram_number(e.target.value) ?? null}
                            required
                        />
                        <div className="form-control-position">
                            <i className="bx bx-phone text-primary"></i>
                        </div>
                    </div>
                </div>
                <div className='col-12'>
                    <div className='form-group position-relative has-icon-left'>
                        <input
                            className='form-control form-control border-bottom-1 border-top-0 
                            border-left-0 border-right-0 rounded-0'
                            type='text'
                            id='backup_number'
                            name='backup_number'
                            placeholder='Numéro de secours'
                            value={props.useUser.backup_number ?? ''}
                            disabled={props.isDisabled}
                            onChange={e => props.useUser.setBackup_number(e.target.value) ?? null}
                            required
                        />
                        <div className="form-control-position">
                            <i className="bx bx-phone text-primary"></i>
                        </div>
                    </div>
                </div>
                <div className='col-12'>
                    <div className='form-group position-relative has-icon-left'>
                        <input
                            className='form-control form-control border-bottom-1 border-top-0 
                            border-left-0 border-right-0 rounded-0'
                            type='text'
                            id='sponsor_code'
                            name='sponsor_code'
                            placeholder='Code de parrainage (facultatif)'
                            value={props.useUser.sponsor_code ?? ''}
                            disabled={props.isDisabled}
                            onChange={e => props.useUser.setSponsor_code(e.target.value) ?? null}
                            required
                        />
                        <div className="form-control-position">
                            <i className="bx bx-key text-primary"></i>
                        </div>
                    </div>
                </div>
                <div className='col-12'>
                    <div className='form-group position-relative has-icon-left'>
                        <input
                            className='form-control form-control border-bottom-1 border-top-0 
                            border-left-0 border-right-0 rounded-0'
                            type='text'
                            id='shop_name'
                            name='shop_name'
                            placeholder='Nom du magasin'
                            value={props.useUser.shop_name ?? ''}
                            disabled={props.isDisabled}
                            onChange={e => props.useUser.setShop_name(e.target.value) ?? null}
                            required
                        />
                        <div className="form-control-position">
                            <i className="bx bx-cart text-primary"></i>
                        </div>
                    </div>
                </div>
                <div className='col-12'>
                    <div className='form-group position-relative has-icon-left'>
                        <input
                            className='form-control form-control border-bottom-1 border-top-0 
                            border-left-0 border-right-0 rounded-0'
                            type='text'
                            id='email'
                            name='email'
                            placeholder='Login'
                            value={props.useUser.email ?? ''}
                            disabled={props.isDisabled}
                            onChange={e => props.useUser.setEmail(e.target.value) ?? null}
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
                            type='text'
                            id='password'
                            name='password'
                            placeholder='Mot de passe'
                            value={props.useUser.password ?? ''}
                            disabled={props.isDisabled}
                            onChange={e => props.useUser.setPassword(e.target.value) ?? null}
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
                        <span className="text-uppercase">S&apos;inscrire</span>
                    </button>
                </div>
            </div>
        </form>
    )
}