

interface authInfoI{
    token?: string,
    user_name?:string
}

export interface loginDataI{
    data?: authInfoI,
    message?: string,
    status?: string
}