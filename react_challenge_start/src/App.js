import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  const [contacts, setContacts] = useState([{name: 'test', phone: '1234', email: 'test@test.com'}]);
  const [appointments, setAppointments] = useState([{}]);

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  const addContact = (contact) => {
    const name = contact.name;
    const number = contact.number;
    const email = contact.email;
    setContacts((prev) => ([...prev,
        {name: name, number: number, email: email}]));
    console.log(contacts);
  }

  const addAppointment = (appointment) => {
    const contact = appointment.contact;
    const title = appointment.title;
    const date = appointment.date;
    const time = appointment.time;
    setAppointments((prev) => ([...prev,
        {title: title, contact: contact, date: date, time: time}]));
    console.log(appointments);
  }

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
             {/* Add props to ContactsPage */}
            <ContactsPage contacts={contacts} addContact={addContact} />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage appointment={appointments} addAppointment={addAppointment} />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
