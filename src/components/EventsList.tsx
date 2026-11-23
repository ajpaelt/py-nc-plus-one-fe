import type { EventsItem } from "../types";
import EventCard from "./EventCard";

interface EventsListProps {
    events: EventsItem[]
}

export default function EventsList({ events }: EventsListProps) {

    return (
        <ul>
            {events.map((event) => (
                <EventCard key={event.id} id={event.id} title={event.title} starts_at={event.starts_at} ends_at={event.ends_at} location={event.location}/>
            ))}
        </ul>
    )
}