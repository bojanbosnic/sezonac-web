import React, { useState, useEffect, useContext } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { getDocs, collection, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { AuthContext } from "../../Context/AuthContext";
import { useRouter } from "next/router";
const Interface = ({ poslovi }) => {
  const { currentUser } = useContext(AuthContext);
  const [updateJobs, setUpdateJobs] = useState([]);
  const router = useRouter();
  const data = router.query;

  // console.log("Uccitani poslovi -->", data);
  const updateFields = (e) => {
    e.preventDefault();

    let fieldToEdit = doc(db, `/${currentUser.uid}`, updateJobs.ID);
    updateDoc(fieldToEdit, {
      title: updateJobs.title,
      city: updateJobs.city,
      money: updateJobs.money,
      time: updateJobs.time,
      duration: updateJobs.duration,
      info: updateJobs.info,
    })
      .then(() => {
        let filedglobaledit = doc(db, `/GlobalJobs`, updateJobs.ID);
        updateDoc(filedglobaledit, {
          title: updateJobs.title,
          city: updateJobs.city,
          money: updateJobs.money,
          time: updateJobs.time,
          duration: updateJobs.duration,
          info: updateJobs.info,
        });
      })
      .then(() => {
        let filedsavedledit = doc(
          db,
          `/SavedJobs${currentUser.uid}`,
          updateJobs.ID
        );
        updateDoc(filedsavedledit, {
          title: updateJobs.title,
          city: updateJobs.city,
          money: updateJobs.money,
          time: updateJobs.time,
          duration: updateJobs.duration,
          info: updateJobs.info,
          email: currentUser.email,
          photo: currentUser.photoURL,
          company: currentUser.displayName,
        });
      })

      .then(() => {
        setIsUpdate(false);
        getUserData();
        onClose();
      })
      .catch((error) => console.log(error));
  };

  const getDatas = (id, title, city, money, time, duration, info) => {
    setUpdateJobs({
      ID: id,
      title: title,
      city: city,
      money: money,
      time: time,
      duration: duration,
      info: info,
    });
    setIsUpdate(true);
  };

  useEffect(() => {}, []);

  return (
    <div>
      <>
        <h3>{data.title}</h3>
        <h3>{data.location}</h3>
        <h3>{data.money}</h3>
        <h3>{data.workDuration}</h3>
        <h3>{data.email}</h3>
        <h3>{data.webiste}</h3>
        <h3>{data.company}</h3>
      </>
    </div>
  );
};

export default Interface;
