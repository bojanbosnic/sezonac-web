import React, { useState, useContext } from "react";
import { MdLocationOn } from "react-icons/md";
import { db } from "../../firebase";
import { AuthContext } from "../../Context/AuthContext";
import { setDoc, doc } from "firebase/firestore";
import { BsBookmark, BsBookmarkFill, BsJournalBookmark } from "react-icons/bs";

const Card = (props) => {
  const { id, title, duration, city, time, money, info, profileID, loggedIn } =
    props;
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
      });
      setIsDisabled(true);
    } else {
      alert("Napravi nalog!!");
    }
  };

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
      return null;
    } else if (currentUser.uid === profileID) {
    return(
        <button
        onClick={(e) => {
          e.stopPropagation();
        }}
        disabled={isDisabled}
        className="ml-2"
      >
        Own Job
        {/* <BsBookmark className="text-lg" /> */}
      </button>
    )
    return null;

    } else {
     return(
       <button
        onClick={(e) => {
          e.stopPropagation(); savedJobsFun();
        }}
        disabled={isDisabled}
        className="ml-2"
      >
        {isDisabled ? (
          <>
            <BsBookmarkFill disabled={isDisabled} className="text-xl" />
          </>
        ) : (
          <BsBookmark className="text-lg" />
        )}
      </button>
     )
    }
  }; ///kraj funckcije

  return (
    <>
      <div className="flex justify-between items-center">
        <div className="absolute top-[60%] z-10">{btnsFunciton()}</div>
        <div>
          <img src="" alt="Profile picture" />
          <div className="subtitle">ime_poslodavca</div>
        </div>
        <div>
          <div className="card-title">
            <h2>{title}</h2>
          </div>
          <div className="flex  my-4 items-center">
            <MdLocationOn />
            <div className="ml-2">{city}</div>
          </div>
          <div className="flex my-4">
            <div>datum trajanja</div>
            <div className="ml-8">{duration}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
