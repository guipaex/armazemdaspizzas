import { db } from "@/config/firebase";
import { doc, getDoc } from "firebase/firestore";

export async function getCounter() {
  const counterRef = doc(db, "pedidos", "index");
  const counter = await getDoc(counterRef);

  if (counter.exists()) {
    console.log(counter.data().counter);
    return;
  } else {
    console.log("Bugou!");
  }
}
