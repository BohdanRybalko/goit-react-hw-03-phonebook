import React, { Component } from 'react';

import ContactItem from './ContactItem';

class ContactList extends Component {
  render() {
    const { contacts, onDeleteContact } = this.props;

    return (
      <div>
        {contacts.map((contact) => (
          <ContactItem key={contact.id} contact={contact} onDeleteContact={onDeleteContact} />
        ))}
      </div>
    );
  }
}

export default ContactList;
