import React from "react";
// const [isDisabled, setIsDisabled] = useState(false);

export default ({ creatorID, loggedIn }) => {
  const saveJob = async () => {
    if (loggedIn) {
      const jobsRef = doc(db, `users`, `${uid}`);
      await updateDoc(jobsRef, {
        savedJobs: arrayUnion({
          jobsID: id,
          profileid: profileID,
          isSaved: true,
        }),
      });
      setIsDisabled(true);
    } else {
      console.log("Napravi nalog!!");
    }
  };

  return <></>;
};

// export const SaveButton = ({ profileID }) => {
//   console.log("davdimo", profileID);
//   if (!loggedIn) {
//     return (
//       <>
//         <button
//           onClick={(e) => e.stopPropagation()}
//           disabled={isDisabled}
//           className="ml-2"
//         >
//           <TbDeviceFloppy
//             className="text-3xl cursor-not-allowed"
//             style={{ color: "red" }}
//           />
//         </button>
//       </>
//     );
//   } else if (currentUser.uid === profileID) {
//     return (
//       <button
//         onClick={(e) => {
//           e.stopPropagation();
//         }}
//         disabled={isDisabled}
//         className="text-black text-2xl cursor-default"
//       >
//         <RiBankFill />
//       </button>
//     );
//   } else {
//     return (
//       <button
//         onClick={(e) => {
//           e.stopPropagation();
//           saveJob();
//           showToastMessage();
//         }}
//         disabled={isDisabled}
//       >
//         <IoIosSave disabled={isDisabled} className="text-2xl text-black" />
//       </button>
//     );
//   }
// };

// // export default SaveButton;
