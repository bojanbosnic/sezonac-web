import React, { useEffect, useState } from "react";
import Card from "../components/Card/Interface";
import { AiOutlineSearch } from "react-icons/ai";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";
import Modal from "../components/Modal";

const Jobs = ({ loggedIn }) => {
  const { currentUser } = useContext(AuthContext);
  const [globalJobs, setGlobalJobs] = useState([]);
  const [searchData, setSearchData] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [globalDatas, setGlobalDatas] = useState([]);

  const getUserData = async () => {
    await getDocs(collection(db, `/GlobalJobs`)).then((response) =>
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
        <div className="flex justify-center my-12">
          <div className="w-1/2 relative lg:w-full">
            <input
              onChange={(e) => setSearchData(e.target.value)}
              className="input_field_login border-white z-20 relative pl-12 "
              type="text"
              placeholder="Potraži posao"
            />
            <AiOutlineSearch className="absolute text-xl z-10 top-[30px] left-3" />
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
                  className="card my-12"
                  onClick={() => {
                    setGlobalDatas(datas);
                    setShowModal(true);
                  }}
                >
                  <Card
                    id={datas.id}
                    title={datas.title}
                    duration={datas.duration}
                    city={datas.city}
                    time={datas.time}
                    money={datas.money}
                    info={datas.info}
                    profileID={datas.profileID}
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
