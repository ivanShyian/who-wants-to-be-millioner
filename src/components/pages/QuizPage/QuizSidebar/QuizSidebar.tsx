import React from 'react';

interface QuizSidebarProps {
  questionsList: {
    question: string;
    options: string[];
    answer_index: number;
    prize_amount: number;
  }
}

const QuizSidebar: React.FC<QuizSidebarProps> = (props) => {
  return (
      <div>SIDEBAR</div>
  );
}

export default QuizSidebar;