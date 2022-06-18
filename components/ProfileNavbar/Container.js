import React, { useState } from "react";
import Interface from "./Interface";
import Page1 from "../PrivateJobs";
import Page2 from "../SavedJobs";
import Page3 from "../Inbox";

const Container = () => {
  const [page, setPage] = useState("page1");
  const myPages = () => {
    if (page === "page1") {
      return <Page1/>;
    } else if (page === "page2") {
      return <Page2/>;
    } else if (page === "page3") {
      return <Page3/>;
    }
  };
  return (
    <div>
      <Interface page={page} setPage={setPage} myPages={myPages} />
    </div>
  );
};

export default Container;
