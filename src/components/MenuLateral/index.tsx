import React from 'react';
import { FaUser } from 'react-icons/fa';

import Link from 'next/link';

import { useAuth } from '@/hooks/auth';

import Button from '../Form/Button';
import { Container } from './styles';

interface IProps {
  screen: 'informacao-pessoais' | 'meus-ingressos' | 'organizador';
}

const MenuLateral: React.FC<IProps> = ({ screen }) => {
  const { signOut } = useAuth();
  return (
    <Container className="menu">
      <div className="title-menu">
        <FaUser />
        <h4>Minha conta</h4>
      </div>

      <div className="buttons-menu">
        <Link href="/minha-conta/informacao-pessoais">
          <Button
            typeButton={
              screen === 'informacao-pessoais' ? 'tertiary' : 'secondary'
            }
            disabled={screen === 'informacao-pessoais'}
          >
            Informações pessoais
          </Button>
        </Link>
        <Link href="/minha-conta/meus-ingressos">
          <Button
            typeButton={screen === 'meus-ingressos' ? 'tertiary' : 'secondary'}
            disabled={screen === 'meus-ingressos'}
          >
            Meus ingressos
          </Button>
        </Link>
        {/* <Link href="/minha-conta/organizador">
          <Button
            typeButton={screen === 'organizador' ? 'tertiary' : 'secondary'}
            disabled={screen === 'organizador'}
          >
            Organizador
          </Button>
        </Link> */}

        <button type="button" className="sign-out" onClick={() => signOut()}>
          Sair
        </button>
      </div>
    </Container>
  );
};

export default MenuLateral;
