export interface EventsItem {
    id: number;
    title: string;
    starts_at: string;
    ends_at: string;
    location: string;
}

export interface Event {
    id: number;
    title: string;
    description?: string;
    starts_at: string;
    ends_at: string;
    location: string;
    address?: string;
    capacity?: number;
    created_at: string;
}



