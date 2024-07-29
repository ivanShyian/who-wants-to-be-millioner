import React, { useCallback } from 'react';
import SvgThumbUp from '@/assets/images/thumb-up.svg';
import { SButton } from '@/components/ui';
import { useRouter } from 'next/router';
import { Urls } from '@/config';
import { useIsLargeScreen } from '@/use';
import styles from './IndexPage.module.css';

export default function IndexPage() {
  const router = useRouter();
  const { isLargeScreen } = useIsLargeScreen();

  const handleRedirect = useCallback(
    () => router.push(Urls.Quiz),
    [router],
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.background} />

      <div className={styles.content}>
        <div className={styles.svgWrapper}>
          <SvgThumbUp />
        </div>

        <div>
          <p className={styles.startText}>
            Who wants to be
            <br />
            a millionaire?
          </p>

          <SButton
            onClick={handleRedirect}
            size={isLargeScreen ? 'md' : 'sm'}
          >
            Start
          </SButton>
        </div>
      </div>
    </div>
  );
}
