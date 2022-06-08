import React from "react";

const Interface = ({ setPage, myPages }) => {
  return (
    <div>
      <nav className="flex justify-between flex-row  text-white">
        <ul className="flex">
          <li className="text-white mr-4 cursor-pointer ">
            <h3 className="mb-0" onClick={() => setPage("page1")}>Moji poslovi</h3>
          </li>
          <li className="text-white mr-4 cursor-pointer">
            <h3 className="mb-0" onClick={() => setPage("page2")}>Sačuvani Poslovi</h3>
          </li>
          <li className="text-white mr-4 cursor-pointer">
            <h3 className="mb-0" onClick={() => setPage("page3")}>Inbox</h3>
          </li>
          <li className="text-white mr-4 cursor-pointer">
            <h3 className="mb-0">Objavi Posao</h3>
          </li>
        </ul>
      </nav>
      <div>{myPages()}</div>
    </div>
  );
};

export default Interface;
