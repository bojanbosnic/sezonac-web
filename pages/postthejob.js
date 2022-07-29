import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

const Interface = () => {

  return (
    <div className="container lg:px-8 sm:p-4">
    
      <main className="flex flex-col">
        <h1>Registrujte vaš posao</h1>
        <h2>
          Upišite naslov Vašeg posla, to je naslov koji će korisnici vidjeti
          pirlikom pretrage
        </h2>
        <input
          className="input_field_registration"
          type="text"
          placeholder="Konobar"
        />
        <div className="my-8">
          <h2>Lokacija radnog mjesta</h2>
          Grad - mjesto{" "}
          <input
            className="input_field_registration"
            type="text"
            placeholder="Beograd"
          />
        </div>
        <h2>Detaljne informacije</h2>
        <div className="mb-8">
          <span>Opis posla</span>
          <input
            className="input_field_registration"
            type="text"
            placeholder="Opis posla"
          />
        </div>
        <div className="my-8">
          <span>Radno vrijeme</span>
          <input
            className="input_field_registration"
            type="text"
            placeholder="Puno radno vrijeme"
          />
        </div>
        <div className="my-8">
          <span>Satnica</span>
          <input
            className="input_field_registration"
            type="text"
            placeholder="5 KM"
          />
        </div>
        <div className="my-8">
          <span>Datum trajanja</span>
          <input
            className="input_field_registration"
            type="text"
            placeholder="01.01.22-02.02.22"
          />
        </div>
        <button className="w-full border bg-secondary border-secondary rounded-lg py-5 px-6 mb-8">
          Zavrsi Objavu
        </button>
      </main>
    </div>
  );
};

export default Interface;
