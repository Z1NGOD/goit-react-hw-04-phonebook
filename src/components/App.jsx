import React, { Component } from 'react';
import { Container } from 'ui/Container.styled';
import PhoneBook from './PhoneBook/PhoneBook';
import Contacts from './Contacts/Contacts';
import { nanoid } from 'nanoid';
import Filter from './Filter/Filter';
import PropTypes from 'prop-types';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ),
    filter: PropTypes.string,
  };
  componentDidMount() {
    const contactsFromLS = JSON.parse(localStorage.getItem('contacts')) || [];
    this.setState({ contacts: contactsFromLS });
  }
  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    } 
  }
  addToContacts = (name, number) => {
    const { contacts } = this.state;
    if (!name || !number) {
      alert('Please enter a name and a number by hand dont use autocomplete.');
      return;
    } 
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name: name.trim(),
      number: number.trim(),
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onChange = ({ target }) => {
    const normalizedFilter = target.value.toLowerCase().trim();
    this.setState({ filter: normalizedFilter });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };
  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };
  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    this.addToContacts(name, number);
    this.setState({ name: '', number: '' });
    e.target.reset();
  };

  render() {
    const { name, number, filter } = this.state;
    return (
      <Container>
        <PhoneBook
          name={name}
          number={number}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        <Filter filter={filter} onChange={this.onChange} />
        <Contacts
          contacts={this.getFilteredContacts()}
          deleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}
