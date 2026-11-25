import NavLinks from "../components/NavLinks"
import { Outlet } from "react-router"
import { useUserContext } from "../context/UserContext"
import LogInHeader from "../components/LogInHeader"
import LogOutHeader from "../components/LogOutHeader"


export default function Layout () {
    const { userState } = useUserContext()
    return (
        <div>
            <header>
                <div>
                    <h1>Event Manager API</h1>
                    <div className="sub-header">
                        <NavLinks/>
                        {userState.status !== "success" && <LogInHeader/>}
                        {userState.status === "success" && <LogOutHeader/>}
                    </div>
                </div>
            </header>

            <main>
                <Outlet/>
            </main>
        </div>
    )

}