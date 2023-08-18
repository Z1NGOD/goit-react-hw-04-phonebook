import { useContext} from 'react';
import { Btn } from 'ui/Btn.styled';
import { MainText, Input, Form } from './Phonebook.styled';
import { Context } from 'components/Context/StateContext';

export default function PhoneBook() {
  const { handleSubmit, handleChange, name, number } = useContext(Context);

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
          value={name}
          onChange={handleChange}
          placeholder='Name'
        />
        <MainText>Number</MainText>
        <Input
          type="tel"
          name="number"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses, and can start with +"
          required
          value={number}
          onChange={handleChange}
          placeholder='000-000-0000'
        />
        <Btn type="submit">Add contact</Btn>
      </Form>
    </>
  );
}

