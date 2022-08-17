import React, { useEffect, useState } from "react";
import { BsBookmark, BsBookmarkFill, BsJournalBookmark } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { db } from "../../firebase";
import { setDoc, doc } from "firebase/firestore";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";

const Card = (props) => {
  const { title, money, duration, time, city, info, id, loggedIn } = props;

  const [isDisabled, setIsDisabled] = useState(false);
  const { currentUser } = useContext(AuthContext);

  console.log("LOGED IN =>>", loggedIn);

  const savedJobsFun = async () => {
    if (loggedIn) {
      const proba = await setDoc(
        doc(db, `/SavedJobs${currentUser.uid}`, `${id}`),
        {
          title: title,
          money: money,
          duration: duration,
          time: time,
          city: city,
          info: info,
        }
      );
      console.log("////proba", proba)
      setIsDisabled(true);

    } else {
          console.log("==PROBA==", proba);

      alert("Napravi nalog!!");
    }
  };
  useEffect(() => {}, []);

  return (
    <>
      <div className="card my-12">
        <div className="flex items-center absolute right-[3%] top-[5%]">
          <button onClick={savedJobsFun} disabled={isDisabled} className="ml-2">
            {isDisabled ? (
              <BsBookmarkFill className="text-xl" />
            ) : (
              <BsBookmark
                className="text-lg"
                style={{ color: `${!loggedIn && "red"}` }}
              />
            )}
          </button>
        </div>
        <div className="flex justify-between items-center">
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
      </div>
    </>
  );
};

export default Card;
