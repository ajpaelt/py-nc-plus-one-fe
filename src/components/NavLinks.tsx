import { NavLink } from "react-router";

export default function NavLinks() {
    return (
        <nav className="navbar">
            <NavLink to="/" end className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                Home
            </NavLink>
            <NavLink to="/events" end className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                Browse Events
            </NavLink>
            <NavLink to="/login" end className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                Login/Register
            </NavLink>
        </nav>
    )
}