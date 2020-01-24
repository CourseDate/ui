import React from "react";

const buttonStyles = {
  padding: "20px 23px",
  background: "white",
  cursor: "pointer",
  border: "8px solid #ededed",
  borderRadius: "100%"
};

const Button = ({ children, onClick }) => (
  <button onClick={onClick} style={{ ...buttonStyles }}>
    {children}
  </button>
);

export default Button;
