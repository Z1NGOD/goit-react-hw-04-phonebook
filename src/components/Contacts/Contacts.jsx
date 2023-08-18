import { useContext } from 'react';
import { ContactsList, ContactItem } from './Contacts.styled';
import { Btn } from 'ui/Btn.styled';
import { Context } from 'components/Context/StateContext';
const Contacts = () => {
  const { contacts, setContacts, filter } = useContext(Context);

  const deleteContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };
  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };
  const filteredContacts = getFilteredContacts();
  return (
    <ContactsList>
      {filteredContacts.length > 0 ? (
        filteredContacts.map(({ id, name, number }) => (
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

export default Contacts;
