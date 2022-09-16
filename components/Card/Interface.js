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
            <BsBookmark className="text-lg" style={{ color: "red" }} />
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
          {/* <BsBookmark className="text-lg" /> */}
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
              <BsBookmarkFill disabled={isDisabled} className="text-xl" />
            </>
          ) : (
            <BsBookmark className="text-lg" />
          )}
        </button>
      );
    }
  }; ///kraj funckcije

  return (
    <>
      <div className="flex justify-between items-center">
        <div>
          <div className="absolute top-[10%] z-10">{btnsFunciton()}</div>
          <div className="card-title">
            <h2>{title}</h2>
          </div>

          <div className="flex my-4">
            <div>Datum Trajanja</div>
            <div className="ml-8">{duration}</div>
          </div>
          <div className="flex items-center">
            <div
              style={{
                backgroundImage: `url(${photo})`,
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                backgroundSize: "cover",
                marginRight: "1rem",
              }}
            ></div>
            <div className="flex flex-col">
              <div className="subtitle">ime_poslodavca</div>
              <div className="flex my-2 items-center">
                <MdLocationOn />
                <div className="ml-2">{city}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
