import React, {ReactElement} from 'react';
import {
  RightSidebarAside,
  RightSidebarLayout,
  RightSidebarMain,
} from '@/layouts';
import QuizPage from '@/components/pages/QuizPage/QuizPage';
import {QuizSidebar} from '@/components/pages';
import {questions} from '@/config';
import QuizWrapper from '@/components/pages/QuizPage/QuizWrapper/QuizWrapper';

const Quiz = () => {
  return (
      <QuizWrapper questions={questions}>
        { () => (
            <QuizPage />
        ) }
      </QuizWrapper>
  )
}

Quiz.getLayout = function getLayout(page: ReactElement) {
  return (
      <RightSidebarLayout>
        <RightSidebarMain>{page}</RightSidebarMain>
        <RightSidebarAside>
          {/*<QuizSidebar questionsList= />*/}
        </RightSidebarAside>
      </RightSidebarLayout>
  );
};

export default Quiz;