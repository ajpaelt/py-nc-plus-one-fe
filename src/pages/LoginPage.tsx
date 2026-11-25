import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import { useUserContext } from "../context/UserContext";

export default function LoginPage() {
    const { userState } = useUserContext()

    
    return (
        <>
        <div className="auth-container">
            <div className="login-container">
                <LoginForm />
            </div>

            <div className="register-container">
                <RegisterForm />
            </div>
        </div>
        {userState.status === "error" && <p>{userState.message}</p>}
    </>
    )
}