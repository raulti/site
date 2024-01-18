import { InputHTMLAttributes } from 'react';

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  typeVariation?: 'primary' | 'secundary' | 'ternary';
  width?: number;
  children?: React.ReactNode;
  icon?: any;
  label?: string;
}

export interface IContainerProps {
  isFocused?: boolean;
  isFilled?: boolean;
  isErrored?: boolean;
  width?: number;
  typeVariation?: 'primary' | 'secundary' | 'ternary';
}
