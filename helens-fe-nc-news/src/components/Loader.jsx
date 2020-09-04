import React from "react";
import { Eclipse } from "react-loading-io";

const Loader = () => {
  return (
    <div className="loader">
      <Eclipse size="{100}" />
      <div className="loader-heading">
        <h3>Loading...</h3>
      </div>
    </div>
  );
};

export default Loader;
