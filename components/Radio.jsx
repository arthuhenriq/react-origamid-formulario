import React from "react";

const Radio = ({ question, options, value, setValue, ...props }) => {
  return (
    <fieldset style={{ padding: "2rem", border: "2px solid gray" }}>
      <legend style={{ fontWeight: "bold" }}>{question}</legend>
      {options.map((option) => (
        <label key={option}>
          <input
            type="radio"
            value={option}
            checked={value === option}
            onChange={({ target }) => setValue(target.value)}
            {...props}
          />
          {option}
        </label>
      ))}
    </fieldset>
  );
};

export default Radio;
