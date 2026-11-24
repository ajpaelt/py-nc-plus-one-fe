export interface EventsItem {
    id: number;
    title: string;
    starts_at: string;
    ends_at: string;
    location: string;
}

export interface Event {
    id: number;
    title: string;
    description?: string;
    starts_at: string;
    ends_at: string;
    location: string;
    address?: string;
    capacity?: number;
    created_at: string;
}

export interface User {
    id: number;
    name: string;
    email: string;
    created_at: string;
}

export type UserBasic = Pick<User, "id" | "name">;

export type UserState =
    | { status: "loading" }
    | { status: "anonymous" }
    | { status: "success"; user: User }
    | { status: "error"; message: string };

export interface UserContextValue {
    userState: UserState;
    loginUser: (email: string, password: string) => Promise<void>;
    registerUser: (email: string, password: string) => Promise<void>;
    logoutUser: () => Promise<void>
};

export interface Login {
    email: string;
    password: string;
};

export interface Token {
    token: string;
}

export interface User {}