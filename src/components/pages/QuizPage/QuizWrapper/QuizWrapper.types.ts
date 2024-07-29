import type {IQuestion} from '@/types';
import React from 'react';

export namespace QuizWrapperTypes {
  export interface Props {
    children: (questionsList: IQuestion.Model[]) => React.ReactNode;
    questions: IQuestion.Model[];
  }
}