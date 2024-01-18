import { TextareaHTMLAttributes } from 'react';

export interface ITextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label?: string;
  typeVariation?: 'primary' | 'secundary' | 'ternary';
}
