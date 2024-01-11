import React, { Component } from 'react';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = (newContact) => {
    const { contacts } = this.state;
    const isNameExists = contacts.some((contact) => contact.name === newContact.name);

    if (isNameExists) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    this.setState((prevState) => ({ contacts: [...prevState.contacts, newContact] }));
  };

  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  filterContacts = (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = this.filterContacts(contacts, filter);

    return (
      <div>
        <h1>Phonebook</h1>
       <ContactForm contacts={this.state.contacts} addContact={this.addContact} />

        <h2>Contacts</h2>
        <Filter filter={filter} onFilterChange={(value) => this.setState({ filter: value })} />
        <ContactList contacts={filteredContacts} onDeleteContact={this.deleteContact} />
      </div>
    );
  }
}

export default App;