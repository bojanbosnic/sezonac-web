import React from "react";
import Navbar from "../components/Navbar";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";

export default function Profile() {
  return (
    <div className="container sm:p-4">
      <Navbar />
      <main className="flex justify-between mt-12">
        <sidebar className="w-1/4">
          <div>Ime kompanije</div>
          <div className="border border-white p-12">
            <input
              type="file"
              id="myImage"
              name="profile_img"
              accept="image/png, image/jpg"
            />
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
        </sidebar>
        <section className="w-3/4">
          <div className="h-full border border-white">
            <div className="flex justify-between flex-row px-6">
              <h3>Moji Poslovi</h3>
              <h3>Sačuvani Poslovi</h3>
              <h3>Inbox</h3>
              <button>Objavi Posao</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
