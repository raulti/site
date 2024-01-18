import React, { useCallback, useEffect, useRef, useState } from 'react';
import Countdown from 'react-countdown';
import {
  FaArrowLeft,
  FaClock,
  FaCreditCard,
  FaFileAlt,
  FaShoppingBasket,
} from 'react-icons/fa';
import * as Yup from 'yup';

import { FormHandles, Scope } from '@unform/core';
import { Form } from '@unform/web';

import { deleteCookie, getCookie } from 'cookies-next';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

import { useAuth } from '@/hooks/auth';
import { useModalSucess } from '@/hooks/modelSucess';
import { useToast } from '@/hooks/toast';
import api from '@/services/api';
import getValidationErrors from '@/utils/getvalidationsErrors';

import IFormCheckout from '@/interfaces/IFormCheckout';
import { IData, IPurchaseList } from '@/interfaces/pages/FinalizingOrders';

import {
  schemaCheckoutBillingTitle,
  schemaCheckoutCreditCard,
  schemaCheckoutPix,
} from '@/schema/finalizingOrder';

import CardEventCheckout from '@/components/Checkout/CardEvent';
import BillingTitle from '@/components/Checkout/Payment/BillingTitle';
import CreditCard from '@/components/Checkout/Payment/CreditCard';
import PIX from '@/components/Checkout/Payment/PIX';
import Footer from '@/components/Footer';
import Button from '@/components/Form/Button';
import Checkbox from '@/components/Form/Checkbox';
import Input from '@/components/Form/Input';
import InputMask from '@/components/Form/InputMask';
import Header from '@/components/Header';
import Metadata from '@/components/Metadata';

import {
  CardForm,
  Container,
  InfoSubmitTicket,
  PIXIcon,
} from '@/styles/pages/Checkout';

import Pix from '@/assets/icons/pix.svg';

const Checkout: React.FC = () => {
  const router = useRouter();
  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();
  const { addModalSucess } = useModalSucess();

  const { user } = useAuth();

  const [maskPhone, setMaskPhone] = useState('(99) 99999-9999');
  const [brand, setBrand] = useState<undefined | string>();

  const purchaseData = getCookie('easy.purchase');
  const [dataParsed, setDataParsed] = useState<IData>();

  const [purchaseList, setPurchaseList] = useState<IPurchaseList[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (purchaseData) {
      const json = JSON.parse(purchaseData.toString());
      setDataParsed(json);

      setPurchaseList([]);

      json?.purchaseList.forEach(x => {
        setPurchaseList(state => [...state, ...new Array(x.qtd).fill(x)]);
      });
    }
  }, [purchaseData]);

  const formatTime = time => {
    return String(time).padStart(2, '0');
  };

  // Renderer callback with condition
  const renderer = ({ minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      // return <Completionist />;
    }
    // Render a countdown
    return (
      <>
        {minutes}:{formatTime(seconds)}
      </>
    );
  };

  const [sessionId, setSessionId] = useState('');
  const [typePayment, setTypePayment] = useState<
    'credit_card' | 'debit_card' | 'billing_title' | 'pix' | ''
  >('');

  const totalValue = dataParsed?.purchaseList.reduce(
    (previousValue, x) => previousValue + x.totalValue,
    0,
  );

  const totalValueWithTax =
    totalValue + (totalValue * dataParsed?.taxPercent) / 100;

  const [installmentSelected, setInstallmentSelected] = useState({
    id: 1,
    label: `${1}x ${totalValue}`,
    value: totalValue,
  });

  useEffect(() => {
    api.get('session').then(x => {
      setSessionId(x.data.session);
    });
  }, []);

  const handleSubmit = useCallback(
    async (formData: IFormCheckout) => {
      setLoading(true);
      try {
        let paymentData;

        if (typePayment === '') {
          addToast({
            title: 'Selecione o metodo de pagamento',
            type: 'info',
            screen: 'checkout',
          });

          return;
        }

        if (typePayment === 'billing_title') {
          await schemaCheckoutBillingTitle.validate(formData, {
            abortEarly: false,
          });

          paymentData = {
            installments: 1,
            installment_value: totalValueWithTax
              ? totalValueWithTax.toFixed(2)
              : '0.00',
            session: sessionId,
          };
        }

        if (typePayment === 'credit_card') {
          await schemaCheckoutCreditCard.validate(formData, {
            abortEarly: false,
          });

          const responseTokenCard = await api.post('/get-token-card', {
            sessionId,
            amount: totalValueWithTax,
            cardNumber: formData.card?.number,
            cardBrand: brand,
            cardCvv: formData.card?.securityCode,
            cardExpirationMonth: formData.card?.expMonth,
            cardExpirationYear: formData.card?.expYear,
          });

          paymentData = {
            installments: installmentSelected?.id || 1,
            installment_value: installmentSelected?.value
              ? installmentSelected?.value.toFixed(2)
              : '0.00',

            session: sessionId,
            token: responseTokenCard.data.cardToken,
            holder: formData.card?.holder,
            ...formData.customer,
          };
        }

        if (typePayment === 'pix') {
          await schemaCheckoutPix.validate(formData, {
            abortEarly: false,
          });

          paymentData = {
            session: sessionId,
          };
        }

        const response = await api.post('/sales', {
          origin: 'site',
          payment_method: typePayment,
          paymentData,
          address: formData?.address,
          customer: formData.customer,
          items: formData.ticket,
        });

        deleteCookie('easy.purchase');

        addModalSucess(typePayment, response.data.data);
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);

          addToast({
            title: 'Falha ao fazer seu pedido',
            description: 'Verifique seus dados',
            type: 'error',
            screen: 'checkout',
          });

          return;
        }

        if (err?.response?.data) {
          addToast({
            type: 'error',
            title: 'Erro!',
            description:
              err.response?.errors?.length > 0
                ? err.response?.errors[0]?.message
                : err.response?.data?.message,
            screen: 'checkout',
          });

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro!',
          description: 'Ocorreu um erro ao fazer seu pedido',
          screen: 'checkout',
        });
      } finally {
        setLoading(false);
      }
    },
    [
      addToast,
      addModalSucess,
      installmentSelected,
      sessionId,
      typePayment,
      brand,
      totalValueWithTax,
    ],
  );

  return (
    <>
      <Metadata data={{ title: 'Minha conta', index: false }} />

      <Header />

      <main>
        <Container>
          <section>
            <div className="header-checkout">
              <button type="button" onClick={() => router.back()}>
                <FaArrowLeft />
                Voltar
              </button>

              <div className="time-close">
                <p>Tempo restante para finalizar sua compra:</p>
                <span>
                  <FaClock />
                  <Countdown
                    date={Date.now() + 900000}
                    renderer={renderer}
                    zeroPadTime={2}
                  />
                </span>
              </div>
            </div>

            <div className="content">
              <Form
                ref={formRef}
                onSubmit={handleSubmit}
                autoComplete="off"
                autoCorrect="off"
                className="col-1"
              >
                <CardEventCheckout data={dataParsed} />

                <CardForm status>
                  <div className="header-card-form">
                    {/* <FaCheckCircle size={18} /> */}
                    <h3>Sobre os participantes</h3>
                  </div>

                  {purchaseList.map((x, index) => (
                    <div
                      key={`${x.id}${index.toString()}`}
                      className="content-card-form"
                    >
                      <div className="title-content">
                        <h5>Ingresso {index + 1}:</h5>
                        <h4>{x.text}</h4>
                      </div>
                      <Scope path={`ticket[${index}]`}>
                        <Input
                          id="block_id"
                          name="block_id"
                          placeholder=""
                          defaultValue={x.id}
                          style={{ display: 'none' }}
                        />
                        <Input
                          id="name"
                          name="name"
                          placeholder="Nome Completo"
                          autoComplete="false"
                        />
                        <Input
                          id="email"
                          name="email"
                          placeholder="Email"
                          type="email"
                          autoComplete="off"
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

                        <div className="row">
                          <InputMask
                            id="cpf"
                            name="cpf_rg"
                            width={56}
                            placeholder="CPF"
                            mask="999.999.999-99"
                            // onBlur={e => {
                            //   // if (e.target.value.replace('_', '').length < 11) {
                            //   //   setMaskDoc('99.999.999');
                            //   // } else {
                            //   setMaskDoc('999.999.999-99');
                            //   // }
                            // }}
                            // onFocus={() => {
                            //   setMaskDoc('99999999999');
                            // }}
                          />

                          {dataParsed.event.age_classification >= 18 && (
                            <Checkbox
                              name="ageOfMajority"
                              label="Sou maior de 18 anos"
                            />
                          )}
                        </div>
                      </Scope>
                      <hr />
                    </div>
                  ))}
                </CardForm>

                <CardForm status={false}>
                  <div className="header-card-form">
                    {/* <FaCheckCircle size={18} /> */}
                    <h3>Informações de pagamento</h3>
                  </div>
                  <div className="content-card-form">
                    <div className="title-content">
                      <h5>Selecione o método de pagamento</h5>
                    </div>

                    <div className="buttons">
                      <Button
                        typeButton={
                          typePayment === 'credit_card'
                            ? 'tertiary'
                            : 'secondary'
                        }
                        type="button"
                        onClick={() => setTypePayment('credit_card')}
                        disabled={typePayment === 'credit_card'}
                      >
                        <FaCreditCard /> Cartão de crédito
                      </Button>

                      <Button
                        typeButton={
                          typePayment === 'billing_title'
                            ? 'tertiary'
                            : 'secondary'
                        }
                        type="button"
                        onClick={() => setTypePayment('billing_title')}
                        disabled={typePayment === 'billing_title'}
                      >
                        <FaFileAlt /> Boleto
                      </Button>

                      <Button
                        typeButton={
                          typePayment === 'pix' ? 'tertiary' : 'secondary'
                        }
                        type="button"
                        onClick={() => setTypePayment('pix')}
                        disabled={typePayment === 'pix'}
                      >
                        Pagar com
                        <PIXIcon active={typePayment === 'pix'}>
                          <Pix />
                        </PIXIcon>
                      </Button>
                    </div>

                    {typePayment === 'billing_title' && <BillingTitle />}

                    {typePayment === 'credit_card' && (
                      <CreditCard
                        sessionId={sessionId}
                        totalValue={totalValueWithTax}
                        setInstallmentSelected={setInstallmentSelected}
                        handleBrand={setBrand}
                      />
                    )}

                    {typePayment === 'pix' && <PIX />}
                  </div>
                </CardForm>

                <CardForm status={false}>
                  <div className="header-card-form">
                    <h3>Finalizar compra</h3>
                  </div>

                  <div className="content-card-form">
                    <Button
                      typeButton="primary"
                      type="submit"
                      loading={loading}
                    >
                      Comprar ingressos
                    </Button>
                  </div>
                </CardForm>
              </Form>

              <hr className="line" />

              <div className="col-2">
                <div className="selected-tickets">
                  <div className="title-ticket">
                    <FaShoppingBasket size={18} />
                    <h4>Revisão do pedido</h4>
                  </div>
                  <div className="description-purchase">
                    <div className="row-title">
                      <p>Qtd.</p>
                      <p>Descrição</p>
                      <p>Subtotal</p>
                    </div>

                    {dataParsed?.purchaseList.map(x => (
                      <div key={x.id} className="row">
                        <p>{x.qtd}</p>
                        <p>{x.text}</p>
                        <p>{x.formatedTotalValue}</p>
                      </div>
                    ))}
                  </div>

                  {dataParsed?.taxPercent !== 0 &&
                    dataParsed?.taxPercent !== null && (
                      <div className="taxa-purchase">
                        <p>{`Taxa administrativa ${dataParsed?.taxPercent}%:`}</p>
                        <div className="value">
                          <span>{dataParsed?.formatedTaxValue}</span>
                        </div>
                      </div>
                    )}

                  <div
                    className="total-purchase"
                    style={
                      dataParsed?.taxPercent === 0 ||
                      dataParsed?.taxPercent === null
                        ? { borderTopWidth: 2, borderTopRightRadius: 12 }
                        : {}
                    }
                  >
                    <p>Total:</p>
                    <div className="value">
                      <span>{dataParsed?.formatedTotalValueEnd}</span>
                    </div>
                  </div>

                  {/* <div className="div-info">
                    <div className="info-tax">
                      <FaInfoCircle />

                      <p>Entenda nossas taxas administrativas.</p>
                    </div>
                  </div> */}
                </div>

                {user.email && (
                  <InfoSubmitTicket>
                    <p>Os ingressos serão enviados para:</p>
                    <span>{user.email}</span>
                  </InfoSubmitTicket>
                )}
              </div>
            </div>
          </section>
        </Container>
      </main>

      <Footer />
    </>
  );
};

export default Checkout;

export const getServerSideProps: GetServerSideProps = async ctx => {
  const purchaseData = getCookie('easy.purchase', ctx);

  if (!purchaseData) {
    return {
      redirect: {
        destination: '/busca',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
