import { useState } from "react";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "../../services/firebase";
import "./CreateEventForm.css";

export default function CreateEventForm() {
  const [form, setForm] = useState({
    titol: "",
    data: "",
    lloc: "",
    descripcio: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const createEvent = async (e) => {
    e.preventDefault();

    try {
      const eventDate = new Date(form.data);

      await addDoc(collection(db, "events"), {
        titol: form.titol,
        data: Timestamp.fromDate(eventDate),
        lloc: form.lloc,
        descripcio: form.descripcio,
      });

      alert("Esdeveniment creat 🔥");

      setForm({
        titol: "",
        data: "",
        lloc: "",
        descripcio: "",
      });
    } catch (error) {
      console.error("Error creant event:", error);
      alert("No s'ha pogut crear l'esdeveniment");
    }
  };

  return (
    <form className="create-event-form" onSubmit={createEvent}>
      <h2>Crear esdeveniment</h2>

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

      <button type="submit">Crear event</button>
    </form>
  );
}