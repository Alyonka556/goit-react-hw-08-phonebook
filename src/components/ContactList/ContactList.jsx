import { useDispatch, useSelector } from 'react-redux';
import { StyledButton, StyledItem, StyledList } from './ContactList.styled';
import {
  SelectError,
  SelectLoading,
  getContacts,
  getFilter,
} from '../../redux/contacts/selector';
import {
  deleteContactThunk,
  fetchContactsThunk,
} from '../../redux/contacts/operations';
import { useEffect } from 'react';

const ContactList = ({ children }) => {
  const loading = useSelector(SelectLoading);
  const error = useSelector(SelectError);
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  const filteredContacts = contacts?.filter(contact =>
    contact.name.toLowerCase().includes(filter?.toLowerCase() || '')
  );

  const handleDelete = id => {
    dispatch(deleteContactThunk(id));
  };

  return (
    <div>
      {children}
      <StyledList>
        {filteredContacts.map((contact, id) => (
          <StyledItem key={id}>
            {contact.name}: {contact.number}
            <StyledButton
              type="button"
              onClick={() => handleDelete(contact.id)}
            >
              Delete
            </StyledButton>
          </StyledItem>
        ))}
      </StyledList>
      {loading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
    </div>
  );
};

export default ContactList;
