import React, { useState } from "react";

const Toggle = ({ children, text }) => {
  const [toggleStatus, setToggleStatus] = useState(false);

  const invertToggleStatus = () => setToggleStatus(!toggleStatus);

  return (
    <>
      <button
        className="btn btn--medium btn--action btn--uppercase btn--centered"
        onClick={invertToggleStatus}
      >
        {text}
      </button>
      {toggleStatus === true ? children : null}
    </>
  );
};

export default Toggle;
