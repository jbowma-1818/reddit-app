import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label for="name">Name</label>
        <input id="name" type="text"></input>
        <label for="phone">Phone</label>
        <input id="phone" type="tel"></input>
        <label for="email">Email</label>
        <input id="email" type="email"></input>
        <submit></submit>
      </form>
    </>
  );
};

