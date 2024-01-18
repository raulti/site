import React, { useCallback, useState } from 'react';
import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa';

import Link from 'next/link';

import { useToast } from '@/hooks/toast';

import { Container } from './styles';

interface ICardTicket {
  data: {
    name: string;
    value: number;
    taxa?: string;
    type?: string;
    lote: string;
    tickets_available?: number;
  };

  // onHandleAdd(): void;
  // onHandleMinus(): void;
  onHandleQtd(value: number, text: string): void;
}

const CardTicket: React.FC<ICardTicket> = ({
  data,
  // onHandleAdd,
  // onHandleMinus,
  onHandleQtd,
}) => {
  const [qtd, setQtd] = useState<any>(0);
  const { addToast } = useToast();

  const formattedPrice = data.value?.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });

  const types = {
    normal: { text: 'Inteira' },
    half: { text: 'Meia Entrada' },
    courtesy: { text: 'Cortesia' },
    table: { text: 'Mesa' },
  };

  const text = `${data.name} (${data.lote}) ${
    data?.type && types[data.type].text
  }`;

  const handleAdd = useCallback(() => {
    setQtd(state => {
      const newQtd = state + 1;

      onHandleQtd(newQtd, text);
      return newQtd;
    });
  }, [onHandleQtd, text]);

  const handleMinus = useCallback(() => {
    setQtd(state => {
      onHandleQtd(state - 1, text);
      return state - 1;
    });
  }, [onHandleQtd, text]);

  const handleInput = useCallback(
    v => {
      if (data.tickets_available >= v) {
        setQtd(v);
        onHandleQtd(v, text);
      } else if (v > data.tickets_available) {
        setQtd(data.tickets_available);
        onHandleQtd(data.tickets_available, text);

        addToast({
          title: `Apenas ${data.tickets_available} ingressos restantes.`,
          type: 'info',
          screen: 'ProductOpen',
        });
      }
    },
    [onHandleQtd, text, data.tickets_available, addToast],
  );

  return (
    <Container className="card-ticket">
      <div className="title-cads">
        <h5>
          {data.name} ({data.lote})
        </h5>
        {/* <Link href="/">Detalhes</Link> */}
        {data?.type && <small>{types[data.type].text}</small>}
      </div>
      <div className="value">
        <span>{formattedPrice} </span>
        {/* <small> (+35,96 taxa)</small> */}
      </div>
      <div className="parcel-and-qtd">
        {/* <span className="parcel">em até 10x de {formattedDividedValue}</span> */}
        <span className="parcel" />
        {data.tickets_available !== 0 ? (
          <div className="qtd">
            <button type="button" onClick={handleMinus} disabled={qtd === 0}>
              <FaMinusCircle size={18} />
            </button>

            <input value={qtd} onChange={e => handleInput(e.target.value)} />

            <button
              type="button"
              onClick={handleAdd}
              disabled={data.tickets_available < qtd + 1}
            >
              <FaPlusCircle size={18} />
            </button>
          </div>
        ) : (
          <span className="sold-off">Esgotado </span>
        )}
      </div>
    </Container>
  );
};

export default CardTicket;
