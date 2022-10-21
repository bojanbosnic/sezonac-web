import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import { MdPhoneAndroid, MdAlternateEmail } from "react-icons/md";
import { HiLocationMarker, HiMail } from "react-icons/hi";
import { FaUserAlt } from "react-icons/fa";
import { TbMessage2 } from "react-icons/tb";
import emailjs from "@emailjs/browser";

const token =
  typeof window !== "undefined" ? localStorage.getItem("Token") : null;

const ContactUs = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zi6shac",
        "template_umeqp5l",
        form.current,
        "xFHtG-tU0bU8-q9uf"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="container">
      <Navbar loggedIn={!!token} />
      <div className="mt-20 md:my-10">
        <h1 className="md:p-4">Kontaktirajte Nas</h1>
        <h2 className="font-normal">
          Kontaktirajte nas ispod ili nam pošaljite poruku u formi desno mi ćemo
          Vam se javiti čim budemo mogli.
        </h2>
        <main className="flex justify-between items-center  md:flex-wrap">
          <section className=" w-[50%] lg:w-full">
            <address>
              {/* <div className="flex flex-col lg:flex-row flex-wrap shadow-xs shadow-[#3898e28d]  justify-center items-center rounded-3xl p-16 md:p-4"> */}
              <div className="mr-8 my-14">
                <div className="border-4 border-[#f2f2f2] hover:border-inherit ease-in-out duration-300 hover:-translate-y-2 my-6 py-6 px-12 flex relative  justify-between rounded-xl">
                  <div className="bg-secondary rounded py-4 px-3 absolute left-[45px] top-[-20px]">
                    <MdPhoneAndroid
                      fontSize="2.5rem"
                      className="text-[#00ca99]"
                    />
                  </div>
                  <div className="md:text-center ml-24">
                    <h3 className="my-2">Telefon</h3>
                    <a
                      href="tel:+387 555 333"
                      className="text-[#00ca99] font-normal"
                    >
                      +387 555 333
                    </a>
                  </div>
                </div>
              </div>
              <div className="mr-8 my-14">
                <div className="border-4 border-[#f2f2f2] hover:border-inherit ease-in-out duration-300 hover:-translate-y-2 my-6 py-6 px-14 flex relative  justify-between rounded-xl">
                  <div className="bg-secondary rounded py-4 px-3 absolute left-[45px] top-[-20px]">
                    <HiMail fontSize="2.5rem" className="text-[#00ca99]" />
                  </div>
                  <div className="md:text-center ml-24  ">
                    <h3 className="my-2">Tehnička Podrška</h3>
                    <a
                      href="mailto:hello@gmail.com"
                      className="text-[#00ca99] font-normal"
                    >
                      hello@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="mr-8 my-14">
                <div className="border-4 border-[#f2f2f2] hover:border-inherit ease-in-out duration-300 hover:-translate-y-2 my-6 py-6 px-10 flex relative  justify-between rounded-xl">
                  <div className="bg-secondary rounded py-4 px-3 absolute left-[45px] top-[-20px]">
                    <HiLocationMarker
                      fontSize="2.5rem"
                      className="text-[#00ca99] font-normal"
                    />
                  </div>
                  <div className="md:text-center ml-24">
                    <h3 className="my-2">Lokacija</h3>
                    <p className="text-[#00ca99]">Ulica Ive Andrića BB</p>
                  </div>
                </div>
              </div>
            </address>
          </section>
          <section className="w-[50%]  lg:w-full">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="z-10 flex flex-col outline-0 py-15  bg-white text-black rounded-lg md:mt-12"
            >
              <div className="my-6">
                <label htmlFor="name_id" className="font-medium text-black">
                  Ime
                </label>
                <div className="relative">
                  <input
                    id="name_id"
                    name="user_name"
                    type="text"
                    className="input_field_login relative pl-10 z-10"
                    placeholder="Marko..."
                  />
                  <label htmlFor="name_id">
                    <FaUserAlt className="absolute z-20 top-[27px] text-primary left-[14px]" />
                  </label>
                </div>
              </div>
              <div className="my-6">
                <label htmlFor="email_id" className="font-medium text-black">
                  Email
                </label>
                <div className="relative">
                  <input
                    id="email_id"
                    type="email"
                    name="user_email"
                    className="input_field_login relative pl-10 z-10"
                    placeholder="ime.prezime@example.com"
                  />
                  <label htmlFor="email_id">
                    <MdAlternateEmail className="absolute z-20 top-[27px] text-primary left-[14px]" />
                  </label>
                </div>
              </div>
              <div>
                <label htmlFor="msg_id" className="font-medium text-black">
                  Poruka
                </label>
                <div className="relative">
                  <textarea
                    id="msg_id"
                    name="user_message"
                    className="input_field_login relative pl-10 z-10"
                    placeholder="Lorem ipsun dolor sit..."
                  />
                  <label htmlFor="msg_id">
                    <TbMessage2 className="absolute z-20 top-[27px] text-primary left-[14px]" />
                  </label>
                </div>
              </div>
              <button type="submit" className="pointer submit_btn_form">
                Pošalji poruku
              </button>
            </form>
          </section>
        </main>
      </div>
    </div>
  );
};

export default ContactUs;
