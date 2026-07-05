import { useState } from "react";
import "./EventCalendar.css";

export default function EventCalendar({ events, selectedEvent, onSelectEvent }) {
  const initialDate =
    selectedEvent?.data?.toDate?.() ||
    events[0]?.data?.toDate?.() ||
    new Date();

  const [currentMonth, setCurrentMonth] = useState(
    new Date(initialDate.getFullYear(), initialDate.getMonth(), 1)
  );

  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);

  const startWeekDay = (firstDay.getDay() + 6) % 7;
  const daysInMonth = lastDay.getDate();

  const days = [];

  for (let i = 0; i < startWeekDay; i++) {
    days.push(null);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    days.push(day);
  }

  const getEventForDay = (day) => {
    return events.find((event) => {
      const date = event.data.toDate();

      return (
        date.getFullYear() === year &&
        date.getMonth() === month &&
        date.getDate() === day
      );
    });
  };

  const goPreviousMonth = () => {
    setCurrentMonth(new Date(year, month - 1, 1));
  };

  const goNextMonth = () => {
    setCurrentMonth(new Date(year, month + 1, 1));
  };

  const monthName = currentMonth.toLocaleDateString("ca-ES", {
    month: "long",
    year: "numeric",
  });

  return (
    <div className="event-calendar">
      <div className="calendar-header">
        <button onClick={goPreviousMonth}>←</button>
        <h3>{monthName}</h3>
        <button onClick={goNextMonth}>→</button>
      </div>

      <div className="calendar-weekdays">
        <span>Dl</span>
        <span>Dt</span>
        <span>Dc</span>
        <span>Dj</span>
        <span>Dv</span>
        <span>Ds</span>
        <span>Dg</span>
      </div>

      <div className="calendar-grid">
        {days.map((day, index) => {
          const event = day ? getEventForDay(day) : null;
          const isSelected = event?.id === selectedEvent?.id;

          return (
            <button
              key={index}
              className={[
                "calendar-day",
                event ? "has-event" : "",
                isSelected ? "selected" : "",
              ].join(" ")}
              disabled={!event}
              onClick={() => onSelectEvent(event)}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
}