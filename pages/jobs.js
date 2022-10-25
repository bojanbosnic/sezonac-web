import React, { useEffect, useState } from "react";
import Card from "../components/Card/Interface";
import Navbar from "../components/Navbar";
import styles from "../styles/home.module.css";
import classNames from "classnames";
import { getDocs, query, where, collection } from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";
import { FiSearch } from "react-icons/fi";
import Modal from "../components/Modal";
import userIcon from "../assets/ilustrations/2.jpg";
import { ToastContainer, toast } from "react-toastify";

const token =
  typeof window !== "undefined" ? localStorage.getItem("Token") : null;

const Jobs = ({ loggedIn }) => {
  const { currentUser } = useContext(AuthContext);
  const [globalJobs, setGlobalJobs] = useState([]);
  const [searchData, setSearchData] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [globalDatas, setGlobalDatas] = useState([]);
  const [savedJobsID, setSavedJobsID] = useState([]);
  const [savedJobs, setSavedJobs] = useState();

  const getUserData = async () => {
    await getDocs(collection(db, `/jobs`)).then((response) =>
      setGlobalJobs(
        response.docs.map((datas) => {
          return { ...datas.data(), id: datas.id };
        })
      )
    );
  };

  const getUserSaved = async () => {
    const userSavedJobs = [];
    const usersRef = collection(db, "/users");
    const q = query(usersRef, where("userID", "==", currentUser.uid));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      userSavedJobs.push(...doc.data().savedJobs);
    });
    setSavedJobsID(userSavedJobs);
  };

  const getSavedJobs = (creatorID) => {
    console.log("return correct!", creatorID);
    setSavedJobs(
      savedJobsID
        .filter((data) => data.profileid === creatorID)
        .map((datas) => datas.isSaved)
    );
  };

  useEffect(() => {
    getUserData();
    getUserSaved();
  }, []);
  return (
    <div className="container bg-[#f3f5f0] h-full min-h-screen sm:p-4">
      <Navbar loggedIn={!!token} />
      <main>
        <ToastContainer />
        <div className="flex justify-center">
          <div className="p-8 rounded-2xl  border-rounded w-4/5">
            <div className="flex justify-center items-center">
              <div className="w-1/2  lg:w-full">
                <div className="relative z-20  mr-4">
                  <input
                    onChange={(e) => setSearchData(e.target.value)}
                    className="input_field_login bg-white relative pl-12 placeholder-color ease-in-out border-white z-10"
                    type="text"
                    placeholder="Naslov Posla / Konobar..."
                    id="search-input"
                  />
                  <FiSearch className="absolute z-20 left-[18px] top-[28px] text-[#00ca99]" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-between w-full">
          {globalJobs
            .filter((datas) => {
              if (searchData == "") {
                return datas;
              } else if (
                datas.title
                  .toLowerCase()
                  .includes(searchData.toLocaleLowerCase())
              ) {
                return datas;
              }
            })
            .map((datas) => (
              <>
                <div
                  className={`card my-12 bg-white ${styles.card_hover} cursor-pointer`}
                  onClick={() => {
                    setGlobalDatas(datas);
                    setShowModal(true);
                  }}
                >
                  <Card
                    id={datas.jobID}
                    title={datas.title}
                    website={datas.webiste}
                    city={datas.location}
                    time={datas.time}
                    money={datas.money}
                    profileID={datas.creatorID}
                    loggedIn={loggedIn}
                    photo={datas.photo === null ? userIcon.src : datas.photo}
                    company={datas.company}
                    getCorrect={getSavedJobs}
                    savedJobs1={savedJobs}
                  />
                </div>
              </>
            ))}
          <Modal
            getUserData={getUserData}
            jobsForModal={globalDatas}
            show={showModal}
            onClose={() => setShowModal(false)}
          />
        </div>
      </main>
    </div>
  );
};
export default Jobs;
