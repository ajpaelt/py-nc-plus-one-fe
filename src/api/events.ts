import type { EventsItem, Event, EventApiItem, EventsApiItem, RsvpApiItem, PostEvent, PatchEvent } from "../types";
import { apiGet, authApiDel, authApiPatch, authApiPost } from "./client";


export const getEventsList = async (): Promise<EventsItem[]> => {
    const data = await apiGet<EventsApiItem>(import.meta.env.VITE_API_URL, '/events');
    return data.events;
}

export const getEvent = async(event_id: number): Promise<Event[]> => {
    const data = await apiGet<EventApiItem>(import.meta.env.VITE_API_URL, `/events/${event_id}`);
    return [data.event];
}

export const postRsvp = async(event_id: number, token: string): Promise<void> => {
   await authApiPost<RsvpApiItem>(import.meta.env.VITE_API_URL, `/events/${event_id}/rsvp`, {}, token);
}

export const delRsvp = async(event_id: number, token: string): Promise<void> => {
   await authApiDel<RsvpApiItem>(import.meta.env.VITE_API_URL, `/events/${event_id}/unrsvp`, token);
}

export const postEvent = async(body: PostEvent, token: string): Promise<void> => {
    await authApiPost<EventApiItem>(import.meta.env.VITE_API_URL, '/events', body, token)
}

export const patchEvent = async(event_id: number, body: PatchEvent, token: string): Promise<void> => {
    await authApiPatch<EventApiItem>(import.meta.env.VITE_API_URL, `/events/${event_id}`, body, token)
}