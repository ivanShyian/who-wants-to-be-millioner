import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IQuestion } from '@/types';

interface QuizState {
  questions: IQuestion.Model[];
  currentIndex: number;
  quizComplete: boolean,
}

const initialState: QuizState = {
  questions: [],
  currentIndex: 0,
  quizComplete: false,
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setQuestions(state, action: PayloadAction<IQuestion.Model[]>) {
      state.questions = action.payload;
    },
    nextQuestion(state) {
      state.currentIndex = Math.min(
        state.currentIndex + 1,
        state.questions.length,
      );
    },
    setQuizComplete(state, action: PayloadAction<{ incIndexValue: number }>) {
      state.currentIndex += action.payload.incIndexValue;
      state.quizComplete = true;
    },
    resetQuiz(state) {
      state.currentIndex = 0;
      state.quizComplete = false;
    },
  },
});

export const {
  setQuestions,
  nextQuestion,
  setQuizComplete,
  resetQuiz,
} = quizSlice.actions;

export default quizSlice.reducer;
