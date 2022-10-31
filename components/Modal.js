import React, { useState, useEffect } from "react";
import { doc, updateDoc } from "firebase/firestore";
import Image from "next/image";
import ReactDOM from "react-dom";
import { AiOutlineInfoCircle, AiOutlineCloseSquare } from "react-icons/ai";
import { BiData, BiUserCircle } from "react-icons/bi";
import { IoIosSave } from "react-icons/io";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { db } from "../firebase";
import classNames from "classnames";
import styles from "../styles/home.module.css";

const Modal = ({ show, onClose, jobsForModal, getUserData, isUpdating }) => {
  const [isBrowser, setIsBrowser] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const [updateJobs, setUpdateJobs] = useState([]);
  const poslovi = [jobsForModal];

  const handleClose = (e) => {
    e.preventDefault();
    onClose();
  };

  const updateFields = (e) => {
    e.preventDefault();

    let fieldToEdit = doc(db, `/jobs`, updateJobs.ID);

    updateDoc(fieldToEdit, {
      company: updateJobs.company,
      title: updateJobs.title,
      email: updateJobs.email,
      money: updateJobs.money,
      workDuration: updateJobs.workDuration,
      website: updateJobs.webiste,
      location: updateJobs.location,
    })
      .then(() => {
        setIsUpdate(false);
        getUserData();
        onClose();
      })
      .catch((error) => console.log(error));
  };

  const getDatas = (
    id,
    title,
    location,
    money,
    email,
    webiste,
    company,
    workDuration
  ) => {
    setUpdateJobs({
      ID: id,
      title: title,
      location: location,
      money: money,
      email: email,
      webiste: webiste,
      company: company,
      workDuration: workDuration,
    });
    setIsUpdate(true);
  };

  //// ^
  const privateUpdate = (
    id,
    title,
    location,
    money,
    email,
    webiste,
    company,
    workDuration
  ) => {
    if (isUpdate) {
      return (
        <>
          <button onClick={updateFields} className="mx-2">
            Update
          </button>
          <button onClick={() => setIsUpdate(false)}>Close</button>
        </>
      );
    } else {
      return (
        <>
          <button
            className="mx-2"
            onClick={() =>
              getDatas(
                id,
                title,
                location,
                money,
                email,
                webiste,
                company,
                workDuration
              )
            }
          >
            Update job
          </button>
        </>
      );
    }
  };

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const modalContent = show ? (
    <div className="z-20 fixed w-full h-full top-0 left-0 bg-[#000000f7]">
      <div className="z-40 w-[80%] absolute inset-2/4 -translate-y-2/4 -translate-x-2/4 min-h-full min-w-4/5 p-20">
        {poslovi.map((job) => (
          <div className="rounded bg-white overflow-y-auto snap-y h-[80vh]">
            <div className="bg-primary relative p-8">
              <div className="flex text-white items-center">
                <span className="mr-2">
                  <BiData />
                </span>
                <span className="font-normal">Detaljne informacije</span>
              </div>
              <div
                className="absolute top-2 right-4 cursor-pointer text-white"
                onClick={handleClose}
              >
                X
              </div>
            </div>
            <div className=" flex items-center padding-wrapp px-4 my-8">
              <div className="relative grid-rows-1   w-48 h-48 flex flex-col  my-8 sm:justify-center md:flex-wrap">
                <img
                  src={job.photo}
                  className="rounded-full"
                  alt="company photo"
                />
                <div className="mt-4">
                  {isUpdate ? (
                    <>
                      <input
                        onChange={(e) =>
                          setUpdateJobs({
                            ...updateJobs,
                            company: e.target.value,
                          })
                        }
                        type={"text"}
                        placeholder="type text..."
                        defaultValue={updateJobs.company}
                      />
                    </>
                  ) : (
                    <span className="font-medium ml-4">{job.company}</span>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-12 md:grid-cols-1 ">
                <div>
                  <div className="grid grid-cols-1 gap-4 flex flex-col">
                    <div className="flex items-center py-2 px-3">
                      <div>
                        <h3 className="m-0">Zanimanje</h3>
                      </div>
                      {isUpdate ? (
                        <>
                          <input
                            onChange={(e) =>
                              setUpdateJobs({
                                ...updateJobs,
                                title: e.target.value,
                              })
                            }
                            className="text-black px-2"
                            type={"text"}
                            placeholder="type text..."
                            defaultValue={updateJobs.title}
                          />
                        </>
                      ) : (
                        <span className="font-medium ml-4">{job.title}</span>
                      )}
                    </div>
                    <div className="flex items-center py-2 px-3">
                      <div>
                        <h3 className="m-0">Email</h3>
                      </div>
                      {isUpdate ? (
                        <>
                          <input
                            onChange={(e) =>
                              setUpdateJobs({
                                ...updateJobs,
                                email: e.target.value,
                              })
                            }
                            className="text-black px-2"
                            type={"text"}
                            placeholder="type text..."
                            defaultValue={updateJobs.email}
                          />
                        </>
                      ) : (
                        <span className="font-medium ml-4">{job.email}</span>
                      )}
                    </div>
                    <div className="flex items-center  py-2 px-3">
                      <div>
                        <h3 className="m-0">Website</h3>
                      </div>
                      {isUpdate ? (
                        <>
                          <input
                            onChange={(e) =>
                              setUpdateJobs({
                                ...updateJobs,
                                website: e.target.value,
                              })
                            }
                            className="text-black"
                            type={"text"}
                            placeholder="type text..."
                            defaultValue={updateJobs.website}
                          />
                        </>
                      ) : (
                        <span className="font-medium ml-4">{job.website}</span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-center py-2 px-3">
                    <div>
                      <h3 className="m-0">Lokacija</h3>
                    </div>
                    {isUpdate ? (
                      <>
                        <input
                          onChange={(e) =>
                            setUpdateJobs({
                              ...updateJobs,
                              location: e.target.value,
                            })
                          }
                          className="text-black px-2 border-gray-400"
                          type={"text"}
                          placeholder="type text..."
                          defaultValue={updateJobs.location}
                        />
                      </>
                    ) : (
                      <span>{job.location}</span>
                    )}
                  </div>
                  <div className="flex justify-between items-center py-2 px-3">
                    <div>
                      <h3 className="m-0">Satnica </h3>
                    </div>
                    {isUpdate ? (
                      <>
                        <input
                          onChange={(e) =>
                            setUpdateJobs({
                              ...updateJobs,
                              money: e.target.value,
                            })
                          }
                          className="text-black border-2 px-2 border-gray-400"
                          type={"text"}
                          placeholder="type text..."
                          defaultValue={updateJobs.money}
                        />
                      </>
                    ) : (
                      <span>{job.money}</span>
                    )}
                  </div>
                  <div className="flex items-center py-2 px-3">
                    <div>
                      <h3 className="m-0">Radno vrijeme</h3>
                    </div>
                    {isUpdate ? (
                      <>
                        <input
                          onChange={(e) =>
                            setUpdateJobs({
                              ...updateJobs,
                              workDuration: e.target.value,
                            })
                          }
                          className="text-black border-2 px-2 border-gray-400"
                          type={"text"}
                          placeholder="type text..."
                          defaultValue={updateJobs.workDuration}
                        />
                      </>
                    ) : (
                      <span className="mx-2 font-medium">
                        {job.workDuration}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center ml-6 my-8">
              {isUpdating &&
                privateUpdate(
                  job.jobID,
                  job.title,
                  job.location,
                  job.money,
                  job.email,
                  job.website,
                  job.company,
                  job.workDuration
                )}
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
};

export default Modal;
