import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { quizReducer } from './slices';

const store = configureStore({
  reducer: {
    quiz: quizReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export default store;
