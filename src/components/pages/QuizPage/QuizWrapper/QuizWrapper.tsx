import React from 'react';
import {QuizWrapperTypes} from './QuizWrapper.types';

const QuizWrapper: React.FC<QuizWrapperTypes.Props> = ({
  children,
  questions,
}) => {
  return <>{children(questions)}</>;
};

export default QuizWrapper;
