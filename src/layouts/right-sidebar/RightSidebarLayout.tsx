import React, { PropsWithChildren, useState } from 'react';
import classNames from 'classnames';
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

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function toggleSidebar() {
    setIsSidebarOpen(!isSidebarOpen);
  }

  const sidebarClasses = classNames(
    styles.sidebar,
    {
      [styles.open]: isSidebarOpen,
    },
  );

  return (
    <main className={styles.rightSidebarLayout}>
      <div className={styles.burgerIcon} onClick={toggleSidebar} role="presentation">
        { isSidebarOpen ? '✖' : '☰' }
      </div>

      <div className={styles.main}>{mainContent}</div>

      <aside className={sidebarClasses}>{sidebarContent}</aside>
    </main>
  );
};

export { RightSidebarLayout, RightSidebarAside, RightSidebarMain };
