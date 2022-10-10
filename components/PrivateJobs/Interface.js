import React, { useContext, useEffect, useState } from "react";
import {
  getDocs,
  collection,
  deleteDoc,
  doc,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../firebase";
import { AuthContext } from "../../Context/AuthContext";
import { RiDeleteBin2Line } from "react-icons/ri";
import { useRouter } from "next/router";
import Modal from "../Modal";
import OwnJob from "../OwnJob";
import LoadingSpinner from "../LoadingSpinner";

import { collectionGroup } from "firebase/firestore";

const Interface = () => {
  const { currentUser } = useContext(AuthContext);
  const { uid } = currentUser;
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [fireData, setFireData] = useState([]);
  const [mapedJobs, setMapedJobs] = useState([]);
  const [checked, setChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const niz = [
    {
      name: "Bojan",
      age: 23,
    },
    {
      name: "Stojan",
      age: 33,
    },
    {
      name: "petar",
      age: 56,
    },
  ];

  
 

  const getUserData = async () => {
    const jobovi = [];
    const jobsRef = collection(db, "jobs");

    const api = query(jobsRef, where("creatorID", "==", uid));

    const querySnapshot = await getDocs(api);

    querySnapshot.forEach((doc, index) => {
      console.log("Objekti", doc.data());
      jobovi.push({ ...doc.data() });
    });

    setFireData(jobovi);
  };

  const deleteDocument = (id) => {
    let filedForDelete = doc(db, `/jobs`, id);
    deleteDoc(filedForDelete)
      .then(() => getUserData())
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className="relative">
      <h1 className="text-xl font-medium mx-6">Objavljeni Poslovi</h1>
      <hr />
      <div className="px-6">
        {fireData.map((jobs) => (
          <div className="flex items-center relative my-8">
            <div className="mb-32  absolute sm:mb-[8rem]">
              <button
                onClick={() => {
                  deleteDocument(jobs);
                }}
                className="hover:underline"
              >
                Delete
              </button>
            </div>
            <input
              className="absolute left-[3%]"
              type="checkbox"
              defaultChecked={checked}
              onChange={() => setChecked(!checked)}
            />
            <div
              onClick={() => {
                setJobss(jobs), setShowModal(true);
              }}
              className="border rounded-3xl bg-secondary text-black w-full flex items-center my-8 px-6 sm:p-0"
            >
              <div className="w-full flex m-8 items-center justify-between sm:flex-wrap sm:m-4 sm:px-4">
                <span className="mx-4 font-semibold">{jobs.title}</span>
                <span className="mx-4 flex items-center sm:flex-wrap">
                  <span className="bassis-full">Trajanje:</span>
                  <span className="font-semibold mx-2">{jobs.name}</span>
                </span>
              </div>
            </div>
            <button
              onClick={() => deleteDocument(jobs.jobID)}
              className="ml-4 sm:hidden"
            >
              <RiDeleteBin2Line fontSize="2rem" />
            </button>
          </div>
        ))}
      </div>
      {/* <Modal
        getUserData={getUserData}
        jobss={jobss}
        show={showModal}
        isUpdating={isUpdating}
        onClose={() => setShowModal(false)}
      /> */}
    </div>
  );
};

export default Interface;

// const checkboxDeleteDocument = (id) => {
//   if (checked) {
//     deleteDocument(id);
//   } else {
//     alert("Please first check checkbox and now delete!");
//   }
// };
