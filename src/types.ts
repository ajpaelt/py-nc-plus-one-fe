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
    event_rank?: number;
    total_rsvps?: number;
    total_events?: number;
}


export interface Venue {
    id: number;
    name: string;
    address?: string;
    capacity: number;
}

export interface VenuesApiItem{
    venues: Venue[];
}

export interface PostEvent {
    title: string;
    description?: string
    starts_at: string;
    ends_at: string;
    venue_id: number | undefined;
}

export interface EventsApiItem {
    events: Event[];
}

export interface EventApiItem {
    event: Event
}

export interface User {
    id: number;
    name: string;
    email: string;
    created_at: string;
}

export interface Rsvp {
    attendee_id: number;
    event_id: number;
}

export interface RsvpApiItem {
    rsvp: Rsvp
}

export type UserBasic = Pick<User, "id" | "name">;

export type UserState =
    | { status: "loading" }
    | { status: "anonymous" }
    | { status: "success"; user: User }
    | { status: "error"; message: string };

export interface UserContextValue {
    userState: UserState;
    loginUser: (email: string, password: string) => Promise<void>;
    registerUser: (name: string, email: string, password: string) => Promise<void>;
    logoutUser: () => Promise<void>
    clearError: () => void
};

export interface Login {
    email: string;
    password: string;
};

export interface Token {
    token: string;
}

export interface User {}