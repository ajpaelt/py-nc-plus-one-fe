import type { Venue, VenuesApiItem } from "../types";
import { apiGet } from "./client";


export const getVenuesList = async (): Promise<Venue[]> => {
    const data = await apiGet<VenuesApiItem>(import.meta.env.VITE_API_URL, '/venues');
    return data.venues;
}