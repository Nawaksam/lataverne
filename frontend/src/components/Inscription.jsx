import React from "react";

function Inscription({ toggle }) {
  const handleSubmit = (evt) => {
    evt.preventDefault();

    console.log("submit");
  };

  return (
    <div className="bg-secondary lg:w-7/12 w-10/12 p-8 rounded-xl shadow-lg">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 text-acent text-2xl text-accent font-lobster2"
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="nickname">Pseudonyme :</label>
          <input
            type="text"
            id="nickname"
            name="nickname"
            className="input input-accent  shadow-md"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email :</label>
          <input
            type="text"
            id="email"
            name="email"
            className="input input-accent  shadow-md"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password">Mot de passe :</label>
          <input
            type="password"
            id="password"
            name="password"
            className="input input-accent  shadow-md"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="passwordcheck">Vérification :</label>
          <input
            type="password"
            id="passwordcheck"
            name="passwordcheck"
            className="input input-accent  shadow-md"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="invitation">Code d'invitation :</label>
          <input
            type="text"
            id="invitation"
            name="invitation"
            className="input input-accent  shadow-md"
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary normal-case text-2xl shadow-lg"
        >
          Inscription
        </button>
      </form>
      <div className="w-full flex justify-around items-center mt-6">
        <p>Déjà membre?</p>
        <button
          type="button"
          onClick={toggle}
          className="btn btn-sm btn-accent"
        >
          se connecter
        </button>
      </div>
    </div>
  );
}

export default Inscription;
