import { useState } from "react";
import { type SubmitEvent } from "react";
import { useUserContext } from "../context/UserContext";
import { useNavigate, useLocation } from "react-router";
import { ApiError } from "../api/client";

export default function LoginForm() {
    const location = useLocation();
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("")

    const { loginUser } = useUserContext();

    async function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await loginUser(email, password);
            const state = location.state as { from?: string } | null;
            navigate(state?.from ?? "/user", { replace: true });
        } catch (err) {
            console.error(err);
            setError(err instanceof ApiError ? "Incorrect Login Details" : "Could not log in.");
            setPassword("")
            setEmail("")
        }
    }

    return (
        <>
            <form className="auth-form" onSubmit={handleSubmit}>
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
                {error && <p className="error-message">{error}</p>}
            </form>
        </>
    )
}