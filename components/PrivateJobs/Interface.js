import React, { useContext, useEffect, useState } from "react";
import {
  getDocs,
  collection,
  deleteDoc,
  doc,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../firebase";
import { AuthContext } from "../../Context/AuthContext";
import { RiDeleteBin2Line } from "react-icons/ri";
import { useRouter } from "next/router";
import Modal from "../Modal";
import OwnJob from "../OwnJob";
import LoadingSpinner from "../LoadingSpinner";
import Link from "next/link";
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

  //   import { collection, query, where, onSnapshot } from "firebase/firestore";

  // const q = query(collection(db, "cities"), where("state", "==", "CA"));
  // const unsubscribe = onSnapshot(q, (querySnapshot) => {
  //   const cities = [];
  //   querySnapshot.forEach((doc) => {
  //       cities.push(doc.data().name);
  //   });
  //   console.log("Current cities in CA: ", cities.join(", "));
  // });  ovo bi trebalo isprobati

  

  const getUserData = async () => {
    const jobsRef = collection(db, "jobs");

    const q = query(jobsRef, where("creatorID", "==", uid));

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      console.log("TOJETO", [{ ...doc.data() }]);
      setFireData([{ ...doc.data() }]);
      // return { ...datas, id: datas }
      // console.log(doc.id, " => ", doc.data());
    });
  };

  console.log("KONACNI POSLOVI :() --->", fireData);

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
    // setIsUpdating(true);
  }, []);

  return (
    <div className="relative mt-16">
      <h1 className="text-xl font-medium">Objavljeni Poslovi</h1>
      <div className=" border-b border-black w-full md:border-r-0 md:border-t-1 md:border-secondary md:h-0 md:m-r-0"></div>
      {fireData.length === 0 ? (
        <>
          {/* {fireData.length === 0 ? setIsLoading(false) : setIsLoading(true)} */}
          {isLoading ? <p>Nema poslova za sada...</p> : <LoadingSpinner />}
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
              <Link href={{ pathname: "/own-job", query: jobs }}>
                <div className="border rounded-3xl bg-secondary text-black w-full flex items-center my-8 px-4 sm:p-0">
                  <div className="w-full flex m-8 items-center justify-between sm:flex-wrap sm:m-4 sm:px-4">
                    <span className="mx-4 font-medium">{jobs.title}</span>
                    <span className="mx-4 flex items-center sm:flex-wrap">
                      <span className="bassis-full font-medium">Trajanje:</span>
                      <span className="font-medium mx-2">{jobs.duration}</span>
                    </span>
                  </div>
                </div>
              </Link>

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
      <OwnJob poslovi={mapedJobs} />

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
