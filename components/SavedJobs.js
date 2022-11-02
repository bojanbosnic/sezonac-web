import React, { useEffect, useState } from "react";
import Image from "next/image";
import { RiDeleteBin2Line } from "react-icons/ri";
import { MdLocationOn } from "react-icons/md";
import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";
import {
  getDocs,
  collection,
  updateDoc,
  arrayRemove,
  query,
  where,
  doc,
} from "firebase/firestore";
import { db } from "../firebase";
import Modal from "./Modal";

const SavedJobs = ({ savedJobsID }) => {
  const [showModal, setShowModal] = useState(false);
  const [jobsForModal, setJobsForModal] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const { uid } = currentUser;
  const [sacuvaniPoslovi, setSacuvaniPoslovi] = useState([]);
  const getUserData = async () => {
    const userSavedJobs = [];
    const usersRef = collection(db, "/users");
    const q = query(usersRef, where("userID", "==", uid));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      userSavedJobs.push(...doc.data().savedJobs);
    });
  };

  const getSavedJobs = () => {
    const finallySavedjobs = [];
    const jobsRef = collection(db, "/jobs");
    savedJobsID.map(async (data) => {
      const b = query(jobsRef, where("jobID", "==", data.jobsID));
      const queryJobs = await getDocs(b);

      queryJobs.forEach((queriedJob) => {
        finallySavedjobs.push({ ...queriedJob.data() });
      });
      setSacuvaniPoslovi(finallySavedjobs);
    });
  };

  const removeDocument = async (id, profileID) => {
    const jobsRef = doc(db, "/users", uid);
    const proba = await updateDoc(jobsRef, {
      savedJobs: arrayRemove({
        jobsID: id,
        profileid: profileID,
        isSaved: true,
      }),
    });
    getUserData();
  };

  useEffect(() => {
    getSavedJobs();
  }, []);

  return (
    <div className="relative">
      <h3 className="mx-6 text-xl font-medium">Sacuvani Poslovi</h3>
      <hr />
      <div className="px-6">
        {sacuvaniPoslovi.map((datas) => (
          <div className="flex items-center relative ">
            <div
              onClick={() => {
                setJobsForModal(datas), setShowModal(true);
              }}
              className="border cursor-pointer rounded-3xl bg-secondary text-black w-full flex items-center my-8 px-4 sm:p-0"
            >
              <div className="mx-8 w-full flex items-center justify-between md:flex-wrap sm:my-2">
                <div className="flex  items-center">
                  <div className="border p-4  w-24 h-24 sm:mx-8 sm:w-12 sm:h-12">
                    <img className="rounded-3xl" src={datas.photo} />
                  </div>
                  <span className="mx-4 font-semibold">{datas.title}</span>
                </div>
                <div className="flex items-center sm:flex-wrap">
                  <div className="flex items-center justify-center">
                    <span className="mx-4 flex items-center sm:flex-wrap">
                      <MdLocationOn />
                      <span className="ml-2">{datas.location}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={() => removeDocument(datas.jobID, datas.creatorID)}
              className="ml-4"
            >
              <RiDeleteBin2Line fontSize="2rem" />
            </button>
          </div>
        ))}
      </div>
      <Modal
        getUserData={getUserData}
        jobsForModal={jobsForModal}
        show={showModal}
        onClose={() => setShowModal(false)}
      />
    </div>
  );
};

export default SavedJobs;
