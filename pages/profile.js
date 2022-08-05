import React, {  useContext } from "react";
import Navbar from "../components/Navbar";
import ProfileNavbar from "../components/ProfileNavbar";
import Link from "next/link";
import { AuthContext } from "../Context/AuthContext";

export default function Profile() {
  const { currentUser } = useContext(AuthContext);



  return (
    <div className="container lg:px-8 sm:p-4">
     
      <main className="flex justify-between lg:flex-wrap  mt-12">
        <div className="w-1/4 lg:w-full my-8 mr-8 block">
          <div className="h-full  lg:flex lg:items-center sm:block">
            <div>
              <div>Ime kompanije: {currentUser.displayName}</div>

              <div className="w-60 h-60 overflow-hidden flex realtive items-center border border-white my-8 px-4 py-20 lg:py-14">
                <div className="text-center overflow-hidden">
                  <input
                    className=""
                    type="file"
                    id="myImage"
                    name="profile_img"
                    accept="image/png, image/jpg"
                  />
                </div>
              </div>
              <div className="flex items-end order-2">
                <Link href={"/settings"}>
                  <a>
                    <p className="">Podešavanje</p>
                  </a>
                </Link>
              </div>
            </div>
            <div className="w-full lg:mx-4 sm:mx-0">
              <div className="flex flex-col">
                <p className="my-2">Ime: Marko</p>
                <p className="my-2">Prezime: Markovic</p>
              </div>
              <div className="flex flex-col">
                <p className="my-2">Lokacija: Gradiska</p>
                <p className="my-2">Spol: M</p>
              </div>
              <div className="flex flex-col">
                <p className="my-2">Datum registracije: 12.11.2020</p>
                <p className="my-2">ID korisnika: #12432522</p>
              </div>
            </div>
          </div>
        </div>
        <section className="w-3/4 my-4 lg:w-full">
          <div className="h-full border border-white px-6">
            <ProfileNavbar />
          </div>
        </section>
      </main>
    </div>
  );
}
