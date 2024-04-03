export default function RegisterForm(props) {
    return (
        <form>
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
                    <div className='form-group position-relative has-icon-left'>
                        <select
                            className='select2 form-control border-bottom-1 border-top-0 
                            border-left-0 border-right-0 rounded-0'
                            id='country_id'
                            name='country_id'
                            value={props.useUser.country_id ?? ''}
                            disabled={props.isDisabled}
                            onChange={e => props.useUser.setCountry_id(e.target.value) ?? null}
                        >
                            <option hidden>Pays</option>
                            {props.countries.map((country,index) => {
                                return (<option value={country.id} key={index}>{country.name}</option>)
                            })}
                        </select>
                        <div className="form-control-position">
                            <i className="bx bx-flag text-primary"></i>
                        </div>
                    </div>
                </div>
                <div className='col-12'>
                    <div className='form-group position-relative has-icon-left'>
                        <input
                            className='form-control border-bottom-1 border-top-0 
                            border-left-0 border-right-0 rounded-0'
                            type='tel'
                            id='phone_number'
                            name='phone_number'
                            placeholder='Tel principal'
                            value={props.useUser.phone_number ?? ''}
                            minLength={10}
                            maxLength={10}
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
                            type='tel'
                            id='whatsapp_number'
                            name='whatsapp_number'
                            placeholder='WhatsApp'
                            value={props.useUser.whatsapp_number ?? ''}
                            minLength={10}
                            maxLength={10}
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
                            type='tel'
                            id='telegram_number'
                            name='telegram_number'
                            placeholder='Telegram'
                            value={props.useUser.telegram_number ?? ''}
                            minLength={10}
                            maxLength={10}
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
                            type='tel'
                            id='backup_number'
                            name='backup_number'
                            placeholder='Tel de secours'
                            value={props.useUser.backup_number ?? ''}
                            minLength={10}
                            maxLength={10}
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
                            value={props.useUser.referer_sponsor_code ?? ''}
                            disabled={props.isDisabled}
                            onChange={e => props.useUser.setReferrer_sponsor_code(e.target.value) ?? null}
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
                            placeholder='Choisissez le nom votre boutique'
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
                            type='password'
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
                        type='button'
                        className='btn btn-primary btn-block mt-2 p-1'
                        onClick={props.handleFormSubmit}
                    >
                        <span className="text-uppercase">
                            {props.isDisabled ? "Chargement..." : "S'inscrire"}
                        </span>
                    </button>
                </div>
            </div>
        </form>
    )
}