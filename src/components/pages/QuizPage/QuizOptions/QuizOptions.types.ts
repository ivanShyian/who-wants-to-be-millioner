import { IQuestion } from '@/types';

export namespace QuizOptionsTypes {
  export interface Props extends Pick<IQuestion.Model, 'options' | 'answer_index'> {
    onAnswer: (selectedAnswerIndex: number) => void;
  }
}
