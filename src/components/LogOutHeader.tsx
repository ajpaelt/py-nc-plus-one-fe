import { NavLink } from "react-router"
import { useUserContext } from "../context/UserContext"


export default function LogOutHeader() {
    const { userState } = useUserContext()

    return (
        <NavLink to="/user" end className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            {userState.status === "success" && <p>{userState.user.email}</p>}
        </NavLink>
    )
}