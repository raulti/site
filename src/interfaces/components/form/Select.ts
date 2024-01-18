import { Props as SelectProps } from 'react-select';

export interface ISelectProps extends SelectProps {
  name: string;
  label?: string;
  typeVariation?: 'primary' | 'secundary' | 'ternary';
  isMulti?: any;
  textNoOptions?: string;
  placeholder?: string;

  options: IOptions[];
  width?: number;
}

interface IOptions {
  id?: number;
  value: string | number;
  label: string;
}
