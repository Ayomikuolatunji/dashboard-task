import { configureStore } from '@reduxjs/toolkit'
import signupSlice from './sigup-slice/signupSlice'

export const store = configureStore({
  reducer: {
    signupData: signupSlice,
  },
})