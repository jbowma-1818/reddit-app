import React from "react";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  //title,
  //setTitle,
  name,
  setName,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
        <label htmlFor="contact">Contact</label>
        <input id="contact" value={contact} onChange={(e) => setContact(e.target.value)}></input>        
        <label htmlFor="date">Date</label>
        <input id="date" type="date" value={date} onChange={(e) => setDate(e.target.value)}></input>
        <label htmlFor="time">Time</label>
        <input id="time" type="time" value={time} onChange={(e) => setTime(e.target.value)}></input>
        <button type="submit">Add Appointment</button>
      </form>
    </>
  );
};
