import { useDispatch, useSelector } from 'react-redux';
import Form from './Form/Form';
import Contacts from './Contacts';
import Filter from './Filter';
import {
  filterContacts,
  addContacts,
  deleteContacts,
} from '../redux/contacts-actions';

export default function App() {
  const contacts = useSelector(store => store.contacts.contactsReducer);
  const filter = useSelector(store => store.contacts.filter);
  const dispatch = useDispatch();

  const formSubmit = payload => {
    const { name } = payload;
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts!`);
      return contacts;
    } else {
      return dispatch(addContacts(payload));
    }
  };

  const changeFilter = event => {
    dispatch(filterContacts(event.currentTarget.value));
  };

  const findContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const onClick = contactId => {
    dispatch(deleteContacts(contactId));
  };

  return (
    <>
      <h1>Phonebook</h1>
      <Form onSubmit={formSubmit} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <Contacts contacts={findContacts()} onClick={onClick} />
    </>
  );
}
