import React from 'react';

import styles from './SButton.module.css';
import classNames from 'classnames';
import {SButtonTypes} from '@/components/ui/SButton/SButton.types';

const Button: React.FC<SButtonTypes.Props> = ({
   variant = 'primary',
   size = 'md',
   className,
   children,
   ...props
 }) => {
  const classes = classNames(
      styles.button,
      styles[variant],
      styles[size],
      className
  );

  return (
      <button className={classes} {...props}>
        {children}
      </button>
  );
};

export default Button;