import React from 'react';
import { NumberUtils } from '@/utils';
import SHoneycomb from '@/components/ui/SHoneycomb/SHoneycomb';
import styles from './QuizOptionsItem.module.css';
import type { QuizOptionsItemTypes } from './QuizOptionsItem.types';

function QuizOptionsItem({
  index,
  onAnswer,
  option,
  isWrong,
  isCorrect,
}: QuizOptionsItemTypes.Props) {
  return (
    <SHoneycomb
      className={styles.item}
      key={index}
      onClick={() => onAnswer(index)}
      correct={isCorrect}
      wrong={isWrong}
    >
      <p>
        <span className={styles.counter}>
          {NumberUtils.charCodeToLetter(index)}
        </span>

        <span>{option}</span>
      </p>
    </SHoneycomb>
  );
}

export default QuizOptionsItem;
