import React from "react";
import {ContactPicker} from '../../components/contactPicker/ContactPicker';

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter Title"  onChange={e => setTitle(e.target.value)} />
      <ContactPicker contacts={contacts} setContact={setContact} />
      <input type="date" placeholder="Select Date" min={getTodayString} onChange={e => setDate(e.target.value)} />
      <input type="time" placeholder="Select Time" onChange={e => setTime(e.target.value)} />
      <input type="submit" />
    </form>
  );
};
