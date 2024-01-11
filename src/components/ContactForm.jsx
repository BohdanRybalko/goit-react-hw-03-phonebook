import React, { Component } from 'react';
import { nanoid } from 'nanoid';

class ContactForm extends Component {
  state = {
      name: '',
      number: '',
    };
  

  handleSubmit = (e) => {
    e.preventDefault();

    const { name, number } = this.state;
    const { contacts, addContact } = this.props;

    const isNameExists = contacts.some((contact) => contact.name === name);

    if (isNameExists) {
      alert(`${name} is already in contacts.`);
      return;
    }

    addContact({ id: nanoid(), name, number });
    this.setState({ name: '', number: '' });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="name" value={name} onChange={this.handleChange} required />
        <input type="tel" name="number" value={number} onChange={this.handleChange} required />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
