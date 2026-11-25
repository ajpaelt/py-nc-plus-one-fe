import { useEffect, useState } from "react";
import { getMyRsvps } from "../api/user";
import { type EventsItem } from "../types";
import { ApiError } from "../api/client";
import { readToken } from "../token/tokenStorage";


export function useMyRsvps() {
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
            const token = readToken()
            try {
                const eventsData = await getMyRsvps(token!);
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