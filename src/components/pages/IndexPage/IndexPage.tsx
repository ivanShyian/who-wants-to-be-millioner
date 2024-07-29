import React, { useCallback } from 'react';
import SvgThumbUp from '@/assets/images/thumb-up.svg';
import { SButton } from '@/components/ui';
import { useRouter } from 'next/router';
import { Urls } from '@/config';
import styles from './IndexPage.module.css';

export default function IndexPage() {
  const router = useRouter();

  const handleRedirect = useCallback(
    () => router.push(Urls.Quiz),
    [router],
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.background} />

      <div className={styles.content}>
        <SvgThumbUp />

        <div>
          <p className={styles.startText}>
            Who wants to be
            <br />
            a millionaire?
          </p>

          <SButton onClick={handleRedirect}>Start</SButton>
        </div>
      </div>
    </div>
  );
}
