import type { RootState } from '@/store';

export const selectCurrentIndex = (state: RootState) => state.quiz.currentIndex;

export const selectQuizComplete = (state: RootState) => state.quiz.quizComplete;

export const selectCurrentQuestion = (state: RootState) => (
  state.quiz.questions[state.quiz.currentIndex]
);

export const selectPrizeAmounts = (state: RootState) => (
  state.quiz.questions.map((q) => q.prize_amount)
);
