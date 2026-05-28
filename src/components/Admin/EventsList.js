import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  query,
  orderBy,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../services/firebase";
import "./EventsList.css";

export default function EventsList({ onEditEvent }) {
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    try {
      const eventsQuery = query(
        collection(db, "events"),
        orderBy("data", "asc")
      );

      const querySnapshot = await getDocs(eventsQuery);

      const data = querySnapshot.docs.map((document) => ({
        id: document.id,
        ...document.data(),
      }));

      setEvents(data);
    } catch (error) {
      console.error("Error carregant events:", error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const deleteEvent = async (id) => {
    const confirmDelete = window.confirm(
      "Segur que vols eliminar aquest esdeveniment?"
    );

    if (!confirmDelete) return;

    try {
      await deleteDoc(doc(db, "events", id));
      await fetchEvents();
      alert("Esdeveniment eliminat");
    } catch (error) {
      console.error("Error eliminant event:", error);
      alert("No s'ha pogut eliminar l'esdeveniment");
    }
  };

  return (
    <section className="admin-events-list">
      <h2>Esdeveniments creats</h2>

      {events.length === 0 ? (
        <p className="admin-events-empty">No hi ha esdeveniments.</p>
      ) : (
        <div className="admin-events-grid">
          {events.map((event) => {
            const eventDate = event.data?.toDate
              ? event.data.toDate()
              : null;

            return (
              <article className="admin-event-card" key={event.id}>
                <div>
                  <h3>{event.titol}</h3>

                  <p>
                    {eventDate
                      ? eventDate.toLocaleDateString("ca-ES", {
                          day: "2-digit",
                          month: "2-digit",
                          year: "numeric",
                        })
                      : "Data no disponible"}
                    {" · "}
                    {eventDate
                      ? eventDate.toLocaleTimeString("ca-ES", {
                          hour: "2-digit",
                          minute: "2-digit",
                        })
                      : ""}
                  </p>

                  <span>📍 {event.lloc}</span>
                </div>

                <button onClick={() => onEditEvent(event)}>
                  Editar
                </button>

                <button onClick={() => deleteEvent(event.id)}>
                  Eliminar
                </button>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}