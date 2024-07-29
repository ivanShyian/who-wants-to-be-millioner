import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from '@/store';
import {
  nextQuestion,
  setQuestions,
  selectCurrentIndex,
  selectCurrentQuestion, setQuizComplete,
} from '@/store/slices';
import { useRouter } from 'next/router';
import { Urls } from '@/config';
import { QuizStepperTypes } from './QuizStepper.types';

function QuizStepper({
  questions,
  children,
}: QuizStepperTypes.Props) {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const currentQuestion = useSelector(selectCurrentQuestion);
  const currentIndex = useSelector(selectCurrentIndex);

  useEffect(() => {
    dispatch(setQuestions(questions));
  }, [dispatch, questions]);

  function nextStep(selectedAnswerIndex: number) {
    if (!currentQuestion.answer_index.includes(selectedAnswerIndex)) {
      dispatch(setQuizComplete({
        incIndexValue: 0,
      }));
      return router.push(Urls.Results);
    }

    if (questions.length === currentIndex + 1) {
      dispatch(setQuizComplete({
        incIndexValue: 1,
      }));
      return router.push(Urls.Results);
    }

    dispatch(nextQuestion());
  }

  if (!currentQuestion) return null;

  return (
    <>
      {children(currentQuestion, nextStep)}
    </>
  );
}

export default QuizStepper;
