export interface Movie<T = any> {
    id: T
    [key: string]: T
}