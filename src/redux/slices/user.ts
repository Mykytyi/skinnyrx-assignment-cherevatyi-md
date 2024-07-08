import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface UserState {
  option: string,
  notes: string
}

// Define the initial state using that type
const initialState: UserState = {
  option: '',
  notes: ''
};

export const userFormSlice = createSlice({
  name: 'userForm',
  // `createSlice` will infer the state type from the `initialState` argument
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

// Other code such as selectors can use the imported `RootState` type
export const selectOption = (state: RootState) => state.userForm.option;

export default userFormSlice.reducer;
