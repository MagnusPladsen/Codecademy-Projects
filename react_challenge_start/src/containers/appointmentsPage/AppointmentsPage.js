import React, { useState } from "react";
import {TileList} from '../../components/tileList/TileList.js';
import {AppointmentForm} from '../../components/appointmentForm/AppointmentForm';

export const AppointmentsPage = (props) => {
  const [title, setTitle] = useState('');
  const [contact, setContact] = useState({});
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const {contacts, appointment, addAppointment} = props;


  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
    props.addAppointment(title, contact, date, time);
    setTitle('');
    setContact({});
    setDate('');
    setTime('');
   
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm 
          title={title} setTitle={setTitle}
          contacts={contacts} setContact={setContact}
          date={date} setDate={setDate}
          time={time} setTime={setTime}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList list={props.appointment} />
      </section>
    </div>
  );
};

