import { useEventsList } from "../hooks/useEventsList"
import EventsList from "../components/EventsList"


export default function EventsPage() {
    const { eventState, isLoading, error, refetch } = useEventsList()
    if( isLoading) return <p>Loading Events...</p>
    if (error) return (<div>
                        <p role="alert">{error}</p>
                        <button className="btn" onClick={() => refetch()}>Retry</button>
                        </div>)
    if (eventState.length === 0) return <p>No Events...</p>



    return (
        <EventsList events={eventState}/>
    )
}