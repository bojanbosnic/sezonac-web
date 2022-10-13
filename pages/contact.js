import React from "react";
import Navbar from "../components/Navbar";
import { MdPhoneAndroid } from "react-icons/md";
import { HiLocationMarker, HiMail } from "react-icons/hi";

const token =
  typeof window !== "undefined" ? localStorage.getItem("Token") : null;

export default function ContactUs() {
  return (
    <div className="container">
      <Navbar loggedIn={!!token} />
      <main className="grid grid-cols-2 gap-4 my-20 md:my-10">
        <section className=" lg:w-full">
          <h1>Pošaljite Nam Poruku</h1>
          <h2 className="font-normal">
            Slobodno nas kontaktirajte i mi ćemo Vam se javiti čim budemo mogli.
          </h2>
          <form className="z-10 flex flex-col outline-0 py-15  bg-white text-black rounded-lg md:mt-12">
            <div className="my-6">
              <label htmlFor="name_id" className="font-medium text-black">
                Ime
              </label>
              <input
                id="name_id"
                type="text"
                className="input_field_login"
                placeholder="Marko..."
              />
            </div>
            <div className="my-6">
              <label htmlFor="email_id" className="font-medium text-black">
                Email
              </label>
              <input
                id="email_id"
                type="text"
                className="input_field_login"
                placeholder="ime.prezime@example.com"
              />
            </div>
            <div>
              <label htmlFor="msg_id" className="font-medium text-black">
                Poruka
              </label>
              <textarea
                id="msg_id"
                className="input_field_login"
                name="comment"
                form="usrform"
                placeholder="Lorem ipsun dolor sit..."
              />
            </div>
            <button className="pointer submit_btn_form">Pošalji poruku</button>
          </form>
        </section>
        <section className="lg:w-full">
          <address>
            {/* <div className="flex flex-col lg:flex-row flex-wrap shadow-xs shadow-[#3898e28d]  justify-center items-center rounded-3xl p-16 md:p-4"> */}
              <div className="flex items-center my-6 flex-wrap justify-center">
                <div className="bg-secondary my-6 p-6 flex items-center justify-center rounded-xl">
                  <MdPhoneAndroid className="text-primary"  />
                
                <div className="md:text-center">
                  <h3 className="my-2">Kontaktiraj Nas</h3>
                  <p>+387 555 333</p>
                </div>
                </div>
              </div>
              <div className="flex items-center my-6 flex-wrap justify-center">
                  <HiMail className="text-primary"/>
                
                <div className="md:text-center">
                  <h3 className="my-2">Tehnička Podrška</h3>
                  <a href="mailto:hello@gmail.com">hello@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center my-6 flex-wrap justify-center">
                <div className="bg-secondary my-6 p-6 flex items-center justify-center rounded-xl">
                  <HiLocationMarker className="text-primary"  />
                </div>
                <div className="md:text-center">
                  <h3 className="my-2">Posjeti nas</h3>
                  <p>Ulica Ive Andrića BB</p>
                </div>
              </div>
          </address>
        </section>
      </main>
    </div>
  );
}
