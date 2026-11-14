import { useState, useEffect} from "react";
import { addDoc, collection, Timestamp, updateDoc, doc} from "firebase/firestore";
import { db } from "../../services/firebase";
import "./CreateEventForm.css";

export default function CreateEventForm( { eventToEdit, clearEdit, onEventSaved } ) {
  const [form, setForm] = useState({
    titol: "",
    data: "",
    lloc: "",
    descripcio: "",
  });

  const resetForm = () => {
    setForm({
      titol: "",
      data: "",
      lloc: "",
      descripcio: "",
    });
  };

  useEffect(() => {

    if (eventToEdit?.data?.toDate) {
      const date = eventToEdit.data.toDate();
      // datetime-local vol l'hora local; toISOString() la passaria a UTC
      // i en editar l'esdeveniment l'hora es mouria 1 o 2 hores.
      const pad = (value) => String(value).padStart(2, "0");
      const formattedDate =
        `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}` +
        `T${pad(date.getHours())}:${pad(date.getMinutes())}`;

      setForm({
        titol: eventToEdit.titol || "",
        data: formattedDate,
        lloc: eventToEdit.lloc || "",
        descripcio: eventToEdit.descripcio || "",
      });
    }
  }, [eventToEdit]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

   const saveEvent = async (e) => {
    e.preventDefault();

    try {
      const eventDate = new Date(form.data);

      if (Number.isNaN(eventDate.getTime())) {
        alert("La data no és vàlida");
        return;
      }

      const eventData = {
        titol: form.titol,
        data: Timestamp.fromDate(eventDate),
        lloc: form.lloc,
        descripcio: form.descripcio,
      };

      if (eventToEdit) {
        await updateDoc(doc(db, "events", eventToEdit.id), eventData);
        alert("Esdeveniment actualitzat 🔥");
        clearEdit();
      } else {
        await addDoc(collection(db, "events"), eventData);
        alert("Esdeveniment creat 🔥");
      }

      setForm({
        titol: "",
        data: "",
        lloc: "",
        descripcio: "",
      });

      onEventSaved();
    } catch (error) {
      console.error("Error guardant event:", error);
      alert("No s'ha pogut guardar l'esdeveniment");
    }
  };

  return (
    <form className="create-event-form" onSubmit={saveEvent}>
      <h2>{eventToEdit ? "Editar esdeveniment" : "Crear esdeveniment"}</h2>

      <input
        name="titol"
        placeholder="Títol"
        value={form.titol}
        onChange={handleChange}
        required
      />

      <input
        name="data"
        type="datetime-local"
        value={form.data}
        onChange={handleChange}
        required
      />

      <input
        name="lloc"
        placeholder="Lloc"
        value={form.lloc}
        onChange={handleChange}
        required
      />

      <textarea
        name="descripcio"
        placeholder="Descripció"
        value={form.descripcio}
        onChange={handleChange}
        rows="4"
        required
      />

      <button type="submit">{eventToEdit ? "Actualitzar event" : "Crear event"}</button>

      {eventToEdit && (
        <button type="button" onClick={() => {
          clearEdit();
          resetForm();
        }} className="cancel-button">
          Cancel·lar edició
        </button>
      )}
    </form>
  );
}