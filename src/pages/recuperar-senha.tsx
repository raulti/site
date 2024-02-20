import { destroyCookie, parseCookies } from 'nookies';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { FaArrowLeft } from 'react-icons/fa';
import * as Yup from 'yup';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import { GetServerSideProps } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { useToast } from '@/hooks/toast';
import api from '@/services/api';
import getValidationErrors from '@/utils/getvalidationsErrors';

import Button from '@/components/Form/Button';
import Input from '@/components/Form/InputAuth';
import TopHeader from '@/components/Header/Top';
import Metadata from '@/components/Metadata';

// import { Container } from './styles';
import { Container } from '@/styles/pages/Auth';

const RecoverPassword: React.FC = () => {
  const router = useRouter();
  const { addToast } = useToast();

  const formRef = useRef<FormHandles>(null);
  const formRefEmail = useRef<FormHandles>(null);
  const [loading, setLoading] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [secureTextEntryConfirmation, setSecureTextEntryConfirmation] =
    useState(true);

  const [token, setToken] = useState<undefined | string | string[]>();

  useEffect(() => {
    setToken(router.query.token);
  }, [router.query]);

  const handleSubmitEmail = useCallback(
    async (formData: { email: string }) => {
      setLoading(true);
      try {
        formRefEmail.current?.setErrors({});

        const schemas = Yup.object().shape({
          email: Yup.string()
            .email('Insira um e-mail válido')
            .required('O e-mail é obrigatório'),
        });

        await schemas.validate(formData, { abortEarly: false });

        await api.post('/password-reset', {
          email: formData.email,
          redirect_url: `https://easyingressos.com${router.asPath}`,
        });

        addToast({
          title: 'Sucesso!',
          description:
            'Você ira receber um link no seu email para redefinir sua senha',
          type: 'success',
          screen: 'password-reset',
        });

        router.push('/');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRefEmail.current?.setErrors(errors);
        }

        addToast({
          title: 'Falha na Recuperação da senha',
          description: 'Verifique seus dados',
          type: 'error',
          screen: 'RecoverPassword',
        });
      } finally {
        setLoading(false);
      }
    },
    [addToast, router],
  );

  const handleSubmitNewPassword = useCallback(
    async (
      formData: { password: string; password_confirmation: string },
      // token_recovery: string | string[],
    ) => {
      setLoading(true);
      try {
        formRefEmail.current?.setErrors({});

        const schemas = Yup.object().shape({
          password: Yup.string()
            .min(6, 'A senha precisa no mínimo 6 caracteres')
            .required('A senha é obrigatória'),
          password_confirmation: Yup.string()
            .required('Confirmar senha é obrigatório')
            .oneOf(
              [Yup.ref('password'), null],
              'A senha precisa ser igual a este campo',
            ),
        });

        await schemas.validate(formData, { abortEarly: false });

        await api.put('/password-reset', {
          ...formData,
          token_recovery: token,
        });

        addToast({
          title: 'Sucesso!',
          description: 'Nova senha criada com sucesso ',
          type: 'success',
          screen: 'password-reset',
        });

        router.push('/login');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRefEmail.current?.setErrors(errors);
        }

        addToast({
          title: 'Falha na Recuperação da senha',
          description: 'Verifique seus dados',
          type: 'error',
          screen: 'RecoverPassword',
        });
      } finally {
        setLoading(false);
      }
    },
    [router, addToast, token],
  );

  return (
    <>
      <Metadata data={{ title: 'Recuperar Senha', index: false }} />

      <header>
        <TopHeader />
      </header>

      <Container>
        <section className="content">
          <div className="form-login">
            <div className="img">
              <Image
                src="/assets/auth/logo.webp"
                blurDataURL="/assets/auth/logo.webp"
                placeholder="blur"
                alt="EASY Ingressos"
                width={202.2}
                height={63.25}
              />
            </div>

            <div className="back">
              <button type="button" onClick={() => router.back()}>
                <FaArrowLeft />
                <p>Voltar</p>
              </button>
            </div>

            {token ? (
              <>
                <h4>Criar uma nova senha:</h4>

                <Form ref={formRef} onSubmit={handleSubmitNewPassword}>
                  <Input
                    name="password"
                    id="password"
                    label="Senha"
                    placeholder="Senha"
                    type={secureTextEntry ? 'password' : 'text'}
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
                    label="Confirmar Senha"
                    placeholder="Confirmar Senha"
                    type={secureTextEntryConfirmation ? 'password' : 'text'}
                  >
                    <button
                      type="button"
                      onClick={() => {
                        setSecureTextEntryConfirmation(state => !state);
                      }}
                    >
                      {secureTextEntryConfirmation ? (
                        <AiOutlineEye size={20} />
                      ) : (
                        <AiOutlineEyeInvisible size={20} />
                      )}
                    </button>
                  </Input>

                  <Button type="submit" typeButton="tertiary">
                    Criar Nova Senha
                  </Button>
                </Form>
              </>
            ) : (
              <>
                <h4>Recuperar minha senha</h4>

                <span>
                  Informe o e-mail de cadastro para receber as instruções de
                  mudança de senha.
                </span>

                <Form ref={formRef} onSubmit={handleSubmitEmail}>
                  <Input
                    id="email"
                    name="email"
                    placeholder="Email"
                    label="Email"
                  />

                  <Button type="submit" typeButton="tertiary" loading={loading}>
                    Enviar
                  </Button>
                </Form>
              </>
            )}

            <div className="back">
              <button type="button" onClick={() => router.back()}>
                <p>Cancelar</p>
              </button>
            </div>
          </div>
        </section>
        {/* <div className="img-bg"> */}
        <Image
          src="/assets/auth/bg-recover-password.webp"
          blurDataURL="/assets/auth/bg-recover-password.webp"
          placeholder="blur"
          alt="bg-recover-password"
          layout="fill"
          objectFit="contain"
          objectPosition="right"
          className="img-bg"
        />
        {/* </div> */}
      </Container>
    </>
  );
};

export default RecoverPassword;

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { 'easy.token': token } = parseCookies(ctx);

  const tokenQuery = ctx.query.token;

  if (tokenQuery) {
    delete api.defaults.headers.Authorization;

    destroyCookie(ctx, 'easy.token');

    return {
      props: {},
    };
  }

  if (token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
