//https://6584512e4d1ee97c6bcf791c.mockapi.io/contacts

// import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../configAxios/api';

// axios.defaults.baseURL = 'https://6584512e4d1ee97c6bcf791c.mockapi.io';

export const fetchContactsThunk = createAsyncThunk(
  'fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await api.get('contacts');

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'deleteContact',
  async (id, thunkAPI) => {
    try {
      const { data } = await api.delete(`contacts/${id}`);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContactsThunk = createAsyncThunk(
  'addContact',
  async ({ name, number }, thunksAPI) => {
    try {
      const { data } = await api.post('contacts', { name, number });

      return data;
    } catch (error) {
      return thunksAPI.rejectWithValue(error.message);
    }
  }
);
