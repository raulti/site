import styled, { css } from 'styled-components';

import theme from '@/styles/theme';

interface IProps {
  visible: boolean;
}

export const Container = styled.div<IProps>`
  position: fixed;

  z-index: 999;

  margin: auto;
  inset: 0;

  transform: ${props => (props.visible ? `scale(1);` : `scale(0);`)};

  ${props =>
    props.visible
      ? css`
          transition-timing-function: ease-out;
          transition: transform 1s;
        `
      : css`
          max-height: 0px;
          transition-timing-function: ease-in;
          transition: transform 0.2s;
        `}

  width: 100%;
  height: 100%;

  max-width: 861px;
  max-height: 90%;

  background: ${theme.colors.background};

  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);

  border-radius: 8px;

  overflow: auto;

  .Close {
    position: absolute;
    top: 50px;
    right: 50px;
    width: 15px;
    height: 15px;

    text-align: center;
    align-items: center;
    justify-content: center;

    background: transparent;
    border: none;
  }

  @media (max-width: 901px) {
    width: calc(100% - 40px);
  }

  @media (max-width: 750px) {
    height: calc(100% - 40px);
    max-height: 100%;
    overflow-y: scroll;
  }
`;

export const Content = styled.div`
  flex: 1;

  padding: 100px 16px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button {
    margin: 40px 0;
    > a {
      color: white;
      text-decoration: none;
      align-items: center;
      justify-content: center;
    }
  }

  h4 {
    font-weight: 400;
    font-size: 64px;
    line-height: 77px;
    text-align: center;

    /* Primary */

    color: #f58634;

    margin: 25px 0;
  }

  p {
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    text-align: center;

    /* Gray */

    color: #5f6266;
    margin-bottom: 20px;
  }

  .back {
    background-color: transparent;
    border: none;

    a {
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      /* identical to box height, or 150% */

      text-align: center;
      text-decoration-line: underline;

      /* Gray */

      color: #5f6266;
    }
  }
`;

export const ViwImgQRCode = styled.div`
  width: 150px;
  height: 150px !important;
  background-color: gray;
  margin: 20px 0;

  position: relative;

  * {
    height: 150px !important;
  }
`;
