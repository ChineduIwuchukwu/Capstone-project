import React from "react";

const button = ({ name, icon, classname }) => {
  return (
    <button type="button" className={`custom ${classname}`}>
      {icon} {name}
    </button>
  );
};

export default button;
