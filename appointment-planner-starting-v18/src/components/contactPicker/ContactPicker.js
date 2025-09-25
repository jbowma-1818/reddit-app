import React from "react";

export const ContactPicker = ({ contacts = [], onChange, value, name }) => {
  return (
    <>
      <select onChange={onChange} value={value} name={name} id={name}>
        <option value="">No Contact Selected</option>
        {contacts.map((contacts, index) => (
          <option key={contacts.name} value={contacts.name}>
            {contacts.name}
          </option>
        ))}
      </select>
    </>
  );
};
