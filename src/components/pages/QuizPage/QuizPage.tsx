import React from 'react';
import { questions } from '@/config';
import { QuizStepper } from './QuizStepper';
import { QuizOptions } from './QuizOptions';

import styles from './QuizPage.module.css';

function QuizPage() {
  return (
    <QuizStepper questions={questions}>
      {(currentQuestion, nextStep) => (
        <div className={styles.wrapper}>
          <h1>{currentQuestion.question}</h1>

          <QuizOptions
            options={currentQuestion.options}
            answer_index={currentQuestion.answer_index}
            onAnswer={nextStep}
          />
        </div>
      )}
    </QuizStepper>
  );
}

export default QuizPage;
