import React from 'react';
import SvgRectangle from '@/assets/icons/rectangle.svg';
import classNames from 'classnames';
import styles from './SHoneycomb.module.css';
import type { SHoneycombTypes } from './SHoneycomb.types';

// TODO Too many props. Better to split this component to several parts
// TODO Create Base one and extend it in OptionsItem and SidebarItem

function SHoneycomb({
  size = 'md',
  className,
  children,
  readonly,
  disabled,
  active,
  onClick,
  wrong,
  correct,
}: SHoneycombTypes.Props) {
  const classes = classNames(
    styles.honeycomb,
    styles[size],
    className,
    {
      [styles.readonly]: readonly,
      [styles.disabled]: disabled,
      [styles.active]: active,

      [styles.wrong]: wrong,
      [styles.correct]: correct,
    },
  );

  return (
    <div className={classes} onClick={onClick} role="presentation">
      <div className={styles.path} />

      <div className={styles.rectangle}>
        <SvgRectangle className={styles.svg} />

        <div className={styles.content}>
          {children}
        </div>
      </div>

      <div className={styles.path} />
    </div>
  );
}

export default SHoneycomb;
