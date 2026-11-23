import { Link } from "react-router";
import type { EventsItem } from "../types";


export default function EventCard(props: EventsItem) {
    const { id, title, starts_at: start, ends_at: end, location: loc } = props

    return (
        <li className="event-card">
            <Link to={`/events/${id}`}>
                <h4>
                    Event: {id}, {title}
                </h4>
            </Link>
            <p>
                {loc}
            </p>
            <p>
                starts at: {start}, ends at: {end}
            </p>
        </li>
    )
}