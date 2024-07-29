import React, {PropsWithChildren} from 'react';
import styles from './DefaultLayout.module.css';

interface DefaultLayoutProps extends PropsWithChildren<{}> {}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({children}) => {
  return (
      <div className={styles.defaultLayout}>
        <main className={styles.main}>{children}</main>
      </div>
  );
};

export default DefaultLayout;