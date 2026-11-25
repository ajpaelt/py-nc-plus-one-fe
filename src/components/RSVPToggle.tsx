import { useMyRsvps } from "../hooks/useMyRsvps"
import { useUserContext } from "../context/UserContext"
import { useRsvp } from "../hooks/useRsvp"

export default function RSVPToggle(props: {id : number}) {
    const { id } = props
    const { userState } = useUserContext()

    const { eventState } = useMyRsvps()
    console.log(eventState)
    const hasRsvped = eventState.some((event) => event.id === id)
    console.log(hasRsvped)
    const { rsvp, unRsvp, rsvpState } = useRsvp(id, hasRsvped)

    return (
        <>
            {userState.status === "success" && (rsvpState === true ? <button onClick={unRsvp}>unRSVP</button> : <button onClick={rsvp}>RSVP</button>)}
        </>
    )
}