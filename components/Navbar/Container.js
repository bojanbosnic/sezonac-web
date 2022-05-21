import React, { useState } from "react";
import Interface from "./Interface";

const Container = () => {
  const [toggle, setToggle] = useState(false);

  const toggleFun = () => setToggle(!toggle);

  return <Interface toggleFun={toggleFun} toggleValue={toggle} />;
};

export default Container;
