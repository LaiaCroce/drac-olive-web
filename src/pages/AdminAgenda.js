import { useState } from "react";
import AdminHeader from "../components/Admin/AdminHeader";
import CreateEventForm from "../components/Admin/CreateEventForm";
import EventsList from "../components/Admin/EventsList";
import "./AdminDashboard.css";

export default function AdminAgenda() {
  const [eventToEdit, setEventToEdit] = useState(null);
  const [refreshKey, setRefreshKey] = useState(0);
  
  const refreshEvents = () => {
    setRefreshKey(prev => prev + 1);
  }

  return (
    <main className="admin-dashboard">
      <AdminHeader showBackButton />

      <section className="admin-dashboard-header">
        <p>Gestió admin</p>
        <h1>Agenda</h1>
        <span>Crea, edita i elimina esdeveniments del Drac Olivé.</span>
      </section>

      <CreateEventForm 
        eventToEdit={eventToEdit}
        clearEdit={() => setEventToEdit(null)}
        onEventSaved={refreshEvents}
      />
      <EventsList 
      key={refreshKey}
      onEditEvent={setEventToEdit}
      />
    </main>
  );
}