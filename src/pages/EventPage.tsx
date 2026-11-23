import { useEvent } from "../hooks/useEvent"
import { useParams } from "react-router"
import NotFoundPage from "./NotFoundPage"
import EventsDetails from "../components/EventDetails"


export default function EventPage() {
    const {eventId} = useParams()

    let RegEx = /[a-z]/
    if (RegEx.test(eventId!.trim())) {
        return (
            <NotFoundPage/>
        )
    }
    const { event, isLoading, error, refetch } = useEvent(Number(eventId))
    const e = event[0]

    if( isLoading ) return <p>Loading Event...</p>
    if (error) return (<div>
                        <p role="alert">{error}</p>
                        <button className="btn" onClick={() => refetch()}>Retry</button>
                        </div>)
    if (event.length === 0) return <p>No Pokemon...</p>

    return (
        <EventsDetails id={e.id} title={e.title} starts_at={e.starts_at} ends_at={e.ends_at} location={e.location} address={e.address} capacity={e.capacity} created_at={e.created_at}/>
    )
}