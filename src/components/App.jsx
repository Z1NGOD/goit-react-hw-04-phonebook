import React, { useContext, useEffect } from 'react';
import { Container } from 'ui/Container.styled';
import PhoneBook from './PhoneBook/PhoneBook';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import { Context } from './Context/StateContext';

export function App() {
  const { contacts, setContacts } = useContext(Context);

  useEffect(() => {
    const contactsFromLS = JSON.parse(localStorage.getItem('contacts')) || [];
    setContacts(contactsFromLS);
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Container>
      <PhoneBook />
      <Filter />
      <Contacts />
    </Container>
  );
}

