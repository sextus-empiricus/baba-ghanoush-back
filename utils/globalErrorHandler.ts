import {NextFunction, Request, Response} from 'express';

class ValidationError extends Error {
    message: string;
    code: number;

    constructor(message: string, code: number) {
        super();
        this.message = message;
        this.code = code;
    }

    static messages = {
        signup: {
            emailInUse: 'Email address already in use.',
            nameInUse: 'Username already in use.',
            incorrectEmail: 'Please provide correct email address.',
            incorrectName: 'Username must have at least 6 characters.',
            incorrectPassword: 'Password must have at least 6 characters.'
        },
        login: {
            incorrectData: 'Incorrect email address or password.'
        },
        fetch: {
            notFound: 'Fetched data not found.'
        },
        auth: {
            notAuthorised: 'Please log in.'
        }
    };
}

const globalErrorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    res
        .status(err instanceof ValidationError ? 400 : 500)
        .json({
            title: err instanceof ValidationError ? 'Validation Error' : 'Server Error',
            code: err instanceof ValidationError ? err.code : 500,
            message: err instanceof ValidationError ? err.message : 'Something went wrong.',
        })
}

export {
    ValidationError,
    globalErrorHandler,
}