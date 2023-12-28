import React from 'react';

import { loginThunk } from '../redux/auth/operations';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: 'vasyatest@mail.com',
      password: 'vasyatest@mail.com',
    },
  });
  const dispatch = useDispatch();

  const submit = data => {
    dispatch(loginThunk(data))
      .unwrap()
      .then(res => {
        navigate('/contacts');
        toast.success(`Hello ${res.user.name}`);
      })
      .catch(() => {
        toast.error('Something is wrong!');
      });
  };
  return (
    <div>
      <StyledForm onSubmit={handleSubmit(submit)} action="">
        <StyledLabel
          htmlFor="
        "
        >
          <StyledSpan>Email</StyledSpan>
          <StyledInput
            {...register('email')}
            placeholder="Enter the Email"
            type="text"
          />
        </StyledLabel>
        <StyledLabel
          htmlFor="
        "
        >
          <StyledSpan>Password</StyledSpan>
          <StyledInput
            {...register('password')}
            placeholder="Enter the Password"
            type="password"
          />
        </StyledLabel>
        <StyledButton>Login</StyledButton>
      </StyledForm>
    </div>
  );
};

export default Login;

const StyledForm = styled.form`
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 350px;
  padding: 40px 20px;
  border-radius: 20px;
  position: relative;
  background-color: #1a1a1a;
  color: #fff;
  border: 1px solid #333;
`;

const StyledLabel = styled.label`
  position: relative;
`;

const StyledInput = styled.input`
  background-color: #333;
  color: #fff;
  width: 100%;
  padding: 20px 10px 05px 10px;
  outline: 0;
  border: 1px solid rgba(105, 105, 105, 0.397);
  border-radius: 10px;
`;

const StyledSpan = styled.span`
  color: rgba(255, 255, 255, 0.5);

  left: 10px;
  top: 0px;
  font-size: 0.5em;
  cursor: text;
  transition: 0.3s ease;
`;

const StyledButton = styled.button`
  border: none;
  outline: none;
  padding: 10px;
  border-radius: 10px;
  color: #fff;
  font-size: 16px;
  transform: 0.3s ease;
  background-color: #00bfff;
  margin-top: 20px;
  &:hover {
    background-color: #00bfff96;
  }
`;
