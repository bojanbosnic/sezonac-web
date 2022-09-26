import React from "react";

const Interface = () => {
  return (
    <div>
      <form>
        <label>Naslov Posla</label>
        <input className="input_field_login" placeholder="Barmen" />
        <label>Lokacija</label>
        <input
          className="input_field_login"
          placeholder="Beograd, Knjeginje Ljubice 5 11000"
        />
        <label>Satnica</label>
        <input
          className="input_field_login"
          placeholder="Beograd, Knjeginje Ljubice 5 11000"
        />
        <label>Radno Vrijeme</label>
        <input
          className="input_field_login"
          placeholder="Beograd, Knjeginje Ljubice 5 11000"
        />
        <label>Website</label>
        <input
          className="input_field_login"
          placeholder="www.hotelexamle.com"
        />
        <label>Email Adresa</label>
        <input
          className="input_field_login"
          placeholder="hotel.example@example.com"
        />
      </form>
    </div>
  );
};

export default Interface;
