import { useCallback, useEffect, useState } from 'react';
import { Services } from '../services';
import { Components } from '../components';

export function ClientListView() {
    let abortController = new AbortController();

    const { OrderService } = Services;

    const [clients, setClients] = useState([]);
    const [page, ] = useState(1);
    const [isLoading, setIsLoading] = useState(true);

    const init = useCallback(async () => {
        try {
            const {clients} = await OrderService.getAllClient(
                {page: page}, abortController.signal);

            setClients(clients);
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
                        {clients.map((client, index) => {
                            return (
                                <div className='bg-white px-2 py-1 shadow-sm mb-1 cursor-pointer
                                position-relative' key={index}>
                                    <span>Login: {client.email}</span> <br />
                                    <span>Tel: {client.user.phone_number}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </Components.Loader>
        </section>
    )
}
