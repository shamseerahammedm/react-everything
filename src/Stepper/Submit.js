import React from "react";
const Submit = ({ navigation, setActiveStep }) => {
  const { go } = navigation;
  return (
    <div>
      <h3>Thank you for submitting. We will be in touch</h3>
      New Form -> <button onClick={() => {
        go(0);
        setActiveStep(0)
      }}>New</button>
    </div>
  );
};

export default Submit;
