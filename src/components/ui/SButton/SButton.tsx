import React from 'react';

import classNames from 'classnames';
import { SButtonTypes } from './SButton.types';
import styles from './SButton.module.css';

function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: SButtonTypes.Props) {
  const classes = classNames(
    styles.button,
    styles[variant],
    styles[size],
    className,
  );

  return (
    <button className={classes} {...props} type="button">
      {children}
    </button>
  );
}

export default Button;
