import { NavLink } from "react-router"
import { useUserContext } from "../context/UserContext"

export default function LogInHeader() {
    const { userState } = useUserContext()
    return (
        <NavLink to="/login" end className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            Login/Register
        </NavLink>
    )
}