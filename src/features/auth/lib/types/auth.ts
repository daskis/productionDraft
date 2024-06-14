export interface IAuthRequest {
    email: string,
    password: string
}

export interface IAuthResponse {
    accessToken: string;
}

export interface ILoginRequest extends IAuthRequest {
}

export interface IRegisterRequest extends IAuthRequest {
}