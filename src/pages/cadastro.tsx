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

import { useToast } from '@/hooks/toast';
import api from '@/services/api';
import getValidationErrors from '@/utils/getvalidationsErrors';

import IFormSignUp from '@/interfaces/IFormSignUp';

import { schemaSignUp } from '@/schema/signUp';

import Button from '@/components/Form/Button';
import Checkbox from '@/components/Form/Checkbox';
import Input from '@/components/Form/InputAuth';
import TopHeader from '@/components/Header/Top';
import Metadata from '@/components/Metadata';

import { Container } from '@/styles/pages/Auth';

const SignUp: React.FC = () => {
  const router = useRouter();

  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [secureTextEntryConfirmation, setSecureTextEntryConfirmation] =
    useState(true);
  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback(
    async (formData: IFormSignUp) => {
      setLoading(true);
      try {
        await schemaSignUp.validate(formData, { abortEarly: false });

        await api.post('/register', formData);

        addToast({
          title: 'Sucesso',
          description: 'Conta criada com sucesso! Faça seu login e aproveite!',
          type: 'success',
          screen: 'register',
        });

        router.push('/login');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);

          if (err?.inner?.length === 1) {
            if (err.inner[0].path === 'TermsOfUse') {
              addToast({
                title: 'Falha no Cadastro',
                description: err.inner[0].message,
                type: 'error',
                screen: 'register',
              });

              return;
            }
          }

          addToast({
            title: 'Falha no Cadastro',
            description: 'Verifique seus dados',
            type: 'error',
            screen: 'register',
          });

          return;
        }

        addToast({
          title: 'Falha no Cadastro',
          description: 'Ocorreu um erro ao fazer Cadastro',
          type: 'error',
          screen: 'register',
        });
      } finally {
        setLoading(false);
      }
    },
    [addToast, router],
  );

  return (
    <>
      <Metadata data={{ title: 'Cadastro', index: false }} />

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

            <h4>Cadastro</h4>

            <Form ref={formRef} onSubmit={handleSubmit}>
              <Input id="name" name="name" placeholder="Nome" label="Nome" />

              <Input
                id="lastname"
                name="lastname"
                placeholder="Sobrenome"
                label="Sobrenome"
              />

              <Input
                id="email"
                name="email"
                placeholder="Email"
                label="Email"
              />

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

              <div className="link">
                <Checkbox name="TermsOfUse">
                  <p>
                    Concordo com os{' '}
                    <Link href="/files/Termos-e-Politicas-Easy.pdf">
                      <a target="blank">Termos de uso</a>
                    </Link>{' '}
                    da da Easy Ingressos
                  </p>
                </Checkbox>
              </div>

              <Button type="submit" typeButton="tertiary" loading={loading}>
                Criar minha conta
              </Button>
            </Form>
          </div>
        </section>
        {/* <div className="img-bg"> */}
        <Image
          src="/assets/auth/bg-sign-up.webp"
          blurDataURL="/assets/auth/bg-sign-up.webp"
          placeholder="blur"
          alt="bg-sign-up"
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

export default SignUp;

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
