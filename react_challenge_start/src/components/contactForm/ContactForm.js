import React from "react";

export const ContactForm = (props) => {

  return (
    <form onSubmit={props.handleSubmit}>
      <input type="text" id="name" placeholder="Enter full name" onChange={e => props.setName(e.target.value)} />
      <input type="tel" id="phone" placeholder="Enter phone number" onChange={e => props.setPhone(e.target.value)}  pattern="\d{8}" />
      <input type="email" id="email" placeholder="Enter email" onChange={e => props.setEmail(e.target.value)} />
      <input type="submit" value="Add Contact" />
    </form>
  )
};

