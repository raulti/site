import { ButtonHTMLAttributes } from 'react';

export type TButtonCategory = ButtonHTMLAttributes<HTMLButtonElement> & {
  active?: boolean;

  icon: any;
  title: string;
};

export interface IContainerButtonCategory {
  active?: boolean;
}
