import { useEffect, useState } from "react";
import { db } from "../services/firebase";
import { collection, getDocs } from "firebase/firestore";

export default function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "events"));

        const data = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        setEvents(data);
      } catch (error) {
        console.error("Error carregant events:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div>
      <h1>Esdeveniments 🔥</h1>

      {events.length === 0 ? (
        <p>No hi ha esdeveniments encara</p>
      ) : (
        events.map(e => (
          <div key={e.id}>
            <h3>{e.titol}</h3>
            <p>{e.data} - {e.lloc}</p>
            <p>{e.descripcio}</p>
          </div>
        ))
      )}
    </div>
  );
}