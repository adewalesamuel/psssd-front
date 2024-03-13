
import { useCallback, useEffect, useState } from 'react';
import { Services } from '../services';
import { Components } from '../components';

export function NotificationListView() {
    let abortController = new AbortController();

    const tableAttributes = {
        'nom': {},
		'login': {},
        'num tel': {},
		'nom boutique': {},
		'code d\'activation': {},
		
    }
    const tableActions = [];

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
                    'num tel': account.user?.phone_number,
                    'nom boutique': account.shop_name,
                    'code d\'activation': account.activation_code,
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
                <div className='table-responsive bg-white'>
                    <Components.Table controllers={{}} tableAttributes={tableAttributes} 
                    tableActions={tableActions} tableData={notifications} hasActions={false}/>
                </div>
            </Components.Loader>
        </>
    )
}
