
import APIError from './apierror'

import apiFetch from './apifetch'

export const userLogin = async (email, password) => {
    const body = await apiFetch('/user/login', {
        400: 'invalidEmailPassword'
    },{
        method: "POST",
        cache: "no-cache",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    })
    return body.token
}

export const userProfile = async (token) => {
    //token += 'k'
    const body = await apiFetch('/user/profile', {
        401: 'tokenExpired'
    },{
        method: "POST",
        cache: "no-cache",
        headers: {
            "Authorization": "Bearer "+token,
            "Content-Type": "application/json"
        }
    })
    return body
}

export const changeUserName = async (token, name) => {
    //token += 'k'
    const body = await apiFetch('/user/profile', {
        401: 'tokenExpired'
    },{
        method: "PUT",
        cache: "no-cache",
        headers: {
            "Authorization": "Bearer "+token,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            userName: name
        })
    })
    return body
}
