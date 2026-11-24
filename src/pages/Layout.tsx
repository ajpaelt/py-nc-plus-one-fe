import NavLinks from "../components/NavLinks"
import { Outlet } from "react-router"



export default function Layout () {

    return (
        <div>
            <header>
                <div>
                    <h1>Event Manager API</h1>
                    <div className="sub-header">
                        <NavLinks/>
                    </div>
                </div>
            </header>

            <main>
                <Outlet/>
            </main>
        </div>
    )

}