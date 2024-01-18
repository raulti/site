import styled, { css } from 'styled-components';

import { IContainerProps } from '@/interfaces/components/form/Input';

import Tooltip from '@/components/Tooltip';

export const Container = styled.div<IContainerProps>`
  width: ${props => (props.width ? `${props.width}%` : '100%')};

  display: flex;

  margin-bottom: 15px;

  .Content {
    display: flex;
    flex-direction: column;

    width: 100%;

    position: relative;

    label {
      color: ${props => props.theme.colors.grayLight};

      font-weight: 500;
      font-size: 12px;
      line-height: 18px;

      transition: color 0.8s;

      ${props =>
        props.isFocused &&
        css`
          color: ${props.theme.colors.secondary};
        `}
    }

    input,
    textarea {
      width: 100%;
      height: 44px;
      padding: 0 16px 0;
      background: ${props =>
        props.typeVariation === 'secundary'
          ? 'rgba(33, 45, 71, 0.09)'
          : props.theme.colors.white};
      box-shadow: ${props =>
        props.typeVariation === 'secundary'
          ? '-1px 1px 4px rgba(0, 0, 0, 0.08);'
          : '-4px 4px 12px rgba(0, 0, 0, 0.08)'};
      border: none;
      border-radius: 12px;

      display: flex;
      align-items: center;

      /* ${props =>
        props.isErrored &&
        css`
          border-color: #c53030;
        `} */

      color: ${props => props.theme.colors.gray};

      font-family: 'Poppins', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;

      :focus {
        outline: none;
      }

      ::placeholder {
        color: rgba(95, 98, 102, 0.6);

        transition: color 0.8s;

        ${props =>
          props.isFocused &&
          css`
            color: ${props.theme.colors.secondaryDark};
          `}
      }
    }
  }

  button {
    border: none;
    width: 35px;
    margin-top: 18px;
    height: 48px;

    position: absolute;
    right: 0;

    background-color: transparent;
    color: ${props => props.theme.colors.gray};

    ${props =>
      props.isErrored &&
      css`
        right: 20px;
      `}
  }

  position: relative;

  > div:last-child,
  .content-error {
    opacity: 0;
    margin-top: 18px;
    height: 0;

    position: absolute;
    right: 5px;

    display: none;

    background: ${props => props.theme.colors.white};

    transition: opacity 0.5s;
    transition: height 0.01s;

    ${props =>
      props.isErrored &&
      css`
        opacity: 1;
        display: flex;
        height: 48px;

        svg {
          opacity: 1;
        }
      `}
  }
`;

export const Error = styled(Tooltip)`
  height: 43px !important;
  border-radius: 12px;
  display: flex;
  align-items: center;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
