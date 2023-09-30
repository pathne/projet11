
class APIError extends Error {
    constructor(type, message) {
        super(message)
        this.type = type
    }
}

export default APIError;
