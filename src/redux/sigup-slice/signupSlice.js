import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  signupData: {},
}

export const signupSlice = createSlice({
  name: 'signupData',
  initialState,
  reducers: {
       getSignupData: (state, action) => {
        state.signupData = {
            ...state.signupData,
            ...action.payload
        }
       }
  },
})


export const { getSignupData } = signupSlice.actions

export default signupSlice.reducer