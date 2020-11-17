import React, { useState } from "react";
import Button from "react-bootstrap/Button";

export const ToggleBtn = ({ children, text }) => {
  const [toggle, setToggle] = useState(false);

  const flipToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <Button size="lg" variant="dark" onClick={flipToggle}>
        {text}
      </Button>
      <div>{toggle ? children : null}</div>
    </>
  );
};
