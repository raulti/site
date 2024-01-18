import { saveAs } from 'file-saver';
import React, { useEffect, useState } from 'react';
import { isBefore, parseISO, subDays } from 'date-fns';// eslint-disable-line
import { useToast } from '@/hooks/toast';
import api from '@/services/api';

import { ITicket } from '@/interfaces/ISale';

interface ITicketProps {
  index: number;
  data: ITicket;
  ChangeOwnership(codeTicket: string, titleTicket: string): void;
}

const Ticket: React.FC<ITicketProps> = ({ index, data, ChangeOwnership }) => {
  const formatedTotalValueTicket = data.total?.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });

  const [holderExchangeAvailable, setHolderExchangeAvailable] = useState(false);
  const { addToast } = useToast();

  const titleTicket = `${data.ticket.ticket_class?.name || ''} ${
    data.ticket.ticket_block?.name || ''
  } #${data.ticket_id}`;

  const downloadTicket = async (code: string) => {
    try {
      const ticket = await api.get(`/ticket/site-download/${code}`, {
        responseType: 'blob',
      });

      const blob = new Blob([ticket.data], {
        type: 'application/pdf',
      });

      return saveAs(blob, `ingresso-${code}.pdf`);
    } catch (err) {
      return addToast({
        type: 'error',
        title: 'Compra em processamento',
        description: 'Ingresso não autorizado para realizar o download.',
        screen: 'error',
      });
    }
  };

  useEffect(() => {
    if (!data?.ticket?.event?.due_date) {
      return;
    }

    const dateIsBefore = isBefore(
      new Date(),
      subDays(parseISO(data?.ticket.event.due_date), 2),
    );

    setHolderExchangeAvailable(dateIsBefore);
  }, [data?.ticket?.event?.due_date]);

  return (
    <div className="ticket">
      <span className="qtd">{index + 1}</span>

      <div className="title">
        <h5>{titleTicket}</h5>
        <span>{data.ticket.data.name}</span>
      </div>

      <div>
        <span className="value">{formatedTotalValueTicket}</span>
        {holderExchangeAvailable &&
          data.status !== 'canceled' &&
          data.status !== 'denied' && (
            <button
              type="button"
              onClick={() => {
                ChangeOwnership(data.ticket.code, titleTicket);
              }}
            >
              Alterar Tilularidade
            </button>
          )}
        {data.status === 'processed' && (
          <button
            type="button"
            onClick={() => {
              downloadTicket(data.ticket.code);
            }}
            style={{ textAlign: 'right', marginTop: '5px' }}
          >
            Baixar ingresso
          </button>
        )}
      </div>
    </div>
  );
};

export default Ticket;
