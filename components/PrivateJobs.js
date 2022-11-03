import React, { useContext, useEffect, useState } from "react";
import {
  getDocs,
  collection,
  deleteDoc,
  doc,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../Context/AuthContext";
import { RiDeleteBin2Line } from "react-icons/ri";
import Modal from "./Modal";
import LoadingSpinner from "./LoadingSpinner";
import { MdLocationOn } from "react-icons/md";

const PrivateJobs = () => {
  const { currentUser } = useContext(AuthContext);
  const { uid } = currentUser;
  const [showModal, setShowModal] = useState(false);
  const [fireData, setFireData] = useState([]);
  const [jobsForModal, setJobsForModal] = useState([]);
  const [isUpdating, setIsUpdating] = useState(false);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps 
  }, []);

  return (
    <div className="relative">
      <h1 className="text-xl font-medium mx-6">Objavljeni Poslovi</h1>
      <hr />
      <div className="px-6">
        {fireData.map((jobs) => (
          <div key={jobs.jobID} className="flex items-center  relative">
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

export default PrivateJobs;
