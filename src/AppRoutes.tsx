
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";;
import NotFoundPage from "./pages/NotFoundPage";
import EventsPage from "./pages/EventsPage";
import EventPage from "./pages/EventPage";

export default function AppRoutes() {

    return (
    <Routes>
            <Route index element={<HomePage />} />
            <Route path="events" element={<EventsPage />} />
            <Route path="events/:eventId" element={<EventPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    )

}