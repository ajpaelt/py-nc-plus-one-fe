import { useEffect, useState } from "react";
import { getEvent } from "../api/events";
import { ApiError } from "../api/client";
import { type Event } from "../types";

export function useEvent(event_id: number) {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>();
    const [event, setEvent] = useState<Event[]>([])
    const [refetchCount, setRefetchCount] = useState(0);


    const refetch = () => {
        setRefetchCount((count) => count + 1);
    };


    useEffect(() => {
        const fetchEvents = async () => {
            setIsLoading(true);
            try {
                const eventData = await getEvent(event_id);
                setEvent(eventData)
            }
            catch (err) {
                setError(err instanceof ApiError ? err.message : "Something went wrong")
            } finally {
                setIsLoading(false);
            }
        }
        fetchEvents()
    }, [refetchCount])

    return {event, isLoading, error, refetch}
}