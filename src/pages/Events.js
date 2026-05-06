import { useEffect, useState } from "react";
import { db } from "../services/firebase";
import { collection, getDocs, query, orderBy, where } from "firebase/firestore";
import "./Events.css";

export default function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
  const fetchEvents = async () => {
    try {
      const today = new Date().toISOString().split("T")[0];

      const eventsQuery = query(
        collection(db, "events"),
        where("data", ">=", today),
        orderBy("data", "asc")
      );

      const querySnapshot = await getDocs(eventsQuery);

      const data = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      setEvents(data);
    } catch (error) {
      console.error("Error carregant events:", error);
    }
  };

  fetchEvents();
}, []);

    return (
    <main className="events-page">
      <section className="events-hero">
        <p>Agenda</p>
        <h1>Properes sortides</h1>
        <span>Consulta on podràs veure el Drac Olivé en acció.</span>
      </section>

      <section className="events-list">
        {events.length === 0 ? (
          <p className="events-empty">No hi ha esdeveniments encara.</p>
        ) : (
          events.map((e) => (
            <article className="event-card" key={e.id}>
              <div className="event-date">
                <span>{e.data}</span>
              </div>

              <div className="event-content">
                <h2>{e.titol}</h2>
                <p>{e.descripcio}</p>
                <strong>📍 {e.lloc}</strong>
              </div>
            </article>
          ))
        )}
      </section>
    </main>
    );
}