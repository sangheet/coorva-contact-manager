import React from "react";

import Logo from "../assets/img/logo.svg";

function MainLogo() {
  return (
    <div>
      <img className="logo" src={Logo} alt="Coorva Contact manager" />
    </div>
  );
}

export default MainLogo;
