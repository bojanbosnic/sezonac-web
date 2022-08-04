import React, { useContext, useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";
import { AuthContext } from "../../Context/AuthContext";
import { RiDeleteBin2Line } from "react-icons/ri";
import Modal from "../Modal";

const Interface = () => {
  const { currentUser } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);
  const [fireData, setFireData] = useState([]);
  const [jobss, setJobss] = useState([]);

  console.log("This is jobs", jobss);

  const getUserData = async () => {
    await getDocs(collection(db, `/${currentUser.uid}`)).then((response) =>
      setFireData(
        response.docs.map((datas) => {
          return { ...datas.data(), id: datas.id };
        })
      )
    );
  };

  const deleteDocument = (id) => {
    let fieldToDelete = doc(db, `/${currentUser.uid}`, id);
    deleteDoc(fieldToDelete)
      .then(() => alert("Data Deleted!"), getUserData())
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className="relative mt-16">
      {fireData.map((jobs) => (
        <div className="flex items-center relative">
          <div className="mb-32  absolute sm:mb-[8rem]">
            <button className="hover:underline">Delete</button>
            <span className="mx-2">/</span>
            <button className="hover:underline">Delete All</button>
          </div>
          <input className="absolute left-[3%]" type="checkbox" />
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
                <span className="font-semibold mx-2">01.06.2022</span>-
                <span className="font-semibold mx-2">01.09.2022</span>
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
      <Modal
        setJobss={setJobss}
        jobss={jobss}
        show={showModal}
        onClose={() => setShowModal(false)}
      />
    </div>
  );
};

export default Interface;
