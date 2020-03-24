import * as SessionsAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';


export const receiveCurrentUser = (currentUser) => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
}) 

export const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = (errors) => { 
    return {
        type: RECEIVE_SESSION_ERRORS,
        errors
    }
};

export const clearErrors = () => ({
    type: CLEAR_ERRORS,
});



export const signup = (userData) => dispatch => (
    SessionsAPIUtil.signup(userData)
        .then(user => (dispatch(receiveCurrentUser(user))), 
        err => (dispatch(receiveErrors(err.responseJSON)))
    )
);

export const login = (user) => dispatch => (
    SessionsAPIUtil.login(user)
        .then(user => (dispatch(receiveCurrentUser(user))), 
        err => (dispatch(receiveErrors(err.responseJSON)))
    )
);

export const logout = () => dispatch => (
    SessionsAPIUtil.logout()
        .then(() => (dispatch(logoutCurrentUser()))
    )
);

export const logindemo = () => dispatch => (
    SessionsAPIUtil.logindemo()
        .then(user => (dispatch(receiveCurrentUser(user)))
    )
);