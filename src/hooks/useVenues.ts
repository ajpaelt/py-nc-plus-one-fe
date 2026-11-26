import { type Venue } from "../types"
import { ApiError } from "../api/client";
import { useState } from "react";
import { getVenuesList } from "../api/venues";
import { useEffect } from "react";

export function useVenues() {
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [venues, setVenues] = useState<Venue[]>([])

        useEffect(() => {
            const fetchVenues = async () => {
                setIsLoading(true);
                setError(null)
                try {
                    const venuesData = await getVenuesList();
                    setVenues(venuesData)
                }
                catch (err) {
                    setError(err instanceof ApiError ? err.message : "Something went wrong")
                } finally {
                    setIsLoading(false);
                }
            }
            fetchVenues()
        }, [])
    return {isLoading, error, venues}
}