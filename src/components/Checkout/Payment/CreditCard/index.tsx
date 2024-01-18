import React, { useCallback, useEffect, useState } from 'react';

import { Scope } from '@unform/core';

import api from '@/services/api';
import getAddress from '@/utils/getAddress';

import Input from '@/components/Form/Input';
import InputMask from '@/components/Form/InputMask';
import Select from '@/components/Form/Select';

interface IParam {
  totalValue: number;
  sessionId: string;
  setInstallmentSelected(v: Iitem): void;
  handleBrand(v: undefined | string): void;
}

interface Iitem {
  id: number;
  value: number;
  label: string;
}

interface IAddress {
  uf: string;
  city: string;
  district: string;
  street: string;
}

const CreditCard: React.FC<IParam> = ({
  totalValue,
  sessionId,
  setInstallmentSelected,
  handleBrand,
}) => {
  const [maskPhone, setMaskPhone] = useState('(99) 99999-9999');
  const [installments, setInstallments] = useState<Iitem[]>();
  const [address, setAddress] = useState<IAddress>();

  const [teste, setTeste] = useState<Iitem>();

  const getInstallments = useCallback(
    brandParam => {
      api
        .post('/get-installments', {
          sessionId,
          amount: totalValue,
          cardBrand: brandParam,
        })
        .then(res => {
          if (res.data.cardToken) {
            const installmentsResponse = res.data.cardToken[brandParam];

            setInstallments(
              installmentsResponse.map(
                (x: {
                  installmentAmount: number;
                  quantity: number;
                  totalAmount: number;
                  interestFree: boolean;
                }) => {
                  const formatedValue = x.installmentAmount?.toLocaleString(
                    'pt-br',
                    {
                      style: 'currency',
                      currency: 'BRL',
                    },
                  );

                  if (x.quantity === 1) {
                    setTeste({
                      id: x.quantity,
                      label: `${x.quantity}x ${formatedValue}`,
                      value: x.installmentAmount,
                    });

                    setInstallmentSelected({
                      id: x.quantity,
                      label: `${x.quantity}x ${formatedValue}`,
                      value: x.installmentAmount,
                    });
                  }

                  return {
                    id: x.quantity,
                    label: `${x.quantity}x ${formatedValue}`,
                    value: x.installmentAmount,
                  };
                },
              ),
            );
          }
        });
    },
    [sessionId, totalValue, setInstallmentSelected],
  );

  const getCardBrand = useCallback(
    cardNumberParam => {
      const cardNumberReplace = cardNumberParam.replace(/\s/g, '');

      if (cardNumberReplace.length < 15) {
        return;
      }

      api
        .post('/get-card-brand', { sessionId, cardNumber: cardNumberReplace })
        .then(res => {
          if (res?.data?.senderHash?.brand?.name) {
            handleBrand(res?.data?.senderHash?.brand?.name);
            getInstallments(res?.data?.senderHash?.brand?.name);
          }
        });
    },
    [sessionId, getInstallments, handleBrand],
  );

  // const handleSubmit = useCallback(
  //   async (formDataPayment: IformDataPayment) => {
  //     setLoading(true);
  //     try {
  //       formRef.current?.setErrors({});

  //       await schemaFinalizingOrderCard.validate(formDataPayment, {
  //         abortEarly: false,
  //       });

  //       const responseTokenCard = await api.post('/get-token-card', {
  //         sessionId,
  //         amount: totalValue,
  //         cardNumber: formDataPayment.card?.number,
  //         cardBrand: brand,
  //         cardCvv: formDataPayment.card?.securityCode,
  //         cardExpirationMonth: formDataPayment.card?.expMonth,
  //         cardExpirationYear: formDataPayment.card?.expYear,
  //       });

  //       navigation.navigate('CheckoutReview', {
  //         origin: 'app',
  //         payment_method: 'credit_card',
  //         items: formData.ticket,
  //         paymentData: {
  //           installments: installmentSelected?.id || 1,
  //           installment_value: installmentSelected?.value
  //             ? installmentSelected?.value.toFixed(2)
  //             : '0.00',
  //           installmentText: installmentSelected?.name,
  //           session: sessionId,
  //           token: responseTokenCard.data.cardToken,
  //           holder: formDataPayment.card?.holder,
  //           ...formDataPayment.customer,
  //         },
  //         address: formDataPayment.address,
  //         customer: formDataPayment.customer,
  //       });
  //     } catch (err: any) {
  //       if (err instanceof Yup.ValidationError) {
  //         const errors = getValidationErrors(err);
  //         formRef.current?.setErrors(errors);
  //         return;
  //       }

  //       addModal({
  //         type: 'error',
  //         title: 'Erro!',
  //         description: 'Ocorreu um erro ao fazer a compra!',
  //       });
  //     } finally {
  //       setLoading(false);
  //     }
  //   },
  //   [
  //     addModal,
  //     navigation,
  //     formData.ticket,
  //     installmentSelected,
  //     brand,
  //     sessionId,
  //     totalValue,
  //   ],
  // );

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

        <div className="row">
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
            width={49}
          />

          <Input
            id="birthday"
            name="birthday"
            placeholder="Data de nascimento"
            width={49}
            type="date"
          />
        </div>
      </Scope>

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

      <div className="title-content">
        <h5>Dados do Cartão</h5>
      </div>

      <Scope path="card">
        <Input name="holder" placeholder="Nome no Cartão" />

        <InputMask
          name="number"
          placeholder="Numero do Cartão"
          type="custom"
          mask="9999 9999 9999 9999"
          getValue={getCardBrand}
        />

        <div className="row">
          <Input
            name="expMonth"
            placeholder="Mês de expiração"
            type="number"
            width={49}
            min={1}
            max={12}
          />

          <Input
            name="expYear"
            placeholder="Ano de expiração"
            type="number"
            width={49}
            min={2023}
            max={9999}
          />
        </div>
        <Input
          name="securityCode"
          placeholder="Código de segurança"
          type="number"
        />
      </Scope>

      <Select
        name="installments"
        // label="Numero de parcelas"
        // value={teste}
        placeholder="Numero de parcelas"
        options={installments}
        // options={[
        //   {
        //     id: 1,
        //     value: 'string',
        //     label: 'string',
        //   },
        // ]}
        width={30}
        onChange={setInstallmentSelected}
        textNoOptions="Digite o numero do Cartão primeiro"
      />
    </>
  );
};

export default CreditCard;
