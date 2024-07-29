import type React from 'react';

export namespace SButtonTypes {
  export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
    size?: 'xs' | 'md' | 'lg';
  }
}
