import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import React from 'react';
import styled from 'styled-components';

const Contacts = () => {
  return (
    <div>
      <>
        <StyledTitle>Phonebook</StyledTitle>
        <ContactForm />
        <StyledTitle>Contacts</StyledTitle>
        <Filter />
        <ContactList />
      </>
    </div>
  );
};

export default Contacts;

const StyledTitle = styled.h1`
  margin: 30px 0;
`;
