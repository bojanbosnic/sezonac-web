import React from "react";
import Navbar from "../components/Navbar";
import {
  BsTelephoneFill,
  BsFillEnvelopeFill,
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsFillPersonFill,
} from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { HiOutlineMail } from "react-icons/hi";
import { BiMessageRounded } from "react-icons/bi";

export default function ContactUs() {
  return (
    <div className="container">
      <Navbar />
      <main className="flex flex-wrap justify-between items-center my-20 md:my-10">
        <section className="w-[calc(50%-40px)] md:w-full">
          <h1>Kontaktiraj Nas</h1>
          <h2>Popuni formu i naš tim će ti odgovoriti u roku 24 sata.</h2>
          <address>
            <div className="my-16">
              <div className="flex items-center my-6">
                <BsTelephoneFill color="#d96a6a" fontSize="2rem" />
                <p className="text-white ml-8">+387 555 333</p>
              </div>
              <div className="flex items-center my-6">
                <BsFillEnvelopeFill color="#d96a6a" fontSize="2rem" />
                <a href="mailto:hello@gmail.com" className="text-white ml-8">
                  hello@gmail.com
                </a>
              </div>
              <div className="flex items-center my-6">
                <GoLocation color="#d96a6a" fontSize="2rem" />
                <p className="text-white ml-8">Ulica Ive Andrića BB</p>
              </div>
            </div>
            <div className="flex mt-12">
              <a
                href="https://www.facebook.com"
                className="text-white"
                target={`_blank`}
              >
                <BsFacebook fontSize="2rem" color="#fff" />
              </a>
              <a
                href="https://www.instagram.com"
                className="text-white ml-8"
                target={`_blank`}
              >
                <BsInstagram fontSize="2rem" color="#fff" />
              </a>
              <a
                href="https://www.twitter.com"
                className="text-white ml-8"
                target={`_blank`}
              >
                <BsTwitter fontSize="2rem" color="#fff" />
              </a>
            </div>
          </address>
        </section>
        <section className="w-[calc(50%-40px)] md:w-full">
          <form className="flex flex-col outline-0 py-20 px-12 bg-white text-black rounded-lg md:mt-12">
            <div>
              <label htmlFor="name_id">Ime</label>
              <div className="relative">
                <BsFillPersonFill
                  className="absolute my-6 mx-4"
                  color="#707070"
                />
                <input
                  id="name_id"
                  type="text"
                  className="input_filed_contact my-2"
                  placeholder="Ime"
                />
              </div>
            </div>
            <div className="my-6">
              <label htmlFor="email_id">Email</label>
              <div className="relative">
                <HiOutlineMail className="absolute my-6 mx-4" color="#707070" />
                <input
                  id="email_id"
                  type="text"
                  className="input_filed_contact my-2"
                  placeholder="Email"
                />
              </div>
            </div>
            <div>
              <label htmlFor="msg_id">Poruka</label>
              <div className="relative">
                <BiMessageRounded
                  className="absolute my-6 mx-4"
                  color="#707070"
                />
                <input
                  id="msg_id"
                  type="text"
                  className="input_filed_contact my-2"
                  placeholder="Poruka"
                />
              </div>
            </div>
            <button className="py-4 px-8 border-none mt-12 bg-secondary text-white pointer rounded-lg hover:bg-primary">
              Pošalji poruku
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}
