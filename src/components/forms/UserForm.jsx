export function UserForm(props) {
    return (
        <form className='form' disabled={props.isDisabled ?? false}
        onSubmit={props.handleFormSubmit ?? null}>
            <div className='row'>
                <div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='sponsor_code'>Code de parainage</label>
                        <input className='form-control rounded-0 border-primary' type='text' id='sponsor_code' name='sponsor_code' 
                        placeholder='Code de parainage' value={props.useUser.user?.sponsor_code ?? ''}
                        disabled={props.isDisabled} readOnly={true} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='email'>Login</label>
                        <input className='form-control rounded-0 border-primary' type='text' id='email' name='email' 
                        placeholder='Login' value={props.useUser.email ?? ''}
                        disabled={props.isDisabled} readOnly onChange={ e => 
                            props.useUser.setEmail(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-6'>
                    <div className='form-group'>
                        <label htmlFor='phone_number'>N° principal</label>
                        <input className='form-control rounded-0 border-primary' type='text' id='phone_number' name='phone_number' 
                        placeholder='N° principal' value={props.useUser.user?.phone_number ?? ''}
                        disabled={props.isDisabled} readOnly={true} required/>
                    </div>
                </div>
                 <div className='col-6'>
                    <div className='form-group'>
                        <label htmlFor='whatsapp_number'>N° WhatsApp</label>
                        <input className='form-control rounded-0 border-primary' type='text' id='whatsapp_number' name='whatsapp_number' 
                        placeholder='N° WhatsApp' value={props.useUser.whatsapp_number ?? ''}
                        disabled={props.isDisabled} onChange={ e => 
                            props.useUser.setWhatsapp_number(e.target.value) ?? null} required/>
                    </div>
                </div>
                 <div className='col-6'>
                    <div className='form-group'>
                        <label htmlFor='telegram_number'>N° Telegram</label>
                        <input className='form-control rounded-0 border-primary' type='text' id='telegram_number' name='telegram_number' 
                        placeholder='N° Telegram' value={props.useUser.telegram_number ?? ''}
                        disabled={props.isDisabled} onChange={ e => 
                            props.useUser.setNegram_number(e.target.value) ?? null} required/>
                    </div>
                </div>
                <div className='col-6'>
                    <div className='form-group'>
                        <label htmlFor='backup_number'>N° de secours</label>
                        <input className='form-control rounded-0 border-primary' type='text' id='backup_number' name='backup_number' 
                        placeholder='Tel de secours' value={props.useUser.backup_number ?? ''}
                        disabled={props.isDisabled} onChange={ e => 
                            props.useUser.setBackup_number(e.target.value) ?? null} required/>
                    </div>
                </div>
                <div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='country_id'>Pays</label>
                        <select
                            className='select2 form-control border-primary rounded-0'
                            id='country_id'
                            name='country_id'
                            value={props.useUser.country_id ?? ''}
                            disabled={true}
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
                    <div className='form-group'>
                        <label htmlFor='fullname'>Nom</label>
                        <input className='form-control rounded-0 border-primary' type='text' id='fullname' name='fullname' 
                        placeholder='Nom' value={props.useUser.fullname ?? ''}
                        disabled={props.isDisabled} onChange={ e => 
                            props.useUser.setFullname(e.target.value) ?? null} required/>
                    </div>
                </div>
				<div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='shop_name'>Nom de la boutique</label>
                        <input className='form-control rounded-0 border-primary' type='text' id='shop_name' name='shop_name' 
                        placeholder='Nom de la boutique' value={props.useUser.shop_name ?? ''}
                        disabled={props.isDisabled} onChange={ e => 
                            props.useUser.setShop_name(e.target.value) ?? null} required/>
                    </div>
                </div>
                <div className='col-12'>
                    <div className='form-group'>
                        <label htmlFor='shop_name'>Mot de passe</label>
                        <input className='form-control rounded-0 border-primary' type='password' id='password' name='password' 
                        placeholder='Mot de passe' value={props.useUser.password ?? ''}
                        disabled={props.isDisabled} onChange={ e => 
                            props.useUser.setPassword(e.target.value) ?? null} required/>
                    </div>
                </div>
				
                <div className='col-12 text-right px-3'>
                    <button disabled={props.isDisabled ?? false} type='submit' 
                    className='btn btn-info btn-block' onClick={props.handleFormSubmit}>
                        <span className="text-uppercase">
                            {props.isDisabled ? "Chargement..." : "Enregistrer"}
                        </span>
                    </button>
                </div>
            </div>
        </form>
    )
}