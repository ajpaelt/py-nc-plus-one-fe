import { type Event } from "../types"
import { useUserContext } from "../context/UserContext"

export default function EventsDetails(props: Event) {
    const { userState } = useUserContext()
    const { id, title, starts_at: start, ends_at: end, location: loc, address, capacity, created_at: created } = props


    return (
        <>
            <h2>Event {id}, {title}</h2>
            <p>Starts at: {start} Ends at: {end}</p>
            <p>Address: {loc}, {address && address}</p>
            {capacity && <p>Capacity: {capacity} </p>}
            <p>Created at: {created}</p>
        </>
    )
}