import React, { useEffect, useState } from "react";
import Card from "../components/Card/Interface";
import Navbar from "../components/Navbar";
import { AiOutlineSearch } from "react-icons/ai";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";
import { FaSearch } from "react-icons/fa";
import Modal from "../components/Modal";

const Jobs = ({ loggedIn }) => {
  const { currentUser } = useContext(AuthContext);
  const [globalJobs, setGlobalJobs] = useState([]);
  const [searchData, setSearchData] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [globalDatas, setGlobalDatas] = useState([]);

  const getUserData = async () => {
    await getDocs(collection(db, `/jobs`)).then((response) =>
      setGlobalJobs(
        response.docs.map((datas) => {
          return { ...datas.data(), id: datas.id };
        })
      )
    );
  };

  useEffect(() => {
    getUserData();
  }, []);
  return (
    <div className="container sm:p-4">
      <main>
        <div className="flex justify-center my-12 ">
          <div className=" p-8 rounded-2xl bg-primary  border-rounded w-4/5">
            <h1 className="text-center text-white">
              Pretraži poslove koji te zanimaju
            </h1>
            <div className="flex justify-center items-center">
              <div className="w-1/2 mr-4 lg:w-full">
                <input
                  onChange={(e) => setSearchData(e.target.value)}
                  className="input_field_login text-primary placeholder-color  border-white z-20"
                  type="text"
                  placeholder="Konobar..."
                  id="search-input"
                />
              </div>
              <label className="" htmlFor="search-input">
                <FaSearch color="white" fontSize="2rem" />
              </label>
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
                {/* transform: translateY(-10px) */}
                <div
                  className="card my-12 shadow-xs shadow-[#3898e28d] transition ease-in-out hover:translate-x-0.5"
                  onClick={() => {
                    setGlobalDatas(datas);
                    setShowModal(true);
                  }}
                >
                  <Card
                    id={datas.jobID}
                    title={datas.title}
                    duration={datas.duration}
                    city={datas.city}
                    time={datas.time}
                    money={datas.money}
                    
                    profileID={datas.creatorID}
                    loggedIn={loggedIn}
                    photo={datas.photo}
                    company={datas.company}
                    
                  />
                </div>
              </>
            ))}
          <Modal
            getUserData={getUserData}
            jobss={globalDatas}
            show={showModal}
            onClose={() => setShowModal(false)}
          />
        </div>
      </main>
    </div>
  );
};
export default Jobs;
