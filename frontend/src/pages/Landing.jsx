import React, { useState } from "react";
import Connexion from "../components/Connexion";
import Inscription from "../components/Inscription";

function Landing() {
  const [toggleForm, setToggleForm] = useState(false);

  const handleToggle = () => {
    setToggleForm(!toggleForm);
  };
  return (
    <div className="flex-grow flex flex-col  justify-evenly items-center">
      {toggleForm ? (
        <Inscription toggle={handleToggle} />
      ) : (
        <Connexion toggle={handleToggle} />
      )}
      {!toggleForm && (
        <>
          <img
            src="/src/assets/waitress.svg"
            alt="logo la taverne"
            className="lg:hidden h-52"
          />
          <img
            src="/src/assets/waitressBig.svg"
            alt="logo la taverne"
            className="lg:flex hidden h-80"
          />
        </>
      )}
    </div>
  );
}

export default Landing;
