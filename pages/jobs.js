import React, { useEffect, useState } from "react";
import Card from "../components/Card/Interface";
import { AiOutlineSearch } from "react-icons/ai";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase";
import Modal from "../components/Modal";
export default function Jobs() {
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

  console.log("SearchData", searchData);

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
        <div>
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
              <div
                onClick={() => {
                  setGlobalDatas(datas), setShowModal(true);
                }}
                className="flex flex-wrap justify-between w-full"
              >
                <Card
                  id={datas.id}
                  title={datas.title}
                  money={datas.money}
                  time={datas.time}
                  duration={datas.duration}
                  city={datas.city}
                  info={datas.info}
                />
              </div>
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
}
