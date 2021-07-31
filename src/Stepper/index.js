import React from "react";
import "./styles.css";

import MultiStepForm from "./MultiStepForm";

function MultiParent() {
  return (
    <div className="app">
      <div className="wrapper">
        <MultiStepForm />
      </div>
    </div>
  );
}

export default MultiParent;