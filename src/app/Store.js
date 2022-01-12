import { configureStore } from '@reduxjs/toolkit'
// import counterReducer from '../features/counter/counterSlice'
import counterReducer from "../features/counter/counterSlice"
import themeSlice from '../features/theme/themeSlice'
export const Store = configureStore({
  reducer: {
    counter: counterReducer,
    theme:themeSlice
  },
})