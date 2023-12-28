import React, { useState } from 'react';

import {
  StyledWrapper,
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledButton,
} from './ContactForm.styled';
import { getContacts } from '../../redux/contacts/selector';
import { useDispatch, useSelector } from 'react-redux';
import { addContactsThunk } from '../../redux/contacts/operations';

const ContactForm = () => {
  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const number = event.target.elements.number.value;
    if (contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(addContactsThunk({ name, number }));
    setName('');
    setNumber('');
    event.target.reset();
  };

  return (
    <StyledWrapper>
      <StyledForm onSubmit={handleSubmit}>
        <StyledLabel>Name </StyledLabel>
        <StyledInput
          type="text"
          name="name"
          required
          placeholder="Enter name"
          value={name}
          onChange={handleChange}
        />
        <StyledLabel>Number </StyledLabel>
        <StyledInput
          type="tel"
          name="number"
          required
          placeholder="Enter phone number"
          value={number}
          onChange={handleChange}
        />
        <StyledButton type="submit">Add contact</StyledButton>
      </StyledForm>
    </StyledWrapper>
  );
};

export default ContactForm;
