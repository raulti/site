import React, { useCallback, useRef } from 'react';
import { FaSearch } from 'react-icons/fa';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import { useRouter } from 'next/router';

import Input from '@/components/Form/Input';

const FormSearch: React.FC = () => {
  const router = useRouter();
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    (data: { search: string }) => {
      router.push(`/busca?keyword=${data.search}`);
    },
    [router],
  );

  return (
    <Form onSubmit={handleSubmit} ref={formRef}>
      <Input
        // placeholder="Pequise por eventos..."
        placeholder="Pequisar..."
        name="search"
        typeVariation="secundary"
        icon={<FaSearch />}
      />
    </Form>
  );
};

export default FormSearch;
