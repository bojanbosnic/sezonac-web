import React, { useEffect, useState, useTransition } from "react";
import Image from "next/image";
import { RiDeleteBin2Line } from "react-icons/ri";
import { MdLocationOn } from "react-icons/md";
import { AuthContext } from "../../Context/AuthContext";
import { useContext } from "react";
import {
  getDocs,
  collection,
  deleteDoc,
  doc,
  query,
  where,
  getDoc,
  collectionGroup,
} from "firebase/firestore";
import { db } from "../../firebase";
import Modal from "../Modal";

const Interface = () => {
  // const [showModal, setShowModal] = useState(false);
  const [savedJobID, setSavedJobsID] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const { uid } = currentUser;
  const [sacuvaniPoslovi, setSacuvaniPoslovi] = useState([]);

  const getUserData = async () => {
    const usersRef = collection(db, "/users");
    const q = query(usersRef, where("userID", "==", uid));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      console.log("TOJETO", doc.data().savedJobs);
      setSavedJobsID([...doc.data().savedJobs]);
    });
  };

  const getSavedJobs = () => {
    const jobsRef = collection(db, "/jobs");
    savedJobID.forEach(async (savedJob) => {
      const b = query(jobsRef, where("jobID", "==", savedJob.jobsID));
      const queryJobs = await getDocs(b);

      queryJobs.forEach((queriedJob) => {
        setSacuvaniPoslovi((prevData) => [
          ...prevData,
          { ...queriedJob.data() },
        ]);
      });
    });
  };

  console.log("sacuvaniPoslovi---- - -- - - >", sacuvaniPoslovi);

  useEffect(() => {
    getUserData();
    getSavedJobs();
  }, []);

  return (
    <div className="relative">
      <h3 className="mx-6 text-xl font-medium">Sacuvani Poslovi</h3>
      <hr />
      <div className="px-6">
        {sacuvaniPoslovi.map((datas) => (
          <div className="flex items-center relative ">
            <div className="mb-44 absolute sm:mb-[5.5rem]">
              <button className="hover:underline">Remove</button>
            </div>
            <input className="absolute left-[4%]" type="checkbox" />
            <div
              onClick={() => {
                setSavedDatas(datas), setShowModal(true);
              }}
              className="border rounded-3xl bg-secondary text-black w-full flex items-center my-8 px-4 sm:p-0"
            >
              <div className="mx-8 w-full flex items-center justify-between sm:my-2">
                <div className="flex flex-col items-center">
                  <div className="border w-24 h-24 mx-8 sm:mx-8 sm:w-12 sm:h-12">
                    <img src={datas.photo} />
                  </div>
                </div>
                <div className="flex items-center sm:flex-wrap">
                  <span className="mx-4 font-semibold">{datas.title}</span>
                  <div className="flex items-center justify-center">
                    <span className="mx-4 flex items-center sm:flex-wrap">
                      <MdLocationOn />
                      <span className="ml-2">{datas.profileid}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={() => removeDocument(datas.id)}
              className="ml-4 sm:hidden"
            >
              <RiDeleteBin2Line fontSize="2rem" />
            </button>
          </div>
        ))}
      </div>
      {/* <Modal
        getUserData={getUserData}
        jobss={savedDatas}
        show={showModal}
        onClose={() => setShowModal(false)}
      /> */}
    </div>
  );
};

export default Interface;

// const removeDocument = (id) => {
//   let fieldToDelete = doc(db, `/SavedJobs${currentUser.uid}`, id);
//   deleteDoc(fieldToDelete)
//     .then(() => getUserData())
//     .catch((error) => console.log(error));
//   console.log("REMOVE FUNCTION");
// };
