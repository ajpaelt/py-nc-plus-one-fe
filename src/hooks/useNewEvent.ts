import { type PostEvent } from "../types"
import { postEvent } from "../api/events"
import { readToken } from "../token/tokenStorage";
import { ApiError } from "../api/client";
import { useState } from "react";

export function useNewEvent() {
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isCreated, setIsCreated] = useState(false)

    async function createEvent(body: PostEvent) {
        setError(null)
        setIsCreated(false)
        setIsLoading(true)
        const token = readToken();
        try {
            await postEvent(body, token!)
            setIsCreated(true)   
        }
        catch (err) {
            setError(err instanceof ApiError ? err.message : "Something went wrong")
        } finally {
            setIsLoading(false)
        }
    }
    return {isLoading, error, isCreated, createEvent}
}