import { createContext, useState } from 'react';
import { nanoid } from 'nanoid';
export const Context = createContext();

export function GlobalContext({ children }) {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const newContact = {
    id: nanoid(),
    name: name.trim(),
    number: number.trim(),
  };
  const addToContacts = (name, number) => {
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts.`);
      return;
    }

    setContacts(prevState => [...prevState, newContact]); 
  };

  const handleSubmit = e => {
    e.preventDefault();
    addToContacts(name, number);
    setName('');
    setNumber('');
    e.target.reset();
  };
  const handleChange = e => {
    const { name, value } = e.target;

    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const onChange = ({ target }) => {
    const normalizedFilter = target.value.toLowerCase().trim();
    setFilter(normalizedFilter); 
  };
  

  return (
    <Context.Provider
      value={{
        contacts,
        setContacts,
        filter,
        setFilter,
        onChange,
        handleSubmit,
        handleChange,
        name,
        number,
        newContact,
      }}
    >
      {children}
    </Context.Provider>
  );
}
