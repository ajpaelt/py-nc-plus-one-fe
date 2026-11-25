import { useState } from "react";
import { type SubmitEvent } from "react";
import { useUserContext } from "../context/UserContext";
import { useNavigate } from "react-router";
import { ApiError } from "../api/client";

export default function RegisterForm() {
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("")
    const [error, setError] = useState("")

    const { registerUser } = useUserContext();

    async function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await registerUser(name, email, password);
            navigate("/user", { replace: true });
        } catch (err) {
            console.error(err);
            setError(err instanceof ApiError ? "Email Is Already Reigstered" : "Could not register.");
            setName("")
            setPassword("")
            setEmail("")
        }
    };
    return (
        <form className="auth-form" onSubmit={handleSubmit}>
            <label className="register-label" htmlFor="register-name">
                Name:
            </label>
            <input name="name" 
            className="register-input" 
            type="name" 
            required
            autoFocus
            value={name}
            onChange={(e) => setName(e.target.value)} />
            <label className="login-dropdown__label" htmlFor="register-email">
                Email:  
            </label>
            <input name="email" 
            className="register-input" 
            type="email" 
            autoComplete="email"
            required
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
            <label className="register-label" htmlFor="register-password">
                Password:
            </label>
            <input name="password" 
            className="register-input" 
            type="password"
            required
            autoFocus
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
            <button type="submit" name="btn" value="register">Register</button>
            {error && <p className="error-message">{error}</p>}
        </form>
    )
}