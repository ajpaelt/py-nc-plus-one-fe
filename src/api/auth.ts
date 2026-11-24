import { type User, type Login, type Token, type UserBasic } from "../types";
import { apiGet, apiPost } from "./client";


export async function fetchCurrentUser(token: string): Promise<User> {
    const user = await apiGet<User>(import.meta.env.VITE_API_URL, "/auth/me", {Authorization: `Bearer ${token}`});
    return user;
};
export async function login(email: string, password: string): Promise<Token> {
    const token = await apiPost<Token>(import.meta.env.VITE_API_URL, "/auth/login", {email, password});
    return token;
};
export async function register(email: string, password: string): Promise<User> {
    const user = await apiPost<User>(import.meta.env.VITE_API_URL, "/auth/login", {email, password});
    return user;
};
