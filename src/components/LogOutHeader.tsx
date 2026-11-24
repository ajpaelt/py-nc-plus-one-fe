import { useUserContext } from "../context/UserContext"


export default function LogOutHeader() {
    const { logoutUser, userState } = useUserContext()

    return (
        <>
            <p></p>
            <button onClick={logoutUser}>Logout</button>
        </>
    )
}