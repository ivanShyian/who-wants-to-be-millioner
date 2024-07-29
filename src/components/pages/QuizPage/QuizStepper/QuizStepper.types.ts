import { IQuestion } from '@/types';
import React from 'react';

export namespace QuizStepperTypes {
  export interface Props {
    questions: IQuestion.Model[];
    children: (
        question: IQuestion.Model,
        nextStep: (selectedIndex: number) => void,
    ) => React.ReactNode;
  }
}
