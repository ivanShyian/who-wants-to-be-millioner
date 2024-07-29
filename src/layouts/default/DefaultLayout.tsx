import React, { PropsWithChildren } from 'react';
import styles from './DefaultLayout.module.css';

function DefaultLayout({ children }: PropsWithChildren) {
  return (
    <div className={styles.defaultLayout}>
      <main className={styles.main}>{children}</main>
    </div>
  );
}

export default DefaultLayout;
