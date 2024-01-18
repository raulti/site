import { format, parseISO } from 'date-fns';// eslint-disable-line
import { ptBR  } from 'date-fns/locale';// eslint-disable-line

import React, { useState } from 'react';
import { FaFileAlt } from 'react-icons/fa';

import Image from 'next/image';

import { ISale } from '@/interfaces/ISale';

import theme from '@/styles/theme';

import ChangeOwnership from '../ChangeOwnership';
import Button from '../Form/Button';
import { Container } from './styles';
import Ticket from './Ticket';

interface ICardMyTicket {
  data: ISale;
}

const CardMyTicket: React.FC<ICardMyTicket> = ({ data }) => {
  const dateFormatRequest =
    data &&
    data?.created_at &&
    format(parseISO(data?.created_at), 'dd/MM/yyyy - HH:mm', {
      locale: ptBR,
    });

  const formatedSubtotal =
    data?.subtotal &&
    data?.subtotal?.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    });

  const formatedTax =
    data?.tax_value &&
    data?.tax_value?.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    });

  const formatedTotalValue =
    data?.total &&
    data?.total?.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    });

  const [changeOwnershipVisible, setChangeOwnershipVisible] = useState(false);
  const [changeOwnershipTicketCode, setChangeOwnershipTicketCode] =
    useState('');

  const [changeOwnershipTicketTitle, setChangeOwnershipTicketTitle] =
    useState('');

  const status = {
    pending: 'Pendente',
    processing: 'Em processamento',
    processed: 'Pago',
    canceled: 'Cancelado',
    denied: 'Negado',
  };
  // 'pending' | 'processing' | 'processed' | 'canceled' | 'denied'

  const paymentMethods = {
    pix: 'PIX',
    billing_title: 'Boleto',
    credit_card: 'Cartão de crédito',
  };

  return (
    <Container className="ticket-purchased-info">
      <div className="event-info">
        <div className="card-img">
          {data?.event?.image && (
            <Image
              src={data.event.image}
              width={197}
              height={112}
              objectFit="cover"
              objectPosition="center"
            />
          )}
        </div>
        <div className="text-info-event">
          <div>
            <h5>{data.event.name}</h5>
            <span>{data.event.formatedDate}</span>
          </div>
          <span>{data.event.formatedAddress}</span>
        </div>
      </div>

      <div className="status">
        <h5>Status:</h5>
        <p>{status[data.status]}</p>
      </div>

      {!changeOwnershipVisible ? (
        <>
          <div className="tickets">
            <h5>Ingressos:</h5>

            {data.tickets.map((ticket, index) => (
              <Ticket
                key={ticket.ticket_id}
                index={index}
                data={{ ...ticket, status: data.status }}
                ChangeOwnership={(codeTicket, titleTicket) => {
                  setChangeOwnershipTicketCode(codeTicket);
                  setChangeOwnershipTicketTitle(titleTicket);
                  setChangeOwnershipVisible(true);
                }}
              />
            ))}
          </div>

          <div className="purchase-details">
            <h5>Detalhes do pedido:</h5>

            <div className="row">
              <span className="title-purchase">Pedido {`#${data.id}`}</span>
              <span>{`Data do pedido: ${dateFormatRequest}`}</span>
            </div>

            <div className="values">
              <div className="row">
                <span>Valor dos ingressos:</span>
                <span>{formatedSubtotal}</span>
              </div>
              {data?.tax_value > 0 && (
                <div className="row">
                  <span>Total de taxas:</span>
                  <span>{formatedTax}</span>
                </div>
              )}

              <div className="row">
                <span>Valor total:</span>
                <span>{formatedTotalValue}</span>
              </div>
            </div>
          </div>

          <div className="payment-methods">
            <div className="row">
              <h5>Forma de pagamento:</h5>

              <p>{paymentMethods[data.payment_method]}</p>
            </div>

            {data.status === 'pending' && (
              <>
                {data.payment_method === 'billing_title' && (
                  <div className="row">
                    <p>Para realizar o pagamento faça o download do boleto:</p>

                    {data.reference_object.paymentLink[0] && (
                      <a
                        href={data.reference_object.paymentLink[0]}
                        target="blank"
                      >
                        Visualizar Boleto
                      </a>
                    )}
                  </div>
                )}
              </>
            )}
          </div>
        </>
      ) : (
        <ChangeOwnership
          code={changeOwnershipTicketCode}
          titleTicket={changeOwnershipTicketTitle}
          handlefinally={() => setChangeOwnershipVisible(false)}
        />
      )}
    </Container>
  );
};

export default CardMyTicket;
