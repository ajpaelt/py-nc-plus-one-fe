import type { EventsItem, Event } from "../types";
import { apiGet } from "./client";

interface EventsApiItem {
    events: EventsItem[];
}

interface EventApiItem {
    event: Event
}

export const getEventsList = async (): Promise<EventsItem[]> => {
    const data = await apiGet<EventsApiItem>(import.meta.env.VITE_API_URL, '/events');
    return data.events;
}

export const getEvent = async(event_id: number): Promise<Event[]> => {
    const data = await apiGet<EventApiItem>(import.meta.env.VITE_API_URL, `/events/${event_id}`);
    return [data.event];
}