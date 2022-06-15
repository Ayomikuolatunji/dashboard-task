import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sigupData: {},
}

export const signupSlice = createSlice({
  name: 'signupData',
  initialState,
  reducers: {
       getSignupData: (state, action) => {
        state.sigupData = {
            ...state.sigupData,
            ...action.payload
        }
       }
  },
})


export default signupSlice.reducer