import { Api } from './Api';

const  ENPOINTS = {
    Login: 'login',
    Register: 'register',
    Logout: 'logout',
    Validation: 'validate'
};


const login = (payload, signal) => {
    return Api.post(ENPOINTS.Login, payload, signal)

}
const activation = (payload, signal) => {
    return Api.post(ENPOINTS.Validation, payload, signal)

}
const register = (payload, signal) => {
    return Api.post(ENPOINTS.Register, payload, signal)
}

const logout = (payload, signal) => {
    return Api.post(ENPOINTS.Logout, payload, signal)
}


export const AuthService = {
    login,
    logout,
    activation,
    register
}