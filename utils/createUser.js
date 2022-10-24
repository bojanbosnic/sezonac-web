import { setDoc, doc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "../firebase";

export default async (data) => {
  console.log("createUsers data ----->>>", data);
  const jobsRef = doc(db, `/users`, `${data.id}`);
  await setDoc(jobsRef, {
    businessName: data.displayName,
    email: data.email,
    userID: data.id,
  });

  await updateDoc(jobsRef, {
    savedJobs: arrayUnion(),
  });
};
