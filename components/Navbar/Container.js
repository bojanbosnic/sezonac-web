import React, { useState } from "react";
import Interface from "./Interface";

const Container = ({ loggedIn, test }) => {
  const [toggle, setToggle] = useState(false);

  const toggleFun = () => setToggle(!toggle);

  return (
    <Interface
      toggleFun={toggleFun}
      toggleValue={toggle}
      loggedIn={loggedIn}
    />
  );
};

export default Container;
