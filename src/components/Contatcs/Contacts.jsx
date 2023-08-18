import React from 'react';
import PropTypes from 'prop-types'
import { ContactsList, ContactItem } from './Contacts.styled';
import { Btn } from 'ui/Btn.styled';
const Contacts = ({ contacts, deleteContact }) => {
  return (
    <ContactsList>
      {contacts !== null ? (
        contacts.map(({ id, name, number }) => (
          <ContactItem key={id}>
                {name}: {number}
                <Btn onClick={() => deleteContact(id)}>Delete</Btn>
          </ContactItem>
        ))
      ) : (
        <div>No contacts found</div>
      )}
    </ContactsList>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Contacts;
