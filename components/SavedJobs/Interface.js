import React, { useEffect, useState } from "react";
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
  getDoc,
} from "firebase/firestore";
import { db } from "../../firebase";
import Modal from "../Modal";

const Interface = () => {
  const [showModal, setShowModal] = useState(false);
  const [savedJobs, setSavedJobs] = useState([]);
  const [savedDatas, setSavedDatas] = useState([]);
  const [globalJobs, setGlobalJobs] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const { uid } = currentUser;

  const getGlobalData = async () => {
    await getDocs(collection(db, `/global-jobs`)).then((response) =>
      setGlobalJobs(
        response.docs.map((datas) => {
          return { ...datas.data(), id: datas.id };
        })
      )
    );
  };

  const getSavedData = async () => {
    const jobsRef = doc(db, `/users`, `${uid}`);
    const docSnap = await getDoc(jobsRef);
    if (docSnap.exists()) {
      setSavedJobs(
        docSnap.data().saved_jobs.map((datas) => {
          return { ...datas };
        })
      );
    }
  };

  const removeDocument = (id) => {
    let fieldToDelete = doc(db, `/SavedJobs${currentUser.uid}`, id);
    deleteDoc(fieldToDelete)
      .then(() => getUserData())
      .catch((error) => console.log(error));
    console.log("REMOVE FUNCTION");
  };

  console.log("TRUE global====>>", globalJobs);

  const probnaFun = () => {
    savedDatas.map((datas) => datas.jobsID.includes(savedDatas));
  };

  useEffect(() => {
    getSavedData();
    getGlobalData();
  }, []);
  return (
    <div className="relative mt-16">
      {globalJobs
        .filter((datas) => {
          probnaFun();
          // if () {
          //   return datas;
          // }else{
          //   return console.log("NE VALJA!!")
          // }
        })
        .map((datas) => (
          <div className="flex items-center relative ">
            <div className="mb-44 absolute sm:mb-[5.5rem]">
              <button className="hover:underline">Remove</button>
            </div>
            <input className="absolute left-[4%]" type="checkbox" />
            <div
              onClick={() => {
                setSavedDatas(datas), setShowModal(true);
              }}
              className="border w-full flex items-center my-8 p-4 sm:p-0"
            >
              <div className="mx-8 w-full flex items-center justify-between sm:my-2">
                <div className="flex flex-col items-center">
                  <div className="border w-24 h-24 mx-8 sm:mx-8 sm:w-12 sm:h-12"></div>
                </div>
                <div className="flex items-center sm:flex-wrap">
                  <span className="mx-4 font-semibold">{datas.title}</span>
                  <div className="flex items-center justify-center">
                    <span className="mx-4 flex items-center sm:flex-wrap">
                      <MdLocationOn />
                      <span className="ml-2">{datas.city}</span>
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
      <Modal
        getUserData={getSavedData}
        jobss={savedDatas}
        show={showModal}
        onClose={() => setShowModal(false)}
      />
    </div>
  );
};

export default Interface;
