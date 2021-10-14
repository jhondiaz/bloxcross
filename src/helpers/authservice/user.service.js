import {
    authHeader
} from './auth-header';
import {
    UrlApis
} from '@/helpers/urlapis';
export const userService = {
    login,
    logout,
    register,
    getAll,
};

function login(email, password) {

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: email,
            password: password
        })
    };

    return fetch(UrlApis.Login, requestOptions)
        .then(handleResponse)
        .then(user => {
            console.log(user);
            if (user) {
                if (user.message) {
                    localStorage.removeItem('user');
                    if (user.message == 'CREDENTIALS_DO_NOT_MATCH') {
                        return new {
                            success: false,
                            result: 'CREDENTIALS_DO_NOT_MATCH'
                        };
                    } else if (user.message == 'USER_NOT_FOUND') {
                        return new {
                            success: false,
                            result: 'USER_NOT_FOUND'
                        };
                    }
                } else {
                    if (user.access_token)
                        localStorage.setItem('user', JSON.stringify(user));
                    return new {
                        success: true,
                        result: 'USER_LOGIN'
                    };
                }
            }else{

                localStorage.removeItem('user');
                return new {
                    success: false,
                    result: 'USER_NOT_FOUND'
                };
            }

        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    };
    return fetch('/users/register', requestOptions).then(handleResponse);
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };
    return fetch(`/users`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);

        if (!response.ok) {
            if (response.status === 401) {
                logout();
                location.reload(true);
            }
            const error = (data && data.message) || response.statusText;
            console.log(error);
            return Promise.reject(error);
        }
        return data;
    });
}