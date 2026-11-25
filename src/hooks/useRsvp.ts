import { useState, useEffect } from "react";
import { delRsvp, postRsvp } from "../api/events";
import { ApiError } from "../api/client";
import { readToken } from "../token/tokenStorage";


export function useRsvp(event_id: number, hasRsvped: boolean) {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null);
    const [rsvpState, setRsvpState] = useState<boolean>(hasRsvped)

    useEffect(() => {
    setRsvpState(hasRsvped);
    }, [hasRsvped]);

    async function rsvp() {
        setIsLoading(true);
        setError(null);
        const token = readToken();
        try {
            await postRsvp(event_id, token!);
            setRsvpState(true)
        }
        catch (err) {
            setError(err instanceof ApiError ? err.message : "Something went wrong")
        } finally {
            setIsLoading(false);
        }
    }

    async function unRsvp() {
        setIsLoading(true);
        setError(null);
        const token = readToken();
        try {
            await delRsvp(event_id, token!);
            setRsvpState(false)
        }
        catch (err) {
            setError(err instanceof ApiError ? err.message : "Something went wrong")
        } finally {
            setIsLoading(false);
        }
    }

    return {isLoading, error, rsvp, unRsvp, rsvpState}
}