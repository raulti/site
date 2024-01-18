import React from 'react';
import { useTransition } from 'react-spring';

import { IToastContainer } from '@/interfaces/components/Toast';

import { Container } from './styles';
import Toast from './Toast';

const ToastContainer: React.FC<IToastContainer> = ({ messages }) => {
  const messagesWithTransitions = useTransition(
    messages,
    message => message.id,
    {
      from: { right: '-120%', opacity: 0 },
      enter: { right: '0%', opacity: 1 },
      leave: { right: '-120%', opacity: 0 },
    },
  );
  return (
    <Container>
      {/* {messagesWithTransitions.map(({ item, key, props }) => ( */}
      {messages.map(item => (
        <Toast key={item.id} message={item} />
      ))}
      {/* ))} */}
    </Container>
  );
};

export default ToastContainer;
