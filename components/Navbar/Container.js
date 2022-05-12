import React, { useState } from "react";
import Interface from "./Interface";
const Container = () => {
  const [toggle, setToggle] = useState(false);
  const toggleFun=()=>{
      setToggle(!toggle)
  }
  return (
    <div>
      <Interface toggleFun={toggleFun} toggleValue={toggle} />
    </div>
  );
};

export default Container;
