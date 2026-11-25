import EventsList from "../components/EventsList"
import { useMyRsvps } from "../hooks/useMyRsvps"


export default function MyRsvpsPage() {
    const { eventState, isLoading, error, refetch } = useMyRsvps()
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