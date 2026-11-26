import { NavLink } from "react-router"
import EventsList from "../components/EventsList"
import { useMyEvents } from "../hooks/useMyEvents"


export default function MyEventsPage() {
    const { eventState, isLoading, error, refetch } = useMyEvents()
    if( isLoading) return <p>Loading Events...</p>
    if (error) return (<div>
                        <p role="alert">{error}</p>
                        <button className="btn" onClick={() => refetch()}>Retry</button>
                        </div>)
    if (eventState.length === 0) return <p>No Events...</p>



    return (
        <>
            <EventsList events={eventState}/>
            <NavLink to="/user/events/new" >
                Create New Event
            </NavLink>
        </>
        
    )
}