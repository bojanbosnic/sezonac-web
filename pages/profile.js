import React from "react";
import Navbar2 from "../components/Navbar2";
import Card from "../components/Card";
import MyJobs from "../components/MyJobs";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";

export default function Profile() {
  return (
    <div className="container lg:px-8 sm:p-4">
      <Navbar2 />
      <main className="flex justify-between  mt-12">
        <sidebar className="w-1/4 my-8 mr-8 block md:hidden">
          <div className="h-full">
            <div>Ime kompanije</div>
            <div className="border border-white my-8 px-4 py-20 lg:py-14">
              <div className="flex justify-between flex-col px-6">
                <span className="mb-1">Choose image</span>
                <input
                  type="file"
                  id="myImage"
                  name="profile_img"
                  accept="image/png, image/jpg"
                />
              </div>
            </div>
            <Link href={"#"}>
              <a>
                <h3>Postavke</h3>
              </a>
            </Link>
            <div>
              <h3>Ime: Marko</h3>
            </div>
            <div>
              <h3>Prezime: Markovic</h3>
            </div>
            <div>
              <h3>Spol: M</h3>
            </div>
            <div>
              <h3>Lokacija: Gradiska</h3>
            </div>
            <div>
              <h3>Datum registracije: 12.11.2020</h3>
            </div>
            <div>
              <h3>ID korisnika: #12432522</h3>
            </div>
          </div>
        </sidebar>
        <section className="w-3/4 md:w-full">
          <div className="hidden md:block">
            <Link href={`/`}>
              <a>Profil</a>
            </Link>
          </div>
          <div className="h-full border border-white px-6">
            <MyJobs />
          </div>
        </section>
      </main>
    </div>
  );
}
