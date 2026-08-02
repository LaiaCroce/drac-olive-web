import { useEffect, useMemo, useState } from "react";
import "./EventCalendar.css";

export default function EventCalendar({
  events,
  selectedEvent,
  onSelectEvent,
}) {
  const [currentMonth, setCurrentMonth] = useState(() => {
    const today = new Date();

    return new Date(
      today.getFullYear(),
      today.getMonth(),
      1
    );
  });

  /*
   * Quan Firebase acaba de carregar els esdeveniments,
   * situem el calendari al mes de l’esdeveniment seleccionat.
   */
  useEffect(() => {
    if (!selectedEvent?.data?.toDate) return;

    const selectedDate = selectedEvent.data.toDate();

    setCurrentMonth(
      new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        1
      )
    );
  }, [selectedEvent]);

  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();

  const days = useMemo(() => {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    // Converteix diumenge=0 del JS a una setmana que comença en dilluns.
    const emptyDaysAtStart = (firstDay.getDay() + 6) % 7;
    const daysInMonth = lastDay.getDate();

    return [
      ...Array(emptyDaysAtStart).fill(null),
      ...Array.from({ length: daysInMonth }, (_, index) => index + 1),
    ];
  }, [year, month]);

  /*
   * Retorna tots els esdeveniments d’un dia,
   * no només el primer.
   */
  const getEventsForDay = (day) => {
    if (!day) return [];

    return events.filter((event) => {
      if (!event.data?.toDate) return false;

      const eventDate = event.data.toDate();

      return (
        eventDate.getFullYear() === year &&
        eventDate.getMonth() === month &&
        eventDate.getDate() === day
      );
    });
  };

  const goPreviousMonth = () => {
    setCurrentMonth((previousMonth) => {
      return new Date(
        previousMonth.getFullYear(),
        previousMonth.getMonth() - 1,
        1
      );
    });
  };

  const goNextMonth = () => {
    setCurrentMonth((previousMonth) => {
      return new Date(
        previousMonth.getFullYear(),
        previousMonth.getMonth() + 1,
        1
      );
    });
  };

  const monthName = currentMonth.toLocaleDateString("ca-ES", {
    month: "long",
    year: "numeric",
  });

  const today = new Date();

  return (
    <div className="event-calendar">
      <div className="calendar-header">
        <button
          type="button"
          onClick={goPreviousMonth}
          aria-label="Mes anterior"
        >
          ←
        </button>

        <h3>{monthName}</h3>

        <button
          type="button"
          onClick={goNextMonth}
          aria-label="Mes següent"
        >
          →
        </button>
      </div>

      <div className="calendar-weekdays" aria-hidden="true">
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
          if (!day) {
            return (
              <span
                className="calendar-day calendar-day--empty"
                key={`empty-${index}`}
              />
            );
          }

          const dayEvents = getEventsForDay(day);
          const hasEvents = dayEvents.length > 0;

          const isSelected = dayEvents.some(
            (event) => event.id === selectedEvent?.id
          );

          const isToday =
            today.getFullYear() === year &&
            today.getMonth() === month &&
            today.getDate() === day;

          const classNames = [
            "calendar-day",
            hasEvents ? "has-event" : "",
            isSelected ? "selected" : "",
            isToday ? "today" : "",
          ]
            .filter(Boolean)
            .join(" ");

          return (
            <button
              type="button"
              key={`${year}-${month}-${day}`}
              className={classNames}
              disabled={!hasEvents}
              onClick={() => onSelectEvent(dayEvents[0])}
              aria-label={
                hasEvents
                  ? `${dayEvents.length} esdeveniment${
                      dayEvents.length > 1 ? "s" : ""
                    } el dia ${day}`
                  : `Sense esdeveniments el dia ${day}`
              }
            >
              <span>{day}</span>

              {dayEvents.length > 1 && (
                <small className="calendar-event-count">
                  {dayEvents.length}
                </small>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}