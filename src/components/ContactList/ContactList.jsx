import { StyledButton, StyledItem, StyledList } from './ContactList.styled';

const ContactList = ({ contacts, handleDelete }) => (
  <div>
    <StyledList>
      {contacts.map((contact, id) => (
        <StyledItem key={id}>
          {contact.name}: {contact.phone}
          <StyledButton type="button" onClick={() => handleDelete(contact.id)}>
            Delete
          </StyledButton>
        </StyledItem>
      ))}
    </StyledList>
  </div>
);

export default ContactList;
