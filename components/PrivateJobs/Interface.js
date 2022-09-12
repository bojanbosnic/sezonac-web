import React, { useContext, useEffect, useState } from "react";
import {
  getDocs,
  collection,
  deleteDoc,
  doc,
  updateDoc,
  collectionGroup,
  onSnapshot,
  arrayUnion,
  getDoc,
} from "firebase/firestore";
import { db } from "../../firebase";
import { AuthContext } from "../../Context/AuthContext";
import { RiDeleteBin2Line } from "react-icons/ri";
import Modal from "../Modal";
import LoadingSpinner from "../LoadingSpinner";

const Interface = () => {
  const { currentUser } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);
  const [fireData, setFireData] = useState([]);
  const [jobss, setJobss] = useState([]);
  const [checked, setChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  console.log("This is jobs!!", jobss);
  console.log("CHECKED", checked);


  const jobsRef = doc(db, `/users`, `${currentUser.uid}`);

  const getUserData = async () => {
    const docSnap = await getDoc(jobsRef);

    console.log("Document data:====>", docSnap.data().jobs);
    if (docSnap.exists()) {
      setFireData(
        docSnap.data().jobs.map((datas) => {
          return { ...datas, id: datas.id };
        })
      );
    }
  };
  console.log("FINALY JOBS==>", fireData);

  const deleteDocument = (id) => {
    let fieldToDelete = doc(db, `/${currentUser.uid}`, id);
    deleteDoc(fieldToDelete)
      .then(() => getUserData())
      .catch((error) => console.log(error));
    let fieldToDeleteGlobal = doc(db, `/GlobalJobs`, id);
    deleteDoc(fieldToDeleteGlobal)
      .then(() => getUserData())
      .catch((error) => console.log(error));
  };

  const checkboxDeleteDocument = (id) => {
    if (checked) {
      deleteDocument(id);
    } else {
      alert("Please first check checkbox and now delete!");
    }
  };

  useEffect(() => {
    getUserData();
    setIsUpdating(true);
  }, []);

  return (
    <div className="relative mt-16">
      {fireData.length === 0 ? (
        <>
        
          <p>Nema poslova za sada...</p>
        </>
      ) : (
        <>
          {fireData.map((jobs) => (
            <div className="flex items-center relative">
              <div className="mb-32  absolute sm:mb-[8rem]">
                <button
                  onClick={() => checkboxDeleteDocument(jobs.id)}
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
                className="border w-full flex items-center my-8 px-4 sm:p-0"
              >
                <div className="w-full flex m-8 items-center justify-between sm:flex-wrap sm:m-4 sm:px-4">
                  <span className="mx-4 font-semibold">{jobs.title}</span>
                  <span className="mx-4 flex items-center sm:flex-wrap">
                    <span className="bassis-full">Trajanje:</span>
                    <span className="font-semibold mx-2">{jobs.duration}</span>
                  </span>
                </div>
              </div>
              <button
                onClick={() => deleteDocument(jobs.id)}
                className="ml-4 sm:hidden"
              >
                <RiDeleteBin2Line fontSize="2rem" />
              </button>
            </div>
          ))}
        </>
      )}
      <Modal
        getUserData={getUserData}
        jobss={jobss}
        show={showModal}
        isUpdating={isUpdating}
        onClose={() => setShowModal(false)}
      />
    </div>
  );
};

export default Interface;
