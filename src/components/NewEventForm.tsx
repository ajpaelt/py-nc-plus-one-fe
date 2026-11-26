import { useState } from "react"
import { useNewEvent } from "../hooks/useNewEvent"
import { type SubmitEvent } from "react"
import { ApiError } from "../api/client"
import { useVenues } from "../hooks/useVenues"


export default function NewEventForm() {
    const [title, setTitle] = useState<string>("")
    const [desc, setDesc] = useState<string>("")
    const [startsAt, setStartsAt] = useState<string>("")
    const [endsAt, setEndsAt] = useState<string>("")
    const [venueId, setVenueId] = useState<number>()

    

    const {isLoading, error, isCreated, createEvent} = useNewEvent()
    const { venues } = useVenues()
    async function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
        e.preventDefault()
        const body = {"title": title,
                "description": desc,
                "starts_at": startsAt,
                "ends_at": endsAt,
                "venue_id": venueId}
        await createEvent(body)


    }
    
    return (
    <>
        <form className="auth-form" onSubmit={handleSubmit}>
            <label className="new-event-form__label" htmlFor="new-event-title">
                Title:  
            </label>
            <input name="title"
            id="new-event-title"
            className="new-event-input"
            required
            autoFocus
            value={title}
            onChange={(e) => setTitle(e.target.value)} />
            <label className="new-event-form__label" htmlFor="new-event-desc">
                Description:
            </label>
            <textarea name="desc"
            id="new-event-desc"
            className="new-event-input" 
            value={desc}
            maxLength={255}
            onChange={(e) => setDesc(e.target.value)} />
            <label className="new-event-form__label" htmlFor="new-event-start">
                Start:  
            </label>
            <input name="start"
            id="new-event-start" 
            className="new-event-input"
            type="datetime-local"
            required
            value={startsAt}
            onChange={(e) => setStartsAt(e.target.value)} />
            <label className="new-event-form__label" htmlFor="new-event-end">
                End:  
            </label>
            <input name="end"
            id="new-event-end" 
            className="new-event-input"
            type="datetime-local"
            required
            value={endsAt}
            onChange={(e) => setEndsAt(e.target.value)} />
            <label className="new-event-form__label" htmlFor="new-event-venueId">
                Venue Id:
            </label>
                <select value={venueId ?? " "} onChange={(e) => setVenueId(Number(e.target.value))}
                    name="venueId"
                    id="new-event-venueId"
                    className="new-event-input"
                    required>
                    <option value="" disabled>Select Venue</option>
                    {venues.map((venue) => (<option key={venue.id} value={venue.id}>{venue.name}</option>))}
                </select>
            <button type="submit" name="btn" value="register">Create Event</button>    
        </form>
    </>
)
}
