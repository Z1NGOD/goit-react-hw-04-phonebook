import React from 'react';
import PropTypes from 'prop-types';
import { Btn } from 'ui/Btn.styled';
import { MainText, Input, Form } from './Phonebook.styled';

export default function PhoneBook({
  name,
  number,
  handleSubmit,
  handleChange,
}) {
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <MainText>Phone Book</MainText>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          defaultValue={name}
          onChange={handleChange}
        />
        <MainText>Number</MainText>
        <Input
          type="tel"
          name="number"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses, and can start with +"
          required
          defaultValue={number}
          onChange={handleChange}
        />
        <Btn type="submit">Add contact</Btn>
      </Form>
    </>
  );
}

PhoneBook.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};
