import { Api } from './Api';

const  ENPOINTS = {
    User: 'users',
};

const getAll = (params, signal) => {
    return Api.get(`${ENPOINTS.User}?page=${params?.page ?? 1}`, signal)
}

const analytics = (signal) => {
    return Api.get(`analytics`, signal)
}

const getById = (id, signal) => {
    return Api.get(`${ENPOINTS.User}/${id}`, signal);
}

const create = (payload, signal) => {
    return Api.post(ENPOINTS.User, payload, signal)
}

const update = (payload, signal) => {
    return Api.put(`profile`, payload, signal)
}
const destroy = (id, signal) => {
    return Api.erase(`${ENPOINTS.User}/${id}`, signal)
}

export const UserService = {
    getAll,
    analytics,
    getById,
    create,
    update,
    destroy
}