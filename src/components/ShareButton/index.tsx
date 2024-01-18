import React, { useState } from 'react';
import { FaEnvelope, FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import { FiShare2 } from 'react-icons/fi';
import {
  EmailShareButton,
  FacebookShareButton,
  WhatsappShareButton,
} from 'react-share';

import { IShareButton } from '@/interfaces/components/ShareButton';

import { Container } from './styles';

const ShareButton: React.FC<IShareButton> = ({ link, ...rest }) => {
  const [active, setActive] = useState(false);

  return (
    <Container className="share-button" active={active} {...rest}>
      <div className="wrapper">
        <button
          className="btn"
          type="button"
          onClick={() => setActive(state => !state)}
        >
          <FiShare2 size={25} />
        </button>

        <ul className="list">
          <li className="item">
            <FacebookShareButton url={link} className="facebook">
              <FaFacebookF />
            </FacebookShareButton>
          </li>
          <li className="item">
            <WhatsappShareButton url={link} className="whatsapp">
              <FaWhatsapp size={25} />
            </WhatsappShareButton>
          </li>
          <li className="item">
            <EmailShareButton url={link} className="email">
              <FaEnvelope />
            </EmailShareButton>
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default ShareButton;
