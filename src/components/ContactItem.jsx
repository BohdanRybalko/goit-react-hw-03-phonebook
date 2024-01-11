import React, { Component } from 'react';

class ContactItem extends Component {
  render() {
    const { contact, onDeleteContact } = this.props;

    return (
      <div>
        <span>{contact.name}: {contact.number}</span>
        <button onClick={() => onDeleteContact(contact.id)}>Delete</button>
      </div>
    );
  }
}

export default ContactItem;
