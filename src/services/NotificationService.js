import { Api } from './Api';

const  ENPOINTS = {
    Notification: 'notifications',
};

const getAll = (params, signal) => {
    return Api.get(`${ENPOINTS.Notification}?page=${params?.page ?? 1}`, signal)
}

export const NotificationService = {
    getAll,
}