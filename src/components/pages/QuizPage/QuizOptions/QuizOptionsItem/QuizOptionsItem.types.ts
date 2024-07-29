export namespace QuizOptionsItemTypes {
  export interface Props {
    index: number;
    option: string;
    isWrong: boolean;
    isCorrect: boolean;
    onAnswer: (index: number) => void;
  }
}
