import React, { useCallback, useRef, useState } from 'react';
import * as Yup from 'yup';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import { GetStaticProps } from 'next';

import { useToast } from '@/hooks/toast';
import api from '@/services/api';
import getValidationErrors from '@/utils/getvalidationsErrors';

import IPageProps from '@/interfaces/pages/PageProps';

import CardAccordion from '@/components/CardAccordion';
import CardEventOrganizers from '@/components/CardEventOrganizers';
import Footer from '@/components/Footer';
import Button from '@/components/Form/Button';
import Input from '@/components/Form/Input';
import InputMask from '@/components/Form/InputMask';
import TextArea from '@/components/Form/TextArea';
import Header from '@/components/Header';
import Metadata from '@/components/Metadata';

import { Container } from '@/styles/pages/FAQ';

interface IFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const FAQ: React.FC<IPageProps<null>> = ({ data }) => {
  const props = data?.data?.props ? JSON.parse(data?.data?.props) : undefined;

  const content = props ? props?.find(x => x.key === 'page_content').value : '';

  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const [maskPhone, setMaskPhone] = useState('(99) 99999-9999');

  const handleSubmitContact = useCallback(
    async (formData: IFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome é obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          phone: Yup.string().required('Telefone é obrigatório'),
          message: Yup.string().required('Mensagem é obrigatória'),
        });

        await schema.validate(formData, {
          abortEarly: false,
        });

        await api.post('/contacts', {
          ...formData,
          phone: formData.phone.replace(/\D+/g, ''),
        });

        addToast({
          title: 'Sucesso!',
          description: 'Contato realizado com sucesso!',
          type: 'success',
          screen: 'faq',
        });

        formRef.current.reset();
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        }

        addToast({
          title: 'Erro no contato',
          description: 'Ocorreu um erro ao realizar seu contato',
          type: 'error',
          screen: 'faq',
        });
      }
    },
    [addToast],
  );

  return (
    <>
      <Metadata
        data={{
          ...data?.data?.metadata,
          image: data?.data?.image,
          index: true,
        }}
      />

      <Header />
      <Container>
        {/* <BannerPages
          data={{
            img: '/assets/faq/faq.webp',
            title: 'Ajuda',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa lacus in at sagittis amet elit id augue. Auctor dolor ullamcorper in auctor suscipit. Nulla.',
          }}
        /> */}

        <section className="content">
          <div className="div-faq">
            <h3>Perguntas frequentes</h3>

            {content?.questions &&
              content?.questions.map(x => (
                <CardAccordion key={x.id} title={x.question}>
                  {x.answer}
                </CardAccordion>
              ))}
          </div>

          <hr className="line" />

          <div className="div-form">
            <h3>Fale conosco</h3>
            <p>
              A equipe Easy Ingressos está a disposição para esclarecer todas as
              duvidas
            </p>

            <Form ref={formRef} onSubmit={handleSubmitContact}>
              <Input id="name" name="name" placeholder="Seu nome" />

              <Input id="email" name="email" placeholder="Seu email" />

              <InputMask
                id="phone"
                name="phone"
                placeholder="Seu Telefone"
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

              <TextArea id="message" name="message" placeholder="Mensagem" />

              <Button typeButton="tertiary" type="submit">
                Enviar mensagem
              </Button>
            </Form>
          </div>
        </section>

        <CardEventOrganizers />
      </Container>
      <Footer />
    </>
  );
};

export default FAQ;

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get('/pages/faq');

  return {
    props: {
      data: response.data,
    },
    revalidate: 86400, // 24h
  };
};
