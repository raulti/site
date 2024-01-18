import { ToastMessage } from '@/hooks/toast';

export interface IToastProps {
  message: ToastMessage;
  // style: object;
}

export interface IToastContainer {
  messages: ToastMessage[];
}
