import React from 'react';

const setting = () => {
    return (
      <div className="container lg:px-8 sm:p-4">
        <div className="da imam edit dugme i ispravljam vec u inputu, ili da jednostavno popunim nove inpute i posaljem u bazu">
          <h1>Uredi profil</h1>
          <span className="heading3">Ime kompanije:</span>
          <p className="heading3">Ime:</p>
          <p className="heading3">Prezime:</p>
          <p className="heading3">Pol:</p>
          <p className="heading3">Lokacija:</p>
        </div>
        <div>
          <h2>Podešavanja</h2>
          <div>
            <p className="heading3">Promjeni lozinku</p>
            <p className="heading3">Izbriši nalog</p>
            <p className="heading3">Odjavi se</p>
          </div>
        </div>
      </div>
    );
};

export default setting;