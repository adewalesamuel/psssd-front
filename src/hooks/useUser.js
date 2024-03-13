import { useState } from 'react';
import { Services } from '../services';

export const useUser = () => {
    const [id, setId] = useState('');
	const [fullname, setFullname] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [phone_number, setPhone_number] = useState('');
	const [backup_number, setBackup_number] = useState('');
	const [whatsapp_number, setWhatsapp_number] = useState('');
	const [telegram_number, setTelegram_number] = useState('');
	const [shop_name, setShop_name] = useState('');
	const [profile_img_url, setProfile_img_url] = useState('');
	const [is_active, setIs_active] = useState('');
	const [activation_code, setActivation_code] = useState('');
	const [referer_sponsor_code, setReferrer_sponsor_code] = useState('');
	const [country_id, setCountry_id] = useState('');
	const [user, setUser] = useState({});
	
    const [errors, setErrors] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);

    const getUser = (userId, signal) => {        
        return Services.UserService.getById(userId, signal)
        .then(response => {
            fillUser(response.account);
            setIsDisabled(false);
        });
    }

    const createUser = signal => {
        const payload = {
            fullname,
		email,
		password,
		backup_number,
		phone_number,
		whatsapp_number,
		telegram_number,
		shop_name,
		profile_img_url,
		is_active,
		activation_code,
		referer_sponsor_code,
		country_id,
		
        };

        return Services.UserService.create(JSON.stringify(payload), signal);
    }
    const updateUser = (signal) => {
        const payload = {
            fullname,
		email,
		password,
		backup_number,
		phone_number,
		whatsapp_number,
		telegram_number,
		shop_name,
		profile_img_url,
		is_active,
		activation_code,
		referer_sponsor_code,
		country_id,
		
        };

        return Services.UserService.update(JSON.stringify(payload), signal);
    }
    const deleteUser = (accountId, signal) => {
        return Services.UserService.destroy(accountId, signal);
    }
    const fillUser = (account) => {
        setId(account.id);
        setFullname(account.fullname ?? '');
		setEmail(account.email ?? '');
		setPassword(account.password ?? '');
		setPhone_number(account.phone_number ?? '');
		setBackup_number(account.backup_number ?? '');
		setWhatsapp_number(account.whatsapp_number ?? '');
		setTelegram_number(account.telegram_number ?? '');
		setShop_name(account.shop_name ?? '');
		setProfile_img_url(account.profile_img_url ?? '');
		setIs_active(account.is_active ?? '');
		setActivation_code(account.activation_code ?? '');
		setReferrer_sponsor_code(account.referer_sponsor_code ?? '');
		setCountry_id(account.country_id ?? '');
		setUser(account.user ?? {});
		
    }
    const emptyUser = () => {
        setId('');
        setFullname('');
		setEmail('');
		setPassword('');
		setPhone_number('');
		setBackup_number('');
		setWhatsapp_number('');
		setTelegram_number('');
		setShop_name('');
		setProfile_img_url('');
		setIs_active('');
		setActivation_code('');
		setReferrer_sponsor_code('');
		setCountry_id('');
		setUser({});
		
    }

    return {
        id,
        fullname,
		email,
		password,
		backup_number,
		phone_number,
		whatsapp_number,
		telegram_number,
		shop_name,
		profile_img_url,
		is_active,
		activation_code,
		referer_sponsor_code,
		country_id,
		user,
		
        errors,
        isDisabled,
        setFullname,
		setEmail,
		setPassword,
		setBackup_number,
		setPhone_number,
		setWhatsapp_number,
		setTelegram_number,
		setShop_name,
		setProfile_img_url,
		setIs_active,
		setReferrer_sponsor_code,
		setActivation_code,
		setCountry_id,
		
        setId,
        setErrors,
        setIsDisabled,
        getUser,
        createUser,
        updateUser,
        deleteUser,
        fillUser,
        emptyUser
    };
}