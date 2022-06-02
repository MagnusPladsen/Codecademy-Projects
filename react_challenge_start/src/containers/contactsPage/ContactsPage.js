import React, { useState, useEffect } from "react";
import {ContactForm} from '../../components/contactForm/ContactForm.js';
import {TileList} from '../../components/tileList/TileList.js';


export const ContactsPage = (props) => {
  
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [duplicate, setDuplicate] = useState(false);

  const contacts = props.contact;
  const addContact = props.addContact;

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (duplicate === false) {
      addContact(name, phone, email);
      setName('');
      setPhone('');
      setEmail('');
    } 
    
  }

    
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */

  useEffect(() => {
    const result = props.contacts.find((element) => {
      return element.name === name;
    });
    if (result !== undefined) {
      setDuplicate(true);
    }
  }, [name])
  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm 
          handleSubmit={handleSubmit}
          name = {name} setName = {setName}
          email = {email} setEmail = {setEmail}
          phone = {phone} setPhone = {setPhone}
        />
        
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList 
          list={props.contacts}
        />
      </section>
    </div>
  );
};
