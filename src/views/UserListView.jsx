import { useCallback, useEffect, useState } from 'react';
import { Services } from '../services';
import { Components } from '../components';
import Swal from 'sweetalert2';
import { Utils } from '../utils';
import {useNavigate} from 'react-router-dom';

export function UserListView() {
    let abortController = new AbortController();

    const navigate = useNavigate();

    const { UserService } = Services;

    const [accounts, setAccounts] = useState([]);
    const [page, ] = useState(1);
    const [isLoading, setIsLoading] = useState(true);

    const handleAccountClick = async (account) => {
        const {isConfirmed} = await Swal.fire({
            icon: 'warning',
            titleText: "Changement de compte",
            text: `Vous allez être connecté sur le compte ${account.email}`,
            showCancelButton: true,
            cancelButtonText: 'Annuler',
            confirmButtonText: 'Valider',
        })

        if (isConfirmed) {
            account['user'] = Utils.Auth.getUser().user;

            Utils.Auth.setSessionToken(account.api_token);
            Utils.Auth.setUser(account);

            navigate('/');
        }
    }

    const init = useCallback(async () => {
        try {
            const {accounts} = await UserService.getAll(
                {page: page}, abortController.signal);

            setAccounts(accounts);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }, [page]);

    useEffect(() => {
        init();
        return () => {
            abortController.abort();
            abortController = new AbortController();
        }
    }, [init])

    return (
        <section className="py-2">
            <Components.Loader isLoading={isLoading}>
                <div className='row'>
                    <div className='col-12 col-md-6'>
                        {accounts.map((account, index) => {
                            return (
                                <div className='bg-white px-2 py-1 shadow-sm mb-1 cursor-pointer
                                position-relative' key={index} 
                                onClick={() => handleAccountClick(account)}>
                                    <small className="position-absolute" style={{right:"20px"}}>{index +  1}</small>
                                    <span>Login: {account.email}</span> <br />
                                    <span>Boutique: {account.shop_name}</span> <br />
                                    <small className='d-inline-block float-right'>
                                        <i className="bx bx-calendar text-primary" style={{fontSize: "1rem"}}></i>
                                        {account.created_at && new Date(account.created_at)
                                        .toLocaleDateString('fr', {dateStyle: 'short'})}
                                    </small>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </Components.Loader>
        </section>
    )
}
