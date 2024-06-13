export const errorHandler = (statusCode, message) => {
    const error = new Error();
    errorHandler.statusCode = statusCode
    error.message = message;
    return error;
}