import React, { useState, useEffect } from "react";
import { doc, updateDoc } from "firebase/firestore";
import Image from "next/image";
import userIcon from "../assets/ilustrations/2.jpg";
import ReactDOM from "react-dom";
import { BiData } from "react-icons/bi";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import {
  MdBusinessCenter,
  MdEmail,
  MdOutlineAccessTimeFilled,
} from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";
import { FaGlobeAmericas } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { db } from "../firebase";

const Modal = ({ show, onClose, jobsForModal, getUserData, isUpdating }) => {
  const [isBrowser, setIsBrowser] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const [updateJobs, setUpdateJobs] = useState([]);
  const poslovi = [jobsForModal];
  console.log("error resolved KEY", poslovi);

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
      website: updateJobs.website,
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
    website,
    company,
    workDuration
  ) => {
    setUpdateJobs({
      ID: id,
      title: title,
      location: location,
      money: money,
      email: email,
      website: website,
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
    website,
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
                website,
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const modalContent = show ? (
    <div className="z-20 fixed w-full h-full top-0 left-0 bg-[#000000f7]">
      <div className="z-40 w-[80%] absolute inset-2/4 -translate-y-2/4 -translate-x-2/4 min-h-full p-4">
        {poslovi.map((job) => (
          <div
            key={job.jobID}
            className="rounded bg-secondary overflow-y-auto snap-y h-[80vh]"
          >
            <div className="bg-primary relative p-8">
              <div className="flex text-white items-center">
                <span className="mr-2">
                  <BiData />
                </span>
                <span className="font-normal">Detaljne informacije</span>
              </div>
              <div
                className="absolute top-2 right-8 cursor-pointer text-white"
                onClick={handleClose}
              >
                X
              </div>
            </div>
            <div className="flex items-center justify-between flex-wrap lg:justify-center p-8 my-8">
              <div className="relative flex flex-col justify-center items-center my-8 sm:justify-center">
                <Image
                  src={job.photo === null ? userIcon.src : job.photo}
                  width={500}
                  height={500}
                  className="rounded-full w-48 h-48"
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
              <div className="flex justify-between lg:flex-wrap lg:justify-center">
                <div className="mr-28 lg:mr-0">
                  <div className="flex items-center py-2 px-3">
                    <MdBusinessCenter className="text-primary text-2xl" />
                    <div className="ml-4">
                      <h4 className="m-0 flex items-center text-green">
                        Zanimanje
                      </h4>
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
                        <h3 className="font-medium m-0"> {job.title}</h3>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center py-2 px-3">
                    <MdEmail className="text-primary text-2xl" />
                    <div className="ml-4">
                      <h4 className="m-0  text-green">Email</h4>
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
                        <h3 className="font-medium m-0">{job.email}</h3>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center  py-2 px-3">
                    <FaGlobeAmericas className="text-primary text-2xl" />
                    <div className="ml-4">
                      <h4 className="m-0 text-green">Website</h4>
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
                        <h4 className="font-medium m-0">{job.website}</h4>
                      )}
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center py-2 px-3">
                    <HiLocationMarker className="text-primary text-2xl" />
                    <div className="ml-4">
                      <h4 className="m-0 text-green">Lokacija</h4>
                      {isUpdate ? (
                        <>
                          <input
                            onChange={(e) =>
                              setUpdateJobs({
                                ...updateJobs,
                                location: e.target.value,
                              })
                            }
                            className="text-black"
                            type={"text"}
                            placeholder="type text..."
                            defaultValue={updateJobs.location}
                          />
                        </>
                      ) : (
                        <h4 className="m-0">{job.location}</h4>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center py-2 px-3">
                    <RiMoneyDollarCircleFill className="text-primary text-2xl" />
                    <div className="ml-4">
                      <h4 className="m-0 font-medium">Satnica </h4>
                      {isUpdate ? (
                        <>
                          <input
                            onChange={(e) =>
                              setUpdateJobs({
                                ...updateJobs,
                                money: e.target.value,
                              })
                            }
                            type={"text"}
                            placeholder="type text..."
                            defaultValue={updateJobs.money}
                          />
                        </>
                      ) : (
                        <h3 className="m-0 font-medium">{job.money} €</h3>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center py-2 px-3">
                    <MdOutlineAccessTimeFilled className="text-primary text-2xl" />
                    <div className="ml-4">
                      <h4 className="m-0 font-medium">Radno vrijeme</h4>
                      {isUpdate ? (
                        <>
                          <input
                            onChange={(e) =>
                              setUpdateJobs({
                                ...updateJobs,
                                workDuration: e.target.value,
                              })
                            }
                            type={"text"}
                            placeholder="type text..."
                            defaultValue={updateJobs.workDuration}
                          />
                        </>
                      ) : (
                        <h3 className="m-0 font-medium">{job.workDuration} hr</h3>
                      )}
                    </div>
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
