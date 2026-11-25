import { NavLink } from "react-router"
import { useUserContext } from "../context/UserContext"


export default function UserPage() {
    const { logoutUser, userState } = useUserContext()

    return (
        <>
            <h2>Your Page</h2>
            <p>Welcome to your page {}</p>
            <button onClick={logoutUser}>Logout</button>

            <NavLink to="/user/rsvps" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                <h3>Your RSVPs</h3>
            </NavLink>
            <NavLink to="/user/events" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                <h3>Your Events</h3>
            </NavLink>
        </>
    )
}