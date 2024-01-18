import { parseCookies } from 'nookies';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { format, parseISO } from 'date-fns';// eslint-disable-line
import { ptBR } from 'date-fns/locale';// eslint-disable-line

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

import { useAuth } from '@/hooks/auth';
import { useToast } from '@/hooks/toast';
import api from '@/services/api';

import Footer from '@/components/Footer';
import Button from '@/components/Form/Button';
import Input from '@/components/Form/InputAuth';
import Header from '@/components/Header';
import MenuLateral from '@/components/MenuLateral';
import Metadata from '@/components/Metadata';

import { Container } from '@/styles/pages/MyAccount/InformationPeople';

interface IData {
  birthday: string;
}
const InformationPeople: React.FC = () => {
  const router = useRouter();
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const { user } = useAuth();

  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [secureTextEntryConfirm, setSecureTextEntryConfirm] = useState(true);
  const [maskPhone, setMaskPhone] = useState('(99) 99999-9999');
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState<IData>();

  const [alterPassword, setAlterPassword] = useState(false);

  useEffect(() => {
    if (!user) {
      return;
    }

    api.get('/me').then(x => {
      const birthdaySplit = x.data.data?.birthday?.split('Z');
      const birthdayFormat =
        birthdaySplit?.length > 1 &&
        format(parseISO(birthdaySplit[0]), 'yyyy-MM-dd');

      setData({
        ...x.data.data,
        birthday: birthdayFormat,
      });
    });
  }, [user]);

  const handleSubmit = useCallback(
    async formData => {
      setLoading(true);
      try {
        await api.put('/me', {
          ...formData,
          mobile_phone: formData.mobile_phone.replace(/\D+/g, ''),
          cpf: formData.cpf.replace(/\D+/g, ''),
        });

        addToast({
          title: 'Sucesso!',
          description: 'Dados atualizados com suecesso!',
          type: 'success',
          screen: 'register',
        });
      } catch (err) {
        addToast({
          title: 'Falha na atualização dos dados',
          description: 'Ocorreu um erro ao atualizar Cadastro',
          type: 'error',
          screen: 'register',
        });
      } finally {
        setLoading(false);
      }
    },
    [addToast],
  );

  const handleNewPassword = useCallback(
    async formData => {
      setLoading(true);
      try {
        await api.put('/me', formData);

        setAlterPassword(true);

        addToast({
          title: 'Sucesso!',
          description: 'Senha atualizada com suecesso!',
          type: 'success',
          screen: 'register',
        });
      } catch (err) {
        addToast({
          title: 'Falha na atualização da senha',
          description: 'Ocorreu um erro ao atualizar senha',
          type: 'error',
          screen: 'register',
        });
      } finally {
        setLoading(false);
      }
    },
    [addToast],
  );

  return (
    <>
      <Metadata data={{ title: 'Minha conta', index: false }} />

      <Header />

      <main>
        <Container>
          <section>
            <MenuLateral screen="informacao-pessoais" />

            <div className="content">
              <div className="buttons-header">
                <button
                  type="button"
                  onClick={() =>
                    !alterPassword ? router.back() : setAlterPassword(false)
                  }
                >
                  Cancelar
                </button>
                <Button
                  typeButton="primary"
                  onClick={() => formRef.current.submitForm()}
                  loading={loading}
                >
                  Salvar Alterações
                </Button>
              </div>
              <div className="content-form">
                <h5>
                  {!alterPassword ? 'Informações pessoais' : 'Alterar Senha'}
                </h5>

                {!alterPassword ? (
                  <Form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    initialData={data}
                  >
                    <div className="row">
                      <Input
                        id="name"
                        name="name"
                        placeholder="Nome"
                        label="Nome"
                        // width={65.5}
                        width={30}
                        typeVariation="secundary"
                      />

                      <Input
                        id="lastname"
                        name="lastname"
                        placeholder="Sobrenome"
                        label="Sobrenome"
                        width={35.5}
                        typeVariation="secundary"
                      />

                      <Input
                        id="birthday"
                        name="birthday"
                        placeholder="Data de nascimento"
                        label="Data de nascimento"
                        type="date"
                        width={30.5}
                        typeVariation="secundary"
                      />
                    </div>

                    <div className="row">
                      <Input
                        id="cpf"
                        name="cpf"
                        label="CPF"
                        width={48}
                        // mask="999.999.999-99"
                        typeVariation="secundary"
                        placeholder="CPF"
                        // defaultValue={data?.cpf}
                      />

                      <Input
                        id="phone"
                        name="mobile_phone"
                        label="Celular"
                        placeholder="Celular"
                        width={48}
                        typeVariation="secundary"
                        type="tel"
                        // mask={maskPhone}
                        // onBlur={e => {
                        //   if (e.target.value.replace('_', '').length === 14) {
                        //     setMaskPhone('(99) 9999-9999');
                        //   }
                        // }}
                        // onFocus={e => {
                        //   if (e.target.value.replace('_', '').length === 14) {
                        //     setMaskPhone('(99) 99999-9999');
                        //   }
                        // }}
                      />
                    </div>

                    {/* <div className="row">
                    <Select
                      name="state"
                      label="Estado"
                      options={[
                        {
                          id: 1,
                          value: 'string',
                          label: 'string',
                        },
                      ]}
                      typeVariation="secundary"
                      width={30}
                    />
                    <Select
                      name="city"
                      label="Cidade"
                      options={[
                        {
                          id: 1,
                          value: 'string',
                          label: 'string',
                        },
                      ]}
                      typeVariation="secundary"
                      width={65.5}
                    />
                  </div> */}

                    <div className="row">
                      <Input
                        id="email"
                        name="email"
                        placeholder="Email"
                        label="Email"
                        // width={48}
                        typeVariation="secundary"
                        disabled
                      />
                      {/* <Input
                      name="password"
                      id="password"
                      label="Senha"
                      placeholder="Senha"
                      type={secureTextEntry ? 'password' : 'text'}
                      width={48}
                      typeVariation="secundary"
                      disabled
                    >
                      <button
                        type="button"
                        onClick={() => {
                          setSecureTextEntry(!secureTextEntry);
                        }}
                      >
                        {secureTextEntry ? (
                          <AiOutlineEye size={20} />
                        ) : (
                          <AiOutlineEyeInvisible size={20} />
                        )}
                      </button>
                    </Input> */}
                    </div>
                  </Form>
                ) : (
                  <Form
                    ref={formRef}
                    onSubmit={handleNewPassword}
                    initialData={data}
                  >
                    <Input
                      name="password"
                      id="password"
                      label="Nova Senha"
                      placeholder="Nova Senha"
                      type={secureTextEntry ? 'password' : 'text'}
                      width={50}
                      typeVariation="secundary"
                    >
                      <button
                        type="button"
                        onClick={() => {
                          setSecureTextEntry(state => !state);
                        }}
                      >
                        {secureTextEntry ? (
                          <AiOutlineEye size={20} />
                        ) : (
                          <AiOutlineEyeInvisible size={20} />
                        )}
                      </button>
                    </Input>

                    <Input
                      name="password_confirmation"
                      id="password_confirmation"
                      label="Repetir Nova senha"
                      placeholder="Repetir Nova senha"
                      type={secureTextEntryConfirm ? 'password' : 'text'}
                      width={50}
                      typeVariation="secundary"
                    >
                      <button
                        type="button"
                        onClick={() => {
                          setSecureTextEntryConfirm(state => !state);
                        }}
                      >
                        {secureTextEntryConfirm ? (
                          <AiOutlineEye size={20} />
                        ) : (
                          <AiOutlineEyeInvisible size={20} />
                        )}
                      </button>
                    </Input>
                  </Form>
                )}
                {!alterPassword && (
                  <div className="link">
                    <button
                      type="button"
                      onClick={() => setAlterPassword(true)}
                    >
                      Alterar Senha
                    </button>
                  </div>
                )}
              </div>

              <div className="buttons-footer">
                <button
                  type="button"
                  onClick={() =>
                    !alterPassword ? router.back() : setAlterPassword(false)
                  }
                >
                  Cancelar
                </button>
                <Button
                  typeButton="primary"
                  onClick={() => formRef.current.submitForm()}
                  loading={loading}
                >
                  Salvar Alterações
                </Button>
              </div>
            </div>
          </section>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default InformationPeople;

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { 'easy.token': token } = parseCookies(ctx);

  if (!token) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
