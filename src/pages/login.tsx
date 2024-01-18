import { parseCookies } from 'nookies';
import React, { useCallback, useRef, useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { FaArrowLeft } from 'react-icons/fa';
import * as Yup from 'yup';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import { GetServerSideProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { useAuth } from '@/hooks/auth';
import { useToast } from '@/hooks/toast';
import getValidationErrors from '@/utils/getvalidationsErrors';

import IFormLogin from '@/interfaces/IFormLogin';

import { schemaLogin } from '@/schema/login';

import Button from '@/components/Form/Button';
import Input from '@/components/Form/InputAuth';
import TopHeader from '@/components/Header/Top';
import Metadata from '@/components/Metadata';

import { Container } from '@/styles/pages/Auth';

const Login: React.FC = () => {
  const router = useRouter();
  const { redirect } = router.query;

  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();
  const { signIn } = useAuth();

  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleLogin = useCallback(
    async (formData: IFormLogin) => {
      setLoading(true);
      try {
        await schemaLogin.validate(formData, { abortEarly: false });

        await signIn(formData);
        if (redirect) {
          router.replace(`/${redirect}`);
        } else {
          router.replace('/');
        }
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);

          addToast({
            title: 'Falha no Login',
            description: 'Verifique seus dados',
            type: 'error',
            screen: 'login',
          });

          return;
        }

        addToast({
          title: 'Falha no Login',
          description: 'Ocorreu um erro ao fazer login',
          type: 'error',
          screen: 'login',
        });
      } finally {
        setLoading(false);
      }
    },
    [addToast, signIn, router, redirect],
  );

  return (
    <>
      <Metadata data={{ title: 'Login', index: false }} />

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

            <h4>Acesse sua conta</h4>

            <span>
              Novo por aqui?
              <Link href="/cadastro">Cadastre-se agora!</Link>
            </span>

            <Form ref={formRef} onSubmit={handleLogin}>
              <Input
                id="email"
                name="email"
                placeholder="Seu email..."
                label="Email"
              />
              <Input
                name="password"
                id="password"
                label="Senha"
                placeholder="Sua senha..."
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

              <div className="link">
                {/* <Checkbox name="keepConnected" label="Manter-me conectado" /> */}

                <div className="forgot">
                  <Link href="/recuperar-senha">Esqueceu sua senha?</Link>
                </div>
              </div>

              <Button type="submit" typeButton="tertiary" loading={loading}>
                Entrar
              </Button>
            </Form>
            {/*
            <div className="login-social">
              <div className="or-enter-with">
                <hr />
                <span>ou entre com</span>
                <hr />
              </div>

              <div className="buttons">
                <button type="button">
                  <Image
                    src="/assets/auth/g.webp"
                    alt="Google"
                    width={16}
                    height={16}
                  />
                  <p className="google">Conta Google</p>
                </button>
                <button type="button">
                  <Image
                    src="/assets/auth/f.webp"
                    alt="Google"
                    width={16}
                    height={16}
                  />
                  <p className="facebook">Facebook</p>
                </button>
              </div>
            </div> */}
          </div>
        </section>

        {/* <div className="img-bg"> */}
        <Image
          src="/assets/auth/bg-login.webp"
          blurDataURL="/assets/auth/bg-login.webp"
          placeholder="blur"
          alt="bg-login"
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

export default Login;

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { 'easy.token': token } = parseCookies(ctx);

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
