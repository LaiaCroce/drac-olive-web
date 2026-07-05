import { useState } from "react";
import AdminLayout from "../components/Admin/AdminLayout";
import CreateEventForm from "../components/Admin/CreateEventForm";
import EventsList from "../components/Admin/EventsList";

export default function AdminAgenda() {
  const [eventToEdit, setEventToEdit] = useState(null);
  const [refreshKey, setRefreshKey] = useState(0);
  const [showForm, setShowForm] = useState(false);

  const refreshEvents = () => {
    setRefreshKey((prev) => prev + 1);
  };

  const handleNewEvent = () => {
    setEventToEdit(null);
    setShowForm(true);
  };

  const handleEditEvent = (event) => {
    setEventToEdit(event);
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const closeForm = () => {
    setEventToEdit(null);
    setShowForm(false);
  };

  return (
    <AdminLayout
      title="Agenda"
      subtitle="Crea, edita i elimina esdeveniments del Drac Olivé."
    >
      {!showForm && (
        <button className="admin-main-button" onClick={handleNewEvent}>
          + Nou esdeveniment
        </button>
      )}

      {showForm && (
        <CreateEventForm
          eventToEdit={eventToEdit}
          clearEdit={closeForm}
          onEventSaved={() => {
            refreshEvents();
            closeForm();
          }}
        />
      )}

      <EventsList
        key={refreshKey}
        onEditEvent={handleEditEvent}
      />
    </AdminLayout>
  );
}