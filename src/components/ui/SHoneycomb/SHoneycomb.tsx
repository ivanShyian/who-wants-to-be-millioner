import React from 'react';
import styles from './SHoneycomb.module.css';
import SvgRectangle from '@/assets/icons/rectangle.svg';
import type {SHoneycombTypes} from './SHoneycomb.types';
import classNames from 'classnames';

const SHoneycomb: React.FC<SHoneycombTypes.Props> = ({
   size = 'md',
   className,
   children,
 }) => {
  const classes = classNames(
      styles.honeycomb,
      styles[size],
      className
  );

  return (
      <div className={classes}>
        <div className={styles.path}/>

        <div className={styles.rectangle}>
          <SvgRectangle className={styles.svg}/>

          <div className={styles.content}>{children}</div>
        </div>

        <div className={styles.path}/>
      </div>
  );
};

export default SHoneycomb;