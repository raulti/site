import React, { useState } from 'react';

import { Scope } from '@unform/core';

import getAddress from '@/utils/getAddress';

import Input from '@/components/Form/Input';
import InputMask from '@/components/Form/InputMask';

interface IAddress {
  uf: string;
  city: string;
  district: string;
  street: string;
}

const BillingTitle: React.FC = () => {
  const [maskPhone, setMaskPhone] = useState('(99) 99999-9999');
  const [address, setAddress] = useState<IAddress>();

  return (
    <>
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

      {/* <p>Conclua sua compra para visualizar o boleto!</p> */}

      <div className="title-content">
        <h5>Endereço da fatura</h5>
      </div>

      <Scope path="address">
        <InputMask
          name="zipcode"
          placeholder="CEP"
          type="zip-code"
          mask="99999-999"
          onBlur={async e => {
            if (e.target.value && e.target.value.length === 9) {
              const patchAddress = await getAddress(e.target.value);
              setAddress(patchAddress);
            }
          }}
        />
        <Input
          name="street"
          placeholder="Rua"
          value={address ? address.street : ''}
        />
        <div className="row">
          <Input name="number" placeholder="Numero" width={29} />
          <Input
            name="district"
            placeholder="Bairro"
            width={69}
            value={address ? address.district : ''}
          />
        </div>
        <div className="row">
          <Input
            name="city"
            placeholder="Cidade"
            width={69}
            value={address ? address.city : ''}
          />
          <Input
            name="uf"
            placeholder="UF"
            maxLength={2}
            width={29}
            value={address ? address.uf : ''}
          />
        </div>
      </Scope>
    </>
  );
};

export default BillingTitle;
