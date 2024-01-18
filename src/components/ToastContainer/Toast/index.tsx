import React, { useEffect } from 'react';
import {
  FiAlertCircle,
  FiXCircle,
  FiCheckCircle,
  FiInfo,
} from 'react-icons/fi';

import { useToast } from '@/hooks/toast';

import { IToastProps } from '@/interfaces/components/Toast';

import Button from '@/components/Form/Button';

import { Container, ContentMessageSucesso, InfoSubmitTicket } from './styles';

const icons = {
  info: <FiInfo size={64} />,
  error: <FiAlertCircle size={64} />,
  success: <FiCheckCircle size={64} />,
};

const Toast: React.FC<IToastProps> = ({ message }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id);
    }, 50000);

    return () => {
      clearTimeout(timer);
    };
  }, [removeToast, message.id]);

  return (
    <Container
      $hasDescription={!!message.description}
      type={message.type}
      // style={style}
    >
      <div>
        {icons[message.type || 'info']}
        <strong className="title-toast">{message.title}</strong>

        {message.screen === 'finalizar-pedido' ? (
          <ContentMessageSucesso>
            <p>
              Lorem ipsum #79733 dolor sit amet, consectetur adipiscing elit. At
              blandit volutpat justo, felis nulla ut sed mattis feugiat.
              Pulvinar vel!
            </p>
            <InfoSubmitTicket>
              <p>Os ingressos serão enviados para:</p>
              <span>anapaula@email.com.br</span>
            </InfoSubmitTicket>

            <Button typeButton="secondary">Ver pedido</Button>

            <button
              type="button"
              className="back"
              onClick={() => removeToast(message.id)}
            >
              voltar
            </button>
          </ContentMessageSucesso>
        ) : (
          <>
            <p>{message.description}</p>

            <Button
              typeButton="secondary"
              onClick={() => removeToast(message.id)}
            >
              voltar
            </Button>
          </>
        )}
      </div>
    </Container>
  );
};

export default Toast;
