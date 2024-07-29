import { useDispatch, useSelector } from 'react-redux';
import {
  resetQuiz,
  selectCurrentIndex,
  selectPrizeAmounts, selectQuizComplete,
} from '@/store/slices';
import React, { useCallback, useEffect, useMemo } from 'react';
import { useRouter } from 'next/router';
import { AppDispatch } from '@/store';
import SvgThumbUp from '@/assets/images/thumb-up.svg';

import { Urls } from '@/config';
import { SButton } from '@/components/ui';
import { useIsLargeScreen } from '@/use';
import style from './ResultsPage.module.css';

function ResultsPage() {
  const router = useRouter();
  const { isLargeScreen } = useIsLargeScreen();

  const dispatch = useDispatch<AppDispatch>();

  const currentIndex = useSelector(selectCurrentIndex);
  const questions = useSelector(selectPrizeAmounts);
  const isQuizComplete = useSelector(selectQuizComplete);

  const totalAward = useMemo(() => (
    questions[currentIndex - 1] || '$0'
  ), [questions, currentIndex]);

  const handleTryAgain = useCallback(() => {
    dispatch(resetQuiz());
    return router.push(Urls.Quiz);
  }, [dispatch, router]);

  useEffect(() => {
    if (!isQuizComplete) {
      router.replace(Urls.Quiz).then();
    }
  }, [isQuizComplete, router]);

  useEffect(() => {
    router.beforePopState(({ as }) => {
      if (as !== router.asPath) dispatch(resetQuiz());
      return true;
    });

    return () => {
      router.beforePopState(() => true);
    };
  }, [dispatch, router]);

  return (
    <div className={style.wrapper}>
      <div className={style.svgWrapper}>
        <SvgThumbUp />
      </div>

      <div className={style.content}>
        <p className={style.score}>Total score:</p>
        <span className={style.award}>
          {totalAward}
          {' '}
          earned
        </span>

        <SButton
          className={style.button}
          onClick={handleTryAgain}
          size={isLargeScreen ? 'md' : 'sm'}
        >
          Try again
        </SButton>
      </div>
    </div>
  );
}

export default ResultsPage;
