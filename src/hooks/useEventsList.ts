import { useEffect, useState } from "react";
import { getEventsList } from "../api/events";
import { type EventsItem } from "../types";
import { ApiError } from "../api/client";


export function useEventsList() {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>();
    const [eventState, setEventState] = useState<EventsItem[]>([])
    const [refetchCount, setRefetchCount] = useState(0);


    const refetch = () => {
        setRefetchCount((count) => count + 1);
    };


    useEffect(() => {
        const fetchEvents = async () => {
            setIsLoading(true);
            try {
                const eventsData = await getEventsList();
                setEventState(eventsData)
            }
            catch (err) {
                setError(err instanceof ApiError ? err.message : "Something went wrong")
            } finally {
                setIsLoading(false);
            }
        }
        fetchEvents()
    }, [refetchCount])

    return {eventState, isLoading, error, refetch}
}