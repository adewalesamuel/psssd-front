
import { useCallback, useEffect, useState } from 'react';
import { Services } from '../services';
import { Components } from '../components';

export function NotificationListView() {
    let abortController = new AbortController();

    const { NotificationService } = Services;

    const [notifications, setNotifications] = useState([]);
    const [page, ] = useState(1);
    const [isLoading, setIsLoading] = useState(true);

    const init = useCallback(async () => {
        try {
            const {notifications} = await NotificationService.getAll(
                {page: page}, abortController.signal);

            const notificationCopy = notifications.map(notification => {
                const account = notification.data.account
                return { 
                    nom: account.fullname,
                    login: account.email,
                    country: account?.country?.name ?? "",
                    tel: account.user?.phone_number,
                    'nom boutique': account.shop_name,
                    activation_code: account.activation_code,
                    ...notification
                }
            })
            setNotifications(notificationCopy);
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
                <div className="row">
                    <div className='col-12 col-md-6'>
                    {notifications.map((notification, index) => {
                        return (
                            <div className='bg-white px-2 py-1 shadow-sm mb-1 cursor-pointer
                                position-relative' key={index}>
                                <b><span style={{color:'red'}}>Nom</span>: {notification.nom}</b> <br />
                                <b><span style={{color:'red'}}>Login</span>: {notification.login}</b> <br />
                                <b><span style={{color:'red'}}>Pays</span>: {notification.country}</b> <br />
                                <b><span style={{color:'red'}}>Tel</span>: {notification.tel}</b> <br />
                                <b><span style={{color:'red'}}>Code</span>: <span style={{color:'royalblue'}}>{notification.activation_code}</span></b> <br />
                                <small className='d-inline-block float-right'>
                                    {notification.created_at && new Date(notification.created_at)
                                    .toLocaleDateString('fr', {dateStyle: 'full'})}
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
