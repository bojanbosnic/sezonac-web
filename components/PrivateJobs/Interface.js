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
          <div className="flex items-center relative">
            <div
              onClick={() => {
                setJobsForModal(jobs), setShowModal(true);
              }}
              className="border rounded-3xl bg-secondary text-black w-full flex items-center my-8 px-6 sm:p-0"
            >
              <div className="w-full flex m-8 items-center justify-between sm:flex-wrap sm:m-4 sm:px-4">
                <span className="mx-4 font-medium">{jobs.title}</span>
                <span className="mx-4 flex items-center sm:flex-wrap">
                  <span className="font-medium mx-2">{jobs.jobID}</span>
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

