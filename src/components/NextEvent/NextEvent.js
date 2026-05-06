import { Link } from "react-router-dom";
import "./NextEvent.css";

function NextEvent() {
  return (
    <section className="next-event">
      <div className="next-event-intro">
        <p>Propera sortida </p>
        <h2>No et perdis el proper correfoc!</h2>
        <Link to="/events" className="btn btn-secondary">
          Veure agenda
        </Link>
      </div>

      <div className="next-event-card">
        <div className="next-event-date">
          <span>29</span>
          <small>Octubre</small>
        </div>

        <div className="next-event-info">
          <h3>Correfoc Nit de les Bèsties 3 </h3>
          <p>📍 Plaça Catalunya, Olesa de Montserrat</p>
        </div>

        <div className="next-event-time">20:30h</div>
      </div>
    </section>
  );
}

export default NextEvent;