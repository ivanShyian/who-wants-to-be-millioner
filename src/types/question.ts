export namespace IQuestion {
  export interface Model {
    question: string;
    options: string[];
    answer_index: number[];
    prize_amount: string;
  }
}
