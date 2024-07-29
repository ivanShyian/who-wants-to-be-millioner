import React from 'react';

export namespace SHoneycombTypes {
  export type Props = Partial<{
    size: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
    className: string;
    readonly: boolean;
    disabled: boolean;
    active: boolean;

    wrong?: boolean;
    correct?: boolean;

    onClick?: () => void;
  }>;
}
