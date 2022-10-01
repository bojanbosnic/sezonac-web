import React, { useState, useContext } from "react";
import { MdLocationOn } from "react-icons/md";
import { db } from "../../firebase";
import { AuthContext } from "../../Context/AuthContext";
import { setDoc, doc, updateDoc, arrayUnion } from "firebase/firestore";
import { BsBookmark, BsBookmarkFill, BsJournalBookmark } from "react-icons/bs";

const Card = (props) => {
  const { id, title, duration, city, profileID, loggedIn, photo } = props;
  const [isDisabled, setIsDisabled] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const { uid } = currentUser;

  console.log("vece======>>", id);

  const saveJob = async () => {
    if (loggedIn) {
      const jobsRef = doc(db, `users`, `${uid}`);
      await updateDoc(jobsRef, {
        savedJobs: arrayUnion({
          jobsID: id,
          profileid: profileID,
        }),
      });
      setIsDisabled(true);
    } else {
      alert("Napravi nalog!!");
    }
  };
  const btnsFunciton = () => {
    if (!loggedIn) {
      return (
        <>
          <button
            onClick={(e) => e.stopPropagation()}
            disabled={isDisabled}
            className="ml-2"
          >
            <BsBookmark className="text-3xl" style={{ color: "red" }} />
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
          style={{ color: "black" }}
        >
          Own Job
        </button>
      );
    } else {
      return (
        <button
          onClick={(e) => {
            e.stopPropagation();
            saveJob();
          }}
          disabled={isDisabled}
        >
          {isDisabled ? (
            <>
              <BsBookmarkFill
                disabled={isDisabled}
                className="text-3xl"
                style={{ color: "#1967d2" }}
              />
            </>
          ) : (
            <BsBookmark className="text-3xl" style={{ color: "#1967d2" }} />
          )}
        </button>
      );
    }
  };

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
            <MdLocationOn className="text-primary" />
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
