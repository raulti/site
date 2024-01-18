import React, { useCallback, useRef, useState } from 'react';
import * as Yup from 'yup';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import { useRouter } from 'next/router';

import { useToast } from '@/hooks/toast';
import api from '@/services/api';
import getValidationErrors from '@/utils/getvalidationsErrors';

import { ChangeOwnershipUpSchema } from '@/schema/ChangeOwnership';

import Checkbox from '@/components/Form/Checkbox';
import Input from '@/components/Form/Input';
import InputMask from '@/components/Form/InputMask';

import Button from '../Form/Button';
import { Container } from './styles';

interface IChangeOwnership {
  code: string;
  titleTicket: string;
  handlefinally(): void;
}

const ChangeOwnership: React.FC<IChangeOwnership> = ({
  code,
  titleTicket,
  handlefinally,
}) => {
  const formRef = useRef<FormHandles>(null);

  const router = useRouter();

  const { addToast } = useToast();

  const [loading, setLoading] = useState(false);
  const [maskPhone, setMaskPhone] = useState('(99) 99999-9999');
  const [maskDoc, setMaskDoc] = useState('999.999.999-99');

  const handleSubmit = useCallback(
    async formdata => {
      setLoading(true);
      try {
        formRef.current?.setErrors({});

        await ChangeOwnershipUpSchema.validate(formdata, {
          abortEarly: false,
        });

        await api.post(`/tickets/${code}/transfer`, {
          ticket_data: formdata,
        });

        router.push('/');

        addToast({
          title: 'Sucesso!',
          description: 'Titularidade alterada com sucesso!',
          type: 'success',
          screen: 'ChangeOwnership',
        });
      } catch (err: any) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        if (err?.response?.data) {
          addToast({
            type: 'error',
            title: 'Erro!',
            description:
              err.response.data?.errors?.length > 0
                ? err.response.data?.errors[0]?.message
                : err.response.data?.message,
            screen: 'ChangeOwnership',
          });

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro!',
          description: 'Ocorreu um erro ao tentar realizar a troca!',
          screen: 'ChangeOwnership',
        });
      } finally {
        setLoading(false);
      }
    },
    [addToast, code, router],
  );

  return (
    <Container>
      <div className="title-change-ownership">
        <h5>Trocar titular do ingresso:</h5>
        <p>{titleTicket}</p>
      </div>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input id="name" name="name" placeholder="Nome Completo" width={50} />

        <Input
          id="email"
          name="email"
          placeholder="Email"
          type="email"
          width={50}
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
          width={50}
        />

        <InputMask
          id="cpf"
          name="cpf_rg"
          width={50}
          placeholder="CPF"
          mask={maskDoc}
        />

        <Checkbox name="majorOfAge" label="Sou maior de 18 anos" />

        <Checkbox
          name="changeOwnership"
          label="Confirmar troca de titularidade"
        />

        <div className="buttons">
          <Button
            typeButton="primary"
            type="submit"
            loading={loading}
            width={50}
          >
            Alterar
          </Button>

          <button className="link" type="button" onClick={handlefinally}>
            Cancelar
          </button>
        </div>
      </Form>
    </Container>
  );
};

export default ChangeOwnership;
