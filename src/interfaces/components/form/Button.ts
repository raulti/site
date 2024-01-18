import { ButtonHTMLAttributes } from 'react';

export type IButton = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  width?: number;

  typeButton?: 'primary' | 'secondary' | 'tertiary';
};

export interface IContainerButton {
  typeButton?: 'primary' | 'secondary' | 'tertiary';
  width?: number;
}
