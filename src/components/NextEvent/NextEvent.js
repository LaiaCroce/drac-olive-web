import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUpcomingEvents } from "../../services/events";
import EventCalendar from "./EventCalendar";
import "./NextEvent.css";

function NextEvent() {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    let isActive = true;

    const fetchEvents = async () => {
      try {
        const data = await getUpcomingEvents();

        if (!isActive) return;

        setEvents(data);
        setSelectedEvent(data[0] || null);
        setStatus("ready");
      } catch (error) {
        console.error("Error carregant propers events:", error);

        if (isActive) setStatus("error");
      }
    };

    fetchEvents();

    return () => {
      isActive = false;
    };
  }, []);

  if (!selectedEvent) {
    return (
      <section className="next-event-section" aria-busy={status === "loading"}>
        <div className="next-event-layout next-event-layout--empty">
          <div className="next-event-intro">
            {status === "loading" ? (
              <span className="next-event-status">Carregant l’agenda…</span>
            ) : (
              <>
                <h2>
                  {status === "error"
                    ? "No hem pogut carregar l’agenda"
                    : "No hi ha sortides programades"}
                </h2>
                <span>
                  {status === "error"
                    ? "Torna-ho a provar d’aquí a una estona."
                    : "Aviat anunciarem noves dates. Segueix-nos a les xarxes per no perdre’t res."}
                </span>
                <Link to="/events" className="button-secondary">
                  Veure agenda →
                </Link>
              </>
            )}
          </div>
        </div>
      </section>
    );
  }

  const eventDate = selectedEvent.data.toDate();

  return (
    <section className="next-event-section">
      <div className="next-event-layout">
        <div className="next-event-intro">
          {/*<p>Properes sortides</p>*/}
          <h2>No et perdis el pròxim correfoc!</h2>
          <span>
            Consulta el calendari i descobreix totes les sortides que tenim
            preparades.
          </span>

          <Link to="/events" className="button-secondary">
            Veure agenda →
          </Link>
        </div>

        <article className="next-event-card">
          <p className="next-event-label">propera sortida</p>

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