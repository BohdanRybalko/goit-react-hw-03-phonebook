import React from 'react';

const ContactItem = ({ contact, onDeleteContact }) => {
  return (
    <div>
      <span>{contact.name}: {contact.number}</span>
      <button onClick={() => onDeleteContact(contact.id)}>Delete</button>
    </div>
  );
};

export default ContactItem;
