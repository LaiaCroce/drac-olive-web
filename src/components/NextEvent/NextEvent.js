import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../../services/firebase";
import { collection, getDocs, query, orderBy, where, Timestamp, limit } from "firebase/firestore";
import "./NextEvent.css";

function NextEvent() {
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchNextEvent = async () => {
      try {
        const today = Timestamp.now();

        const eventsQuery = query(
          collection(db, "events"),
          where("data", ">=", today),
          orderBy("data", "asc"),
          limit(1)
        );

        const querySnapshot = await getDocs(eventsQuery);

        if (!querySnapshot.empty) {
          const doc = querySnapshot.docs[0];
          setEvent({
            id: doc.id,
            ...doc.data(),
          });
        }
      } catch (error) {
        console.error("Error carregant proper event:", error);
      }
    };

    fetchNextEvent();
  }, []);

  if (!event) {
    return (
      <section className="next-event">
        <div className="next-event-intro">
          <p>Propera sortida 🔥</p>
          <h2>No hi ha sortides programades</h2>
          <Link to="/events" className="btn btn-secondary">
            Veure agenda
          </Link>
        </div>
      </section>
    );
  }

  const eventDate = event.data.toDate();

  return (
    <section className="next-event">
      <div className="next-event-intro">
        <p>Propera sortida 🔥</p>
        <h2>No et perdis el proper correfoc!</h2>
        <Link to="/events" className="btn btn-secondary">
          Veure agenda
        </Link>
      </div>

      <div className="next-event-card">
        <div className="next-event-date">
          <span>{eventDate.getDate()}</span>
          <small>
            {eventDate.toLocaleDateString("ca-ES", { month: "short" })}
          </small>
        </div>

        <div className="next-event-info">
          <h3>{event.titol}</h3>
          <p>📍 {event.lloc}</p>
        </div>

        <div className="next-event-time">
          {eventDate.toLocaleTimeString("ca-ES", { 
            hour: "2-digit", 
            minute: "2-digit" })}
        </div>
      </div>
    </section>
  );
}

export default NextEvent;