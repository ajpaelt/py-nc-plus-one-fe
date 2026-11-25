import { NavLink } from "react-router"

export default function LogInHeader() {
    return (
        <NavLink to="/login" end className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            Login/Register
        </NavLink>
    )
}