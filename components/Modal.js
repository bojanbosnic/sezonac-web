import React, { useState, useEffect } from "react";
import { doc, updateDoc } from "firebase/firestore";
import Image from "next/image";
import ReactDOM from "react-dom";
import { AiOutlineInfoCircle, AiOutlineCloseSquare } from "react-icons/ai";
import { BiData, BiUserCircle } from "react-icons/bi";
import { MdOutlineDescription } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { db } from "../firebase";

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
    <div className="z-20 fixed w-full h-full top-0 left-0 bg-black">
      <div className="z-40 w-full absolute top-0 left-0 min-h-full min-w-full p-6">
        {poslovi.map((job) => (
          <div className="rounded border bg-white overflow-y-auto snap-y h-[90vh]">
            <div className="padding-wrapp px-4 my-8">
              <div className="flex justify-between flex-wrap">
                <div>
                  <div className="flex items-center my-2">
                    <span className="mr-2">
                      <AiOutlineInfoCircle />
                    </span>
                    <span>Osnovne informacije</span>
                  </div>
                  <div className="flex flex-col">
                    <div className="relative w-48 h-48 flex items-center  my-8 sm:justify-center md:flex-wrap p-4 ">
                      <img src={job.photo} alt="company photo" />
                    </div>
                    <div className="flex items-center">
                      <h3 className="m-0">Kompanija:</h3>
                      {isUpdate ? (
                        <>
                          <input
                            onChange={(e) =>
                              setUpdateJobs({
                                ...updateJobs,
                                company: e.target.value,
                              })
                            }
                            className="text-black border-2 px-2 border-gray-400"
                            type={"text"}
                            placeholder="type text..."
                            defaultValue={updateJobs.company}
                          />
                        </>
                      ) : (
                        <span className="font-medium ml-4">{job.company}</span>
                      )}
                    </div>
                    <div className="flex items-center">
                      <h3 className="m-0">Zanimanje:</h3>
                      {isUpdate ? (
                        <>
                          <input
                            onChange={(e) =>
                              setUpdateJobs({
                                ...updateJobs,
                                title: e.target.value,
                              })
                            }
                            className="text-black border-2 px-2 border-gray-400"
                            type={"text"}
                            placeholder="type text..."
                            defaultValue={updateJobs.title}
                          />
                        </>
                      ) : (
                        <span className="font-medium ml-4">{job.title}</span>
                      )}
                    </div>
                    <div className="flex items-center">
                      <h3 className="m-0">Email:</h3>
                      {isUpdate ? (
                        <>
                          <input
                            onChange={(e) =>
                              setUpdateJobs({
                                ...updateJobs,
                                email: e.target.value,
                              })
                            }
                            className="text-black border-2 px-2 border-gray-400"
                            type={"text"}
                            placeholder="type text..."
                            defaultValue={updateJobs.email}
                          />
                        </>
                      ) : (
                        <span className="font-medium ml-4">{job.email}</span>
                      )}
                    </div>
                    <div className="flex items-center">
                      <h3 className="m-0">Website:</h3>
                      {isUpdate ? (
                        <>
                          <input
                            onChange={(e) =>
                              setUpdateJobs({
                                ...updateJobs,
                                webiste: e.target.value,
                              })
                            }
                            className="text-black border-2 px-2 border-gray-400"
                            type={"text"}
                            placeholder="type text..."
                            defaultValue={updateJobs.webiste}
                          />
                        </>
                      ) : (
                        <span className="font-medium ml-4">{job.webiste}</span>
                      )}
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center my-2">
                    <span className="mr-2">
                      <BiData />
                    </span>
                    <span>Detaljne informacije</span>
                  </div>
                  <div className="flex items-center">
                    <h3>Lokacija:</h3>
                    {isUpdate ? (
                      <>
                        <input
                          onChange={(e) =>
                            setUpdateJobs({
                              ...updateJobs,
                              location: e.target.value,
                            })
                          }
                          className="text-black border-2 px-2 border-gray-400"
                          type={"text"}
                          placeholder="type text..."
                          defaultValue={updateJobs.location}
                        />
                      </>
                    ) : (
                      <span>{job.location}</span>
                    )}
                  </div>
                  <div className="flex items-center">
                    <h3 className="m-0">Satnica: </h3>
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
                  <div className="flex items-center ">
                    <h3 className="m-0">Radno vrijeme: </h3>
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
              <div>
                <div className="flex justify-between items-center ml-6 my-8">
                  {isUpdating &&
                    privateUpdate(
                      job.jobID,
                      job.title,
                      job.location,
                      job.money,
                      job.email,
                      job.webiste,
                      job.company,
                      job.workDuration
                    )}
                  <div
                    className="flex items-end cursor-pointer"
                    onClick={handleClose}
                  >
                    <AiOutlineCloseSquare fontSize="4rem" />
                  </div>
                </div>
              </div>
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
