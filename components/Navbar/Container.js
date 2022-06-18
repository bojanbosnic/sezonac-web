import React, { useState } from "react";
import Interface from "./Interface";

const Container = ({ loadingPage }) => {
  const [toggle, setToggle] = useState(false);

  const toggleFun = () => setToggle(!toggle);

  return (
    <Interface
      toggleFun={toggleFun}
      toggleValue={toggle}
      loadingPage={loadingPage}
    />
  );
};

export default Container;
