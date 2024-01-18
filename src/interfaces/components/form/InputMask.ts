import { Props as InputProps } from 'react-input-mask';

export interface IInputMaskProps extends InputProps {
  id?: string;
  name: string;
  placeholder?: string;
  label?: string;
  width?: number;
  typeVariation?: 'primary' | 'secundary' | 'ternary';

  getValue?(v: string): void;
}
