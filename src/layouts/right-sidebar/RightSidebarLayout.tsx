import React, {PropsWithChildren} from 'react';
import styles from './RightSidebar.module.css';

type SlotComponentProps = PropsWithChildren<{}>;

const RightSidebarLayout: React.FC<PropsWithChildren<{}>> = ({children}) => {
  const mainContent = React.Children.toArray(children).find(
      (child) => React.isValidElement(child) && child.type === RightSidebarMain,
  );

  const sidebarContent = React.Children.toArray(children).find(
      (child) => React.isValidElement(child) && child.type ===
          RightSidebarAside,
  );

  return (
      <div className={styles.rightSidebarLayout}>
        <main className={styles.main}>{mainContent}</main>

        <aside className={styles.sidebar}>{sidebarContent}</aside>
      </div>
  );
};

const RightSidebarAside: React.FC<SlotComponentProps> = ({children}) => <>{children}</>;
const RightSidebarMain: React.FC<SlotComponentProps> = ({children}) => <>{children}</>;

export {RightSidebarLayout, RightSidebarAside, RightSidebarMain};