import React, { useEffect, useState } from "react";

const UploadForm = ({ test }) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const types = ["image/png", "image/jpeg"];

  const changeHandler = (e) => {
    let selectedImg = e.target.files[0];
    if (selectedImg && types.includes(selectedImg.type)) {
      setFile(selectedImg);
      setError("");
    } else {
      setFile(null);
      setError("Please select an image file (png or jpeg)");
    }
  };

  useEffect(() => {
    console.log("THIS IS USE EFFECT!");
  }, [file]);

  return (
    <div>
      <form>
        <input type="file" onChange={changeHandler} />
        <div className="output">
          {error && <div>{error}</div>}
          {file && <div>{file.name}</div>}
        </div>
      </form>
    </div>
  );
};

export default UploadForm;
