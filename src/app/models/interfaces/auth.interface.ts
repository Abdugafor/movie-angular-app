export interface IUser {
    username: string,
    email: string,
    password: string,
}

export interface IUserSignUp {
    username: string,
    email: string,
    password: string,
    secondPassword: string
}

export interface UserLogIn {
    email: string
    password: string
}