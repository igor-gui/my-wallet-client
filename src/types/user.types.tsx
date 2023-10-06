export type CreateUserParams = { name: string, password: string, email: string }
export type CreateSessionParams = Omit<CreateUserParams, "name">