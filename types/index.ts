export type CreateUserParams = {
    clerkId: string,
    name: string,
    username: string,
    email: string,
    photo: string
}

export type UpdateUserParams = {
    username: string,
    photo: string,
    name: string,
}