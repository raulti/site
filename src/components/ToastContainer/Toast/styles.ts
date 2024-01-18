import { animated } from 'react-spring';
import styled, { css } from 'styled-components';

interface ToastProps {
  type?: 'success' | 'error' | 'info';
  $hasDescription: boolean;
}

const toastTypeVariations = {
  info: css`
    color: #3172b7;
  `,
  success: css`
    color: #f58634;
  `,
  error: css`
    color: #f58634;
  `,
};

export const Container = styled(animated.div)<ToastProps>`
  width: 100vw;
  height: 100vh;

  position: relative;
  padding: 16px 40px 16px 16px;
  border-radius: 10px;
  background: rgba(250, 250, 250, 0.85);
  backdrop-filter: blur(24px);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & + div {
    margin-top: 8px;
  }

  ${props => toastTypeVariations[props.type || 'info']}

  > svg {
    margin: 4px 12px 0 0;
  }

  > div {
    flex: 1;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .title-toast {
      font-weight: 400;
      font-size: 64px;
      line-height: 77px;
      text-align: center;

      color: #f58634;
    }

    p {
      margin: 20px 0;

      font-size: 14px;
      opacity: 0.8;
      line-height: 20px;
    }
  }

  button {
    background: transparent;
  }

  .back {
    margin-top: 32px;
    border: 0;
    background: transparent;
    color: inherit;

    font-weight: 600;
    font-size: 16px;
    line-height: 24px;

    text-align: center;
    text-decoration-line: underline;

    color: #5f6266;
  }

  ${props =>
    !props.$hasDescription &&
    css`
      align-items: center;

      svg {
        margin-top: 0;
      }
    `}
`;

export const InfoSubmitTicket = styled.div`
  max-width: 335px;
  width: 100%;
  border: 2px solid #d9d9d9;
  border-radius: 24px;

  padding: 12px 30px;

  margin-top: 16px;

  p {
    margin: 20px 0;

    font-weight: 700;
    font-size: 16px;
    line-height: 32px;

    color: #5f6266;
  }

  span {
    font-weight: 400;
    font-size: 16px;
    line-height: 32px;

    color: #212d47;
  }
`;

export const ContentMessageSucesso = styled.div`
  width: 467px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 20px 0;

  > p {
    font-weight: 400;
    font-size: 1.25em;
    line-height: 24px;
    text-align: center;

    color: #5f6266;
    margin-bottom: 32px;
  }

  > div {
    margin-bottom: 50px;
  }
`;
