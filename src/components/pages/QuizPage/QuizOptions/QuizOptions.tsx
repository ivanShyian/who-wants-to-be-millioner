import React from 'react';
import { QuizOptionsTypes } from './QuizOptions.types';
import styles from './QuizItem.module.css';
import { QuizOptionsItem } from './QuizOptionsItem';

function QuizOptions({
  answer_index: answerIndex,
  options,
  onAnswer,
}: QuizOptionsTypes.Props) {
  const [
    selectedAnswerIndex,
    setSelectedAnswerIndex,
  ] = React.useState<number | undefined>();

  const handleClick = (index: number) => {
    if (selectedAnswerIndex !== undefined) return;

    setSelectedAnswerIndex(index);

    setTimeout(() => {
      setSelectedAnswerIndex(undefined);
      onAnswer(index);
    }, 1000);
  };

  const isCorrect = (itemIndex: number, selectedIndex?: number) => (
    selectedIndex !== undefined && answerIndex.includes(itemIndex)
  );

  const isWrong = (itemIndex: number, selectedIndex?: number) => (
    selectedIndex === itemIndex && !answerIndex.includes(itemIndex)
  );

  return (
    <ul className={styles.options}>
      {options.map((option, itemIndex) => (
        <li key={option}>
          <QuizOptionsItem
            index={itemIndex}
            option={option}
            onAnswer={handleClick}
            isCorrect={isCorrect(itemIndex, selectedAnswerIndex)}
            isWrong={isWrong(itemIndex, selectedAnswerIndex)}
          />
        </li>
      ))}
    </ul>
  );
}

export default QuizOptions;
