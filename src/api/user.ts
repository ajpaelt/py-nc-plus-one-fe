import type { Event, EventsApiItem } from "../types";
import { apiGet } from "./client";


export const getMyRsvps = async(token: string): Promise<Event[]> => {
    const data = await apiGet<EventsApiItem>(import.meta.env.VITE_API_URL, '/users/me/rsvps', {Authorization: `Bearer ${token}`});
    return data.events;
}

export const getMyEvents = async(token: string): Promise<Event[]> => {
    const data = await apiGet<EventsApiItem>(import.meta.env.VITE_API_URL, '/users/me/events', {Authorization: `Bearer ${token}`});
    return data.events;
}