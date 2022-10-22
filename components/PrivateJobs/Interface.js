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
import { MdLocationOn } from "react-icons/md";

import { collectionGroup } from "firebase/firestore";

const Interface = () => {
  const { currentUser } = useContext(AuthContext);
  const { uid } = currentUser;
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [fireData, setFireData] = useState([]);
  const [jobsForModal, setJobsForModal] = useState([]);
  const [isUpdating, setIsUpdating] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getUserData = async () => {
    const jobovi = [];
    const jobsRef = collection(db, "jobs");

    const api = query(jobsRef, where("creatorID", "==", uid));

    const querySnapshot = await getDocs(api);

    querySnapshot.forEach((doc, index) => {
      jobovi.push({ ...doc.data() });
    });

    setFireData(jobovi);
  };

  const deleteDocument = (id) => {
    let fieldToDelete = doc(db, `/jobs`, id);
    deleteDoc(fieldToDelete)
      .then(() => getUserData())
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getUserData();
    setIsUpdating(true);
  }, []);

  return (
    <div className="relative">
      <h1 className="text-xl font-medium mx-6">Objavljeni Poslovi</h1>
      <hr />
      <div className="px-6">
        {fireData.map((jobs) => (
          <div className="flex items-center  relative">
            <div
              onClick={() => {
                setJobsForModal(jobs), setShowModal(true);
              }}
              className="border cursor-pointer rounded-3xl bg-secondary text-black w-full flex items-center my-8 px-6 sm:p-0"
            >
              <div className="w-full flex m-8 items-center justify-between sm:flex-wrap sm:m-4 sm:px-4">
                <span className="mx-2 font-medium">{jobs.title}</span>
                <span className="mx-2 flex items-center sm:flex-wrap">
                  <MdLocationOn />

                  <span className="font-medium mx-2">{jobs.location}</span>
                </span>
              </div>
            </div>
            <button onClick={() => deleteDocument(jobs.jobID)} className="ml-4">
              <RiDeleteBin2Line fontSize="2rem" />
            </button>
          </div>
        ))}
      </div>
      <Modal
        getUserData={getUserData}
        jobsForModal={jobsForModal}
        show={showModal}
        isUpdating={isUpdating}
        onClose={() => setShowModal(false)}
      />
    </div>
  );
};

export default Interface;
