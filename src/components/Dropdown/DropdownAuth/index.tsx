import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { useAuth } from '@/hooks/auth';

import Button from '@/components/Form/Button';

import { Container, ItemList } from './styles';

const DropdownAuth: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { user, signOut } = useAuth();
  const { route } = useRouter();

  return (
    <Container
      className="dropdown"
      onMouseLeave={() => setOpen(false)}
      open={open}
    >
      <button type="button" onMouseEnter={() => setOpen(true)}>
        {user?.name} <FaChevronDown size={12} />
      </button>

      <ItemList open={open}>
        <Link href="/minha-conta/informacao-pessoais">
          <Button
            typeButton={
              route === '/minha-conta/informacao-pessoais'
                ? 'tertiary'
                : 'secondary'
            }
            disabled={route === '/minha-conta/informacao-pessoais'}
          >
            Informações pessoais
          </Button>
        </Link>
        <Link href="/minha-conta/meus-ingressos">
          <Button
            typeButton={
              route === '/minha-conta/meus-ingressos' ? 'tertiary' : 'secondary'
            }
            disabled={route === '/minha-conta/meus-ingressos'}
          >
            Meus ingressos
          </Button>
        </Link>

        <div className="sign-out-div">
          <button type="button" className="sign-out" onClick={() => signOut()}>
            Sair
          </button>
        </div>

        {/* <Link href="/minha-conta/organizador">
          <Button
            typeButton={
              route === '/minha-conta/organizador' ? 'tertiary' : 'secondary'
            }
            disabled={route === '/minha-conta/organizador'}
          >
            Organizador
          </Button>
        </Link> */}
      </ItemList>
    </Container>
  );
};

export default DropdownAuth;
