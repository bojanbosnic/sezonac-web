import React, { useState, useEffect } from "react";
import { doc, updateDoc } from "firebase/firestore";
import ReactDOM from "react-dom";
import { AiOutlineInfoCircle, AiOutlineCloseSquare } from "react-icons/ai";
import { BiData, BiUserCircle } from "react-icons/bi";
import { MdOutlineDescription } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { db } from "../firebase";

const Modal = ({
  show,
  onClose,
  children,
  jobss,
  getUserData,
  set,
  isUpdating,
}) => {
  const [isBrowser, setIsBrowser] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const [updateJobs, setUpdateJobs] = useState([]);
  const poslovi = [jobss];

  console.log("UPDATED JOBS ID", updateJobs.ID);
  const handleClose = (e) => {
    e.preventDefault();
    onClose();
  };

 

  const updateFields = (e) => {

    e.preventDefault();
    
    let fieldToEdit = doc(db, `/${currentUser.uid}`, updateJobs.ID);
    updateDoc(fieldToEdit, {
      title: updateJobs.title,
      city: updateJobs.city,
      money: updateJobs.money,
      time: updateJobs.time,
      duration: updateJobs.duration,
      info: updateJobs.info,
    })
      .then(() => {
        let filedglobaledit = doc(db, `/GlobalJobs`, updateJobs.ID);
        updateDoc(filedglobaledit, {
          title: updateJobs.title,
          city: updateJobs.city,
          money: updateJobs.money,
          time: updateJobs.time,
          duration: updateJobs.duration,
          info: updateJobs.info,
        });
      })
      .then(() => {
        let filedsavedledit = doc(db, `/SavedJobs${currentUser.uid}`, updateJobs.ID);
        updateDoc(filedsavedledit, {
          title: updateJobs.title,
          city: updateJobs.city,
          money: updateJobs.money,
          time: updateJobs.time,
          duration: updateJobs.duration,
          info: updateJobs.info,
        });
      })

      .then(() => {
        setIsUpdate(false);
        getUserData();
        onClose();
      })
      .catch((error) => console.log(error));
  };

  const getDatas = (id, title, city, money, time, duration, info) => {
    setUpdateJobs({
      ID: id,
      title: title,
      city: city,
      money: money,
      time: time,
      duration: duration,
      info: info,
    });
    setIsUpdate(true);
  };

  const privateUpdate = (id, title, city, money, time, duration, info) => {
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
              getDatas(id, title, city, money, time, duration, info)
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
    <div className="z-20 fixed w-full h-full top-0 left-0 bg-dark">
      <div className="z-40 w-full absolute top-0 left-0 min-h-full min-w-full p-6">
        {poslovi.map((job) => (
          <div className="rounded border bg-primary overflow-y-auto h-[90vh]">
            <div className="px-4 py-2 border border-t-0 border-x-0 border-b">
              ID: {job.id}
            </div>
            <div className="padding-wrapp px-4 my-8">
              <div className="flex justify-between flex-wrap">
                <div>
                  <div className="flex items-center my-2">
                    <span className="mr-2">
                      <BiUserCircle />
                    </span>
                    <span>Objavio</span>
                  </div>
                  <div className="flex">
                    <div className="w-[70%] relative flex items-center  ml-6 my-8 sm:justify-center md:flex-wrap border border-white p-4 ">
                      <div className="w-[50%] border border-white p-6 flex flex-col">
                        <span className="mb-1 text-sm">Choose image</span>
                        <input
                          className="text-xs"
                          type="file"
                          id="myImage"
                          name="profile_img"
                          accept="image/png, image/jpg"
                        />
                      </div>
                      <div className="ml-4">
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
                          <span className="sm:items-center">{job.title}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slika-hotela">
                  <div className="w-[14rem] h-[12rem] my-2 border border-white p-6 flex flex-col lg:ml-6">
                    <span className="mb-1 text-sm">Choose image</span>
                    <input
                      className="text-xs"
                      type="file"
                      id="myImage"
                      name="profile_img"
                      accept="image/png, image/jpg"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center my-2">
                  <span className="mr-2">
                    <AiOutlineInfoCircle />
                  </span>
                  <span>Osnovne informacije</span>
                </div>
                <div className="flex ml-6 my-8">
                  <div
                    className="relative overflow-hidden border border-white w-[20%] lg:w-[50%]"
                    style={{
                      background:
                        "linear-gradient(to bottom, transparent 50%, #00214A 50%)",
                    }}
                  >
                    <div className="text-center py-3">
                      <span>Lokacija</span>
                    </div>
                    <div className="absolute h-full w-full  text-center py-3 font-medium bg-white text-primary">
                      {isUpdate ? (
                        <>
                          <input
                            onChange={(e) =>
                              setUpdateJobs({
                                ...updateJobs,
                                city: e.target.value,
                              })
                            }
                            className="text-black border-2 px-2 border-gray-400"
                            type={"text"}
                            placeholder="type text..."
                            defaultValue={updateJobs.city}
                          />
                        </>
                      ) : (
                        <span>{job.city}</span>
                      )}
                    </div>
                  </div>
                  <div className="border mx-8 border-white w-[20%] lg:w-[50%]">
                    <div className="text-center py-3">
                      <span>Satnica</span>
                    </div>
                    <div className="text-center py-3 font-medium bg-white text-primary">
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
                <div className="ml-6 my-8">
                  <div className="flex justify-between border border-white w-[50%] md:w-full">
                    <div className="text-center py-1">
                      <span className="mx-2">Radno vrijeme</span>
                    </div>
                    <div className="text-center py-1  bg-white text-primary ">
                      {isUpdate ? (
                        <>
                          <input
                            onChange={(e) =>
                              setUpdateJobs({
                                ...updateJobs,
                                time: e.target.value,
                              })
                            }
                            className="text-black border-2 px-2 border-gray-400"
                            type={"text"}
                            placeholder="type text..."
                            defaultValue={updateJobs.time}
                          />
                        </>
                      ) : (
                        <span className="mx-2 font-medium">{job.time}</span>
                      )}
                    </div>
                  </div>
                  <div className="flex justify-between border my-4 border-white w-[50%] md:w-full">
                    <div className="text-center py-1">
                      <span className="mx-2">Rok trajanja</span>
                    </div>
                    <div className="text-center py-1 bg-white text-primary">
                      {isUpdate ? (
                        <>
                          <input
                            onChange={(e) =>
                              setUpdateJobs({
                                ...updateJobs,
                                duration: e.target.value,
                              })
                            }
                            className="text-black border-2 px-2 border-gray-400"
                            type={"text"}
                            placeholder="type text..."
                            defaultValue={updateJobs.duration}
                          />
                        </>
                      ) : (
                        <span className="mx-2 font-medium">{job.duration}</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center my-2">
                  <span className="mr-2">
                    <MdOutlineDescription />
                  </span>
                  <span>Detaljni opis</span>
                </div>
                <div className="flex justify-between items-center ml-6 my-8">
                  <div className="w-[80%] border border-white p-6">
                    {isUpdate ? (
                      <>
                        <input
                          onChange={(e) =>
                            setUpdateJobs({
                              ...updateJobs,
                              info: e.target.value,
                            })
                          }
                          className="text-black border-2 px-2 border-gray-400"
                          type={"text"}
                          placeholder="type text..."
                          defaultValue={updateJobs.info}
                        />
                      </>
                    ) : (
                      <p>{job.info}</p>
                    )}
                  </div>
                  {isUpdating &&
                    privateUpdate(
                      job.id,
                      job.title,
                      job.city,
                      job.money,
                      job.time,
                      job.duration,
                      job.info
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
