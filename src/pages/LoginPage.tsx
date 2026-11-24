import { useState } from "react";
import { type SubmitEvent } from "react";
import { useUserContext } from "../context/UserContext";


export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { loginUser } = useUserContext();

    async function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
        e.preventDefault();
        await loginUser(email, password);
        setEmail("");
        setPassword("");
        };

    return (
        <form onSubmit={handleSubmit}>
            <label className="login-dropdown__label" htmlFor="login-email">
                Email:  
            </label>
            <input name="email" 
            className="login-input" 
            type="email" 
            autoComplete="email"
            required
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
            <label className="login-dropdown__label" htmlFor="login-password">
                Password:
            </label>
            <input name="password" 
            className="login-input" 
            type="password"
            required
            autoFocus
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
            <button type="submit" name="btn" value="login">Login</button>
        </form>
    )
}