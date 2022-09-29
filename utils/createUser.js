import { setDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

export default async (data) => {
  console.log("createUsers data ----->>>", data);
  await setDoc(doc(db, `/users`, `${data.id}`), {
    businessName: data.displayName,
    email: data.email,
    userID: data.id,
  });
};
