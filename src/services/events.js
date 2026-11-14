import {
  collection,
  getDocs,
  orderBy,
  query,
  Timestamp,
  where,
} from "firebase/firestore";
import { db } from "./firebase";

/*
 * Retorna els esdeveniments d'avui en endavant, ordenats per data.
 * Es compta des de les 00:00 perquè una sortida d'avui no desaparegui
 * de la web tan bon punt comença.
 */
export async function getUpcomingEvents() {
  const startOfToday = new Date();
  startOfToday.setHours(0, 0, 0, 0);

  const eventsQuery = query(
    collection(db, "events"),
    where("data", ">=", Timestamp.fromDate(startOfToday)),
    orderBy("data", "asc")
  );

  const querySnapshot = await getDocs(eventsQuery);

  return querySnapshot.docs
    .map((document) => ({
      id: document.id,
      ...document.data(),
    }))
    // Ignora documents amb la data mal desada perquè no trenquin la pàgina.
    .filter((event) => typeof event.data?.toDate === "function");
}
