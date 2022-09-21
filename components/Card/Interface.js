import React, { useState, useContext } from "react";
import { MdLocationOn } from "react-icons/md";
import { db } from "../../firebase";
import { AuthContext } from "../../Context/AuthContext";
import { setDoc, doc } from "firebase/firestore";
import { BsBookmark, BsBookmarkFill, BsJournalBookmark } from "react-icons/bs";

const Card = (props) => {
  const {
    id,
    title,
    duration,
    city,
    time,
    money,
    info,
    profileID,
    loggedIn,
    photo,
    company,
  } = props;
  const [isDisabled, setIsDisabled] = useState(false);
  const { currentUser } = useContext(AuthContext);

  const savedJobsFun = async () => {
    if (loggedIn) {
      await setDoc(doc(db, `/SavedJobs${currentUser.uid}`, `${id}`), {
        title: title,
        money: money,
        duration: duration,
        time: time,
        city: city,
        info: info,
        // email: currentUser.email,
        photo: photo,
        company: company,
      });
      setIsDisabled(true);
    } else {
      alert("Napravi nalog!!");
    }
  };
  console.log("GLOBAL PHOTO ===>>///", photo);
  const btnsFunciton = () => {
    console.log("first thing!!");
    if (!loggedIn) {
      return (
        <>
          <button
            onClick={(e) => e.stopPropagation()}
            disabled={isDisabled}
            className="ml-2"
          >
            <BsBookmark
              className="text-3xl"
              style={{ color: "red", marginTop: "-3.4rem" }}
            />
          </button>
        </>
      );
    } else if (currentUser.uid === profileID) {
      return (
        <button
          onClick={(e) => {
            e.stopPropagation();
          }}
          disabled={isDisabled}
        >
          Own Job
        </button>
      );
    } else {
      return (
        <button
          onClick={(e) => {
            e.stopPropagation();
            savedJobsFun();
          }}
          disabled={isDisabled}
        >
          {isDisabled ? (
            <>
              <BsBookmarkFill
                disabled={isDisabled}
                className="text-3xl"
                style={{ marginTop: "-3.4rem" }}
              />
            </>
          ) : (
            <BsBookmark className="text-3xl" style={{ marginTop: "-3.4rem" }} />
          )}
        </button>
      );
    }
  }; ///kraj funckcije

  // absolute top-[10%]

  return (
    <>
      <div className="flex justify-between">
        <div
          style={{
            backgroundImage: `url(${photo})`,
            width: "150px",
            height: "150px",
            borderRadius: "10%",
            backgroundSize: "cover",
            marginRight: "1rem",
            marginTop: "-4rem",
          }}
        ></div>
        <div className=" z-10">{btnsFunciton()}</div>
      </div>
      <div className="">
        <div className="flex flex-col">
          <div className="card-title">
            <h3>{title}</h3>
          </div>
          <div className="flex my-2 items-center">
            <MdLocationOn />
            <div className="ml-2">
              <p className="text-[#3c3c3c]">{city}</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <h4 className="font-medium">Datum Potražnje</h4>
          <p className="text-[#3c3c3c]">{duration}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
