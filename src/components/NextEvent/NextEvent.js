import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../../services/firebase";
import {
  collection,
  getDocs,
  query,
  orderBy,
  where,
  Timestamp,
} from "firebase/firestore";
import EventCalendar from "./EventCalendar";
import "./NextEvent.css";

function NextEvent() {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const today = Timestamp.now();

        const eventsQuery = query(
          collection(db, "events"),
          where("data", ">=", today),
          orderBy("data", "asc")
        );

        const querySnapshot = await getDocs(eventsQuery);

        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setEvents(data);
        setSelectedEvent(data[0] || null);
      } catch (error) {
        console.error("Error carregant propers events:", error);
      }
    };

    fetchEvents();
  }, []);

  if (!selectedEvent) {
    return (
      <section className="next-event-section">
        <div className="next-event-intro">
          <p>Properes actuacions 🔥</p>
          <h2>No hi ha actuacions programades</h2>
          <Link to="/events" className="btn btn-secondary">
            Veure agenda
          </Link>
        </div>
      </section>
    );
  }

  const eventDate = selectedEvent.data.toDate();

  return (
    <section className="next-event-section">
      <div className="next-event-layout">
        <div className="next-event-intro">
          <p>Properes actuacions 🔥</p>
          <h2>No et perdis el proper foc!</h2>
          <span>
            Consulta el calendari i descobreix totes les actuacions que tenim
            preparades.
          </span>

          <Link to="/events" className="btn btn-secondary">
            Veure agenda →
          </Link>
        </div>

        <article className="next-event-card">
          <p className="next-event-label">Propera actuació</p>

          <div className="next-event-card-content">
            <div className="next-event-date">
              <strong>{eventDate.getDate()}</strong>
              <small>
                {eventDate.toLocaleDateString("ca-ES", { month: "short" })}
              </small>
            </div>

            <div className="next-event-info">
              <h3>{selectedEvent.titol}</h3>
              <p>📍 {selectedEvent.lloc}</p>
              <p>
                🕒{" "}
                {eventDate.toLocaleTimeString("ca-ES", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
          </div>

          <Link
            to={`/events#event-${selectedEvent.id}`}
            className="next-event-detail"
          >
            Veure detall →
          </Link>
        </article>

        <EventCalendar
          events={events}
          selectedEvent={selectedEvent}
          onSelectEvent={setSelectedEvent}
        />
      </div>
    </section>
  );
}

export default NextEvent;