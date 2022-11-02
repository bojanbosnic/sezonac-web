import React from "react";
import styles from "./spinner.module.css";
const LoadingSpinner = () => {
  return (
    <div className={styles.ldsring}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default LoadingSpinner;
