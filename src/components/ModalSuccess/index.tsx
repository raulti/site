import { format, parseISO, addSeconds } from 'date-fns'; // eslint-disable-line
import { ptBR  } from 'date-fns/locale';// eslint-disable-line
import React, { useCallback, useEffect, useState } from 'react';
import { FaFileAlt, FaRegCheckCircle } from 'react-icons/fa';

import Image from 'next/image';
import Link from 'next/link';

import { useModalSucess } from '@/hooks/modelSucess';
import { useToast } from '@/hooks/toast';

import { IModalSuccess } from '@/interfaces/components/ModalSuccess';

import theme from '@/styles/theme';

import Button from '../Form/Button';
import { Container, Content, ViwImgQRCode } from './styles';

const ModalSuccess: React.FC<IModalSuccess> = ({
  payment_method,
  data,
  visible,
}) => {
  const { removeModalSucess } = useModalSucess();
  const { addToast } = useToast();

  const [boletoUrl, setBoletoUrl] = useState<string | undefined>();
  const [imgPixUrl, setImgPixUrl] = useState<string | undefined>();
  const [codePix, setCodePix] = useState<string | undefined>();
  const [expirationDateFormatted, setExpirationDateFormatted] = useState<
    string | undefined
  >();

  useEffect(() => {
    if (!data) {
      return;
    }
    if (payment_method === 'billing_title') {
      if (data.reference_object.paymentLink) {
        setBoletoUrl(data.reference_object.paymentLink[0]);
      }
    }

    if (payment_method === 'pix') {
      if (data.reference_object) {
        if (data.reference_object.pixCopiaECola) {
          setCodePix(data.reference_object.pixCopiaECola);
        }
        if (data.reference_object.urlImagemQrCode) {
          setImgPixUrl(data.reference_object.urlImagemQrCode);
        }
        if (
          data.reference_object.calendario.expiracao &&
          data.reference_object.calendario.criacao
        ) {
          const dateAdd = addSeconds(
            parseISO(data.reference_object.calendario.criacao),
            data.reference_object.calendario.expiracao,
          );

          setExpirationDateFormatted(
            format(dateAdd, 'HH:mm', {
              locale: ptBR,
            }),
          );
        }
      }
    }
  }, [data, payment_method]);

  const copyKeyPIX = useCallback(async () => {
    if (!codePix) {
      return;
    }

    // Clipboard.setString(codePix);

    if ('clipboard' in navigator) {
      await navigator.clipboard.writeText(codePix);
    }
    document.execCommand('copy', true, codePix);

    removeModalSucess();

    addToast({
      title: 'Copiado',
      description: 'Chave PIX copiado para área de transferência',
      type: 'success',
      screen: 'success',
    });
  }, [addToast, codePix, removeModalSucess]);

  return (
    <Container visible={visible}>
      <Content>
        <FaRegCheckCircle size={60} color={theme.colors.primary} />

        <h4>Sucesso!</h4>

        <p>Pedido realizado com sucesso!</p>

        {payment_method === 'billing_title' && (
          <>
            <p>Para realizar o pagamento faça o download do boleto:</p>

            {boletoUrl && (
              <Button typeButton="primary">
                <a href={boletoUrl} target="blank">
                  <FaFileAlt size={20} color={theme.colors.white} />
                  {` Visualizar Boleto`}
                </a>
              </Button>
            )}
          </>
        )}

        {payment_method === 'pix' && (
          <>
            <p>Aguardando seu pagamento com o pix:</p>

            <ViwImgQRCode>
              {imgPixUrl && <Image src={imgPixUrl} height={150} width={150} />}
            </ViwImgQRCode>

            <p>{`Você tem até ${expirationDateFormatted} para pagar`}</p>

            <Button onClick={copyKeyPIX}>Copiar código PIX</Button>
          </>
        )}

        <button
          onClick={() => removeModalSucess()}
          type="button"
          className="back"
        >
          <Link href="/">Voltar</Link>
        </button>
      </Content>
    </Container>
  );
};

export default ModalSuccess;
