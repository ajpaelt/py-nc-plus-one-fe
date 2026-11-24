
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";;
import NotFoundPage from "./pages/NotFoundPage";
import EventsPage from "./pages/EventsPage";
import EventPage from "./pages/EventPage";
import Layout from "./pages/Layout";
import LoginPage from "./pages/LoginPage";

export default function AppRoutes() {

    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="events" element={<EventsPage />} />
                <Route path="events/:eventId" element={<EventPage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    )

}