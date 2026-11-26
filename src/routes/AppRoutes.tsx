
import { Route, Routes } from "react-router";
import HomePage from "../pages/HomePage";;
import NotFoundPage from "../pages/NotFoundPage";
import EventsPage from "../pages/EventsPage";
import EventPage from "../pages/EventPage";
import Layout from "../layouts/Layout";
import LoginPage from "../pages/LoginPage";
import UserPage from "../pages/UserPage";
import MyRsvpsPage from "../pages/MyRsvpsPage";
import MyEventsPage from "../pages/MyEventsPage";
import { ProtectedRoute } from "./ProtectedRoute";
import NewEventPage from "../pages/NewEventPage";

export default function AppRoutes() {

    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="events" element={<EventsPage />} />
                <Route path="events/:eventId" element={<EventPage />} />
                <Route path="login" element={<LoginPage />} />


            <Route element={<ProtectedRoute />}>
                <Route path="user" element={<UserPage />} />
                <Route path="user/rsvps" element={<MyRsvpsPage />} />
                <Route path="user/events" element={<MyEventsPage />} />
                <Route path="user/events/new" element={<NewEventPage />} /> 
            </Route>

                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    )

}