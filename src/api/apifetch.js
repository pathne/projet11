
import APIError from './apierror'

const BASE_URL = 'http://localhost:3001/api/v1'

const errorMessageFromType = {
    'network': 'We are sorry, the server cannot be reached.',
    'responseCorrupted': 'We are sorry, the server returned an invalid response.',
    'serverError': 'We are sorry, an internal server error occured.',
    'tokenExpired': 'We are sorry, your session has expired.',
    'invalidEmailPassword': 'The email or password is incorrect.'
}

const throwError = (type) => {
    const message = errorMessageFromType[type]
    if (!message){
        message = 'error: the error type '+type+' is not defined'
        console.error(message)
    }
    throw new APIError(type, message)
}

const apiFetch = async (endpoint, errorTypeFromStatus, options) => {
    console.log('api call', options.method, endpoint)
    let response
    try {
        response = await fetch(`${BASE_URL}${endpoint}`, options)
    }
    catch (error){
        throwError('network')
    }
    let data
    try {
        data = await response.json();
    }
    catch (error){
        throwError('responseCorrupted')
    }
    if (data.status !== 200){
        throwError(errorTypeFromStatus[data.status] || 'serverError')
    }
    return data.body
}

export default apiFetch
