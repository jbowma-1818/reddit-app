import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
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
        <label htmlFor="appt-name">Name</label>
        <input id="appt-name" type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
        <label htmlFor="appt-date">Date</label>
        <input id="appt-date" type="date" value={date} onChange={(e) => setDate(e.target.value)} min={getTodayString()}></input>
        <label htmlFor="appt-time">Time</label>
        <input id="appt-time" type="time" value={time} onChange={(e) => setTime(e.target.value)}></input>
        <label htmlFor="appt-contact">Contact</label>
        <ContactPicker id="appt-contact" name="contact" contacts={contacts} value={contact} onChange={(e) => setContact(e.target.value)}/>
        <button type="submit">Add Appointment</button>
      </form>
    </>
  );
};
