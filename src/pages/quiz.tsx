import React, { ReactElement } from 'react';
import {
  RightSidebarAside,
  RightSidebarLayout,
  RightSidebarMain,
} from '@/layouts';
import { QuizSidebar, QuizPage } from '@/components/pages';

function Quiz() {
  return (
    <QuizPage />
  );
}

Quiz.getLayout = function getLayout(page: ReactElement) {
  return (
    <RightSidebarLayout>
      <RightSidebarMain>
        {page}
      </RightSidebarMain>

      <RightSidebarAside>
        <QuizSidebar />
      </RightSidebarAside>
    </RightSidebarLayout>
  );
};

export default Quiz;
