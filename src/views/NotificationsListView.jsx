
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
        <>
            <Components.Loader isLoading={isLoading}>
                <div className='w-100'>
                    {notifications.map((notification, index) => {
                        return (
                            <div className='bg-white rounded p-2 shadow-md mb-2' key={index} 
                            style={{borderLeft: '4px solid teal'}}>
                                <b>{notification.nom}</b> viens de créer son compte. <br />
                                <b>Tel: {notification.tel}</b> <br />
                                <b>Login: {notification.login}</b> <br />
                                <b>Code: {notification.activation_code}</b> <br />
                                <small className='d-inline-block float-right'>
                                    {notification.created_at && new Date(notification.created_at)
                                    .toLocaleDateString('fr', {dateStyle: 'full'})}
                                </small>
                            </div>
                        )
                    })}
                </div>
            </Components.Loader>
        </>
    )
}
