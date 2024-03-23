export interface IUser {
    email: string,
    password: string,
}

export interface IUserSignUp {
    email: string,
    password: string,
    secondPassword: string
}

export interface UserLogIn {
    email: string
    password: string
}