import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface UserState {
  option: string,
  notes: string
}

const initialState: UserState = {
  option: '',
  notes: ''
};

export const userFormSlice = createSlice({
  name: 'userForm',
  initialState,
  reducers: {
    setOption: (state, action: PayloadAction<string>) => {
      state.option = action.payload
    },
    setNotes: (state, action: PayloadAction<string>) => {
      state.notes = action.payload
    },
  },
});

export const { setOption, setNotes } = userFormSlice.actions;

export default userFormSlice.reducer;
