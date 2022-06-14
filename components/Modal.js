import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BsFillBookmarkFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineInfoCircle, AiOutlineCloseSquare } from "react-icons/ai";
import { BiData, BiUserCircle } from "react-icons/bi";
import { MdOutlineDescription } from "react-icons/md";

const Modal = ({ show, onClose, children }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleClose = (e) => {
    e.preventDefault();
    onClose();
  };
  console.log("Use effect=>", isBrowser);

  const modalContent = show ? (
    <div className="fixed max-h-screen h-screen overflow-hidden w-full inset-0 flex justify-center items-center  bg-dark z-10">
      <div className="w-5/6 text-white my-36">
        <div className="rounded border bg-primary ">
          <div className="px-4 py-2 border border-t-0 border-x-0 border-b">
            ID: 203810482
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
                <div className="w-[70%] flex items-center ml-6 my-8 md:flex-wrap border border-white p-4 ">
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
                    <span className="">Ime_poslodavca</span>
                  </div>
                </div>
                <div className="flex">
                  <BsFillBookmarkFill className="text-xl" />
                  <HiOutlineMail className="text-2xl" />
                </div>
              </div>
              <div className="slika-hotela">
                <div className="w-[100%] h-[100%] my-2 border border-white p-6 flex flex-col lg:ml-6">
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
                <div className="relative overflow-hidden border border-white w-[20%] lg:w-[50%]">
                  <div className="text-center py-3">
                    <span>Lokacija</span>
                  </div>
                  <div className="absolute h-full w-full  text-center py-3 font-medium bg-white text-primary">
                    <span>Gradiska</span>
                  </div>
                </div>
                <div className="border mx-8 border-white w-[20%] lg:w-[50%]">
                  <div className="text-center py-3">
                    <span>Rok trajanja</span>
                  </div>
                  <div className="text-center py-3 font-medium bg-white text-primary">
                    <span>01.06.22 - 20.09.22</span>
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
                    <span className="mx-2 font-medium">Puno radno vrijeme</span>
                  </div>
                </div>
                <div className="flex justify-between border my-4 border-white w-[50%] md:w-full">
                  <div className="text-center py-1">
                    <span className="mx-2">Satnica</span>
                  </div>
                  <div className="text-center py-1 bg-white text-primary">
                    <span className="mx-2 font-medium">5km</span>
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
              <div className="flex justify-between ml-6 my-8">
                <div className="w-[80%] border border-white p-6">
                  <p>
                    Trenutno tražimo konobara sa ili bez radnog iskustva koji bi
                    radio 8 sati. Za ostale informacije obratite nam se na jedan
                    od kontakata ispod. Kontaktirajte me na sledeci broj 065 678
                    654
                  </p>
                </div>
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
