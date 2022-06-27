
interface JsonResponseParameters {
    code: number,
    status: 'success' | 'failed',
    message: string,
    data?: {}
}

const jsonResponse = ({code, status, message, data}: JsonResponseParameters) => {
    return {
        code,
        status,
        message,
        data: {
            ...data
        }
    }
}

export {
    jsonResponse,
}