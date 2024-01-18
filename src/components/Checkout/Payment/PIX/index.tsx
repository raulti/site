import React, { useState } from 'react';

import { Scope } from '@unform/core';

import InputMask from '@/components/Form/InputMask';

import { Container, NumberIcon } from './styles';

const PIX: React.FC = () => {
  const [maskPhone, setMaskPhone] = useState('(99) 99999-9999');
  return (
    <Container>
      <div className="title-content">
        <h5>Dados do pagador</h5>
      </div>

      <Scope path="customer">
        <InputMask
          id="cpf"
          name="cpf"
          placeholder="CPF"
          mask="999.999.999-99"
        />

        <InputMask
          id="phone"
          name="phone"
          placeholder="Telefone"
          type="tel"
          mask={maskPhone}
          onBlur={e => {
            if (e.target.value.replace('_', '').length === 14) {
              setMaskPhone('(99) 9999-9999');
            }
          }}
          onFocus={e => {
            if (e.target.value.replace('_', '').length === 14) {
              setMaskPhone('(99) 99999-9999');
            }
          }}
        />
      </Scope>

      <div className="step">
        <NumberIcon>
          <span>1</span>
        </NumberIcon>
        <p>
          {`Após a finalização do pedido, abra o app do banco de sua preferência.
          Escolha a opção pagar com código Pix "copia e cola", ou código QRcode.`}
        </p>
      </div>

      <div className="step">
        <NumberIcon>
          <span>2</span>
        </NumberIcon>
        <p>
          Copie e cole o código, ou escaneie o código QRcode com a câmera do seu
          celular.
        </p>
      </div>

      <div className="step">
        <NumberIcon>
          <span>3</span>
        </NumberIcon>
        <p>
          Você vai receber a confirmação de pagamento no seu e-mail. E pronto!
        </p>
      </div>
    </Container>
  );
};

export default PIX;
