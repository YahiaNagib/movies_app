import React from "react";

const Input = ({fieldName, label, handleChange, accountField, type}) => {
  return (
    <div className="form-group">
      <label htmlFor={fieldName}>{label}</label>
      <input
        type={type}
        name={fieldName}
        id={fieldName}
        value={accountField}
        onChange={handleChange}
        className="form-control"
      />
    </div>
  );
};

export default Input;
