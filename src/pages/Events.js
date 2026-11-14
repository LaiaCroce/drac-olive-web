import { useEffect, useState } from "react";
import { getUpcomingEvents } from "../services/events";
import Footer from "../components/Footer/Footer";
import "./Events.css";

export default function Events() {
  const [events, setEvents] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    let isActive = true;

    const fetchEvents = async () => {
      try {
        const data = await getUpcomingEvents();

        if (!isActive) return;

        setEvents(data);
        setStatus("ready");
      } catch (error) {
        console.error("Error carregant events:", error);

        if (isActive) setStatus("error");
      }
    };

    fetchEvents();

    return () => {
      isActive = false;
    };
  }, []);

  const renderList = () => {
    if (status === "loading") {
      return <p className="events-empty">Carregant l’agenda…</p>;
    }

    if (status === "error") {
      return (
        <p className="events-empty" role="alert">
          No hem pogut carregar l’agenda. Torna-ho a provar d’aquí a una
          estona.
        </p>
      );
    }

    if (events.length === 0) {
      return (
        <p className="events-empty">
          Ara mateix no hi ha sortides programades.
        </p>
      );
    }

    return events.map((e) => {
      const date = e.data.toDate();

      return (
        <article className="event-card" id={`event-${e.id}`} key={e.id}>
          <div className="event-date">
            <span>{date.toLocaleDateString("ca-ES")}</span>
            <small>
              {date.toLocaleTimeString("ca-ES", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </small>
          </div>

          <div className="event-content">
            <h2>{e.titol}</h2>
            {e.descripcio && <p>{e.descripcio}</p>}
            {e.lloc && <strong>📍 {e.lloc}</strong>}
          </div>
        </article>
      );
    });
  };

  return (
    <>
      <main className="events-page">
        <section className="events-hero">
          <p>Agenda</p>
          <h1>Properes sortides</h1>
          <span>Consulta on podràs veure el Drac Olivé en acció.</span>
        </section>

        <section className="events-list" aria-busy={status === "loading"}>
          {renderList()}
        </section>
      </main>

      <Footer />
    </>
  );
}
