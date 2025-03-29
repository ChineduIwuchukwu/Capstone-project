import React from "react";

const button = ({ name, icon, className }) => {
  return (
    <button type="button" className={`custom ${className}`}>
      {icon} {name}
    </button>
  );
};

export default button;
