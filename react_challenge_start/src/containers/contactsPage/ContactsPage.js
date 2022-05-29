import React, { useState } from "react";

export const ContactsPage = (props) => {
  
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const contacts = props.contact;
  const addContact = props.addContact;

  const handleSubmit = (e) => {
    console.log(props.contacts);
    e.preventDefault();   
    for (let i = 0; i < contacts.length; i++) {
      const contactsExtract = contacts[i];  
      console.log(contacts)    // Loop over and extract object from contacts.
      const nameCheck = contactsExtract.name;   // Extraxt name from object.
      if (name === nameCheck) {                // Check if name is in any contacts
        console.log('Name is already stored in contacts!')
        setName('');
        setEmail('');
        setPhone('');
      }
      addContact(name, phone, email);
      console.log(contacts);
    }
    
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <form onSubmit={handleSubmit}>
          <label for="name">Full Name</label>
          <input type="text" id="name" onChange={e => setName(e.target.value)} />
          <p>Name is set: {name}</p>  {/* Just for testing. REMOVE THIS */}
          <label for="number">Telephone Number</label>
          <input type="tel" id="phone" onChange={e => setPhone(e.target.value)} />
          <p>Number is set: {phone}</p>  {/* Just for testing. REMOVE THIS */}
          <label for="email">Email</label>
          <input type="email" id="email" onChange={e => setEmail(e.target.value)} />
          <p>Email is set: {email}</p>  {/* Just for testing. REMOVE THIS */}
          <input type="submit" />
        </form>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        {props.contacts.map(( {name, phone, email} ) => 
        <text>
        {`Contact:
        ${name} 
        ${phone}
        ${email}`}
        </text>)}
      </section>
    </div>
  );
};
