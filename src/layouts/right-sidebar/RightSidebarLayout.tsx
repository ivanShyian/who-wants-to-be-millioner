import React, { PropsWithChildren } from 'react';
import styles from './RightSidebar.module.css';

const RightSidebarAside: React.FC<PropsWithChildren> = ({ children }) => children;
const RightSidebarMain: React.FC<PropsWithChildren> = ({ children }) => children;

const RightSidebarLayout: React.FC<PropsWithChildren> = function RightSidebarLayout({
  children,
}) {
  const mainContent = React.Children.toArray(children).find(
    (child) => React.isValidElement(child) && child.type === RightSidebarMain,
  );

  const sidebarContent = React.Children.toArray(children).find(
    (child) => React.isValidElement(child) && child.type === RightSidebarAside,
  );

  return (
    <div className={styles.rightSidebarLayout}>
      <main className={styles.main}>{mainContent}</main>

      <aside className={styles.sidebar}>{sidebarContent}</aside>
    </div>
  );
};

export { RightSidebarLayout, RightSidebarAside, RightSidebarMain };
