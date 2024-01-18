import React, { useCallback, useRef, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { FaCaretDown, FaChevronDown, FaSearch } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import { getCookie } from 'cookies-next';
import Image from 'next/image';
import Link from 'next/link';

import { useAuth } from '@/hooks/auth';

import Button from '@/components/Form/Button';

import Dropdown from '../Dropdown';
import DropdownAuth from '../Dropdown/DropdownAuth';
import Input from '../Form/Input';
import FormSearch from './FormSearch';
import { Container, Content, MenuButton } from './styles';
import Top from './Top';

const CustomComponent = React.forwardRef((props, ref: any) => (
  <a ref={ref} {...props}>
    <Image
      src="/assets/header/logo.png"
      blurDataURL="/assets/header/logo.png"
      placeholder="blur"
      alt="Rise"
      quality={100}
      width={217}
      height={60}
      priority
    />
  </a>
));

const Header: React.FC = ({ ...rest }) => {
  const { user } = useAuth();

  const [visible, setVisible] = useState(false);

  const handleMenu = useCallback(() => {
    setVisible(state => !state);
  }, []);

  const helpDropdownItens = [
    {
      id: 1,
      element: (
        <Link href="/files/Termos-e-Politicas-Easy.pdf">
          <button type="button" onClick={() => handleMenu()}>
            Termos e políticas
          </button>
        </Link>
      ),
    },
    {
      id: 2,
      element: (
        <Link href="/faq">
          <button type="button" onClick={() => handleMenu()}>
            Perguntas frequêntes
          </button>
        </Link>
      ),
    },
  ];

  return (
    <Container {...rest}>
      <Top />

      <Content menuOpened={visible}>
        <div className="logo">
          <Link href="/" passHref>
            <CustomComponent />
          </Link>
        </div>

        <FormSearch />

        <MenuButton menuOpened={visible} onClick={handleMenu}>
          <FiMenu />
          <AiOutlineClose />
        </MenuButton>

        <nav>
          {/* <Dropdown
            menuName="Área do Organizador"
            items={organizerAreaDropdownItens}
          /> */}
          <Link href="/area-do-organizador">Área do Organizador</Link>
          <Dropdown menuName="Ajuda" items={helpDropdownItens} />
          {!user && <Link href="/login">Acessar minha conta</Link>}

          <div className="div-button">
            {!user ? (
              <Link href="/cadastro">
                <Button>Cadastre-se</Button>
              </Link>
            ) : (
              <DropdownAuth />
            )}
          </div>
        </nav>
      </Content>
    </Container>
  );
};

export default Header;
