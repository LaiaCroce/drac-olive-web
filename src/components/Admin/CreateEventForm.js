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

    if (eventToEdit) {
      const date = eventToEdit.data.toDate();
      const formattedDate = date.toISOString().slice(0, 16);

      setForm({
        titol: eventToEdit.titol,
        data: formattedDate,
        lloc: eventToEdit.lloc,
        descripcio: eventToEdit.descripcio,
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