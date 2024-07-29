import { IQuestion } from '@/types';

export namespace QuizOptionsTypes {
  export interface Props extends Pick<Omit<IQuestion.Model, 'answer_index'>, 'options'> {
    onAnswer: (selectedAnswerIndex: number) => void;
    answerIndex: number[];
  }
}
