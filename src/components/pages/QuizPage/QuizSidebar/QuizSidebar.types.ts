export namespace QuizSidebarTypes {
  export interface Props {
    questionsList: {
      question: string;
      options: string[];
      answer_index: number;
      prize_amount: number;
    }
  }
}