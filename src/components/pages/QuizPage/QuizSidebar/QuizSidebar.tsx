import React from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentIndex, selectPrizeAmounts } from '@/store/slices';

import SHoneycomb from '@/components/ui/SHoneycomb/SHoneycomb';
import styles from './QuizSidebar.module.css';

function QuizSidebar() {
  const currentIndex = useSelector(selectCurrentIndex);
  const prizeAmounts = useSelector(selectPrizeAmounts);

  return (
    <div className={styles.sidebar}>
      { prizeAmounts.map((prizeAmount, index) => (
        <SHoneycomb
          className={styles.item}
          key={prizeAmount}
          size="sm"
          readonly
          disabled={currentIndex > index}
          active={currentIndex === index}
        >
          <p className={styles.prize}>{prizeAmount}</p>
        </SHoneycomb>
      )).reverse()}
    </div>
  );
}

export default QuizSidebar;
