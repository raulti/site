import styled, { css } from 'styled-components';

import { IContainerProps } from '@/interfaces/components/form/Input';

import Tooltip from '@/components/Tooltip';

const colorsTypeVariationsPlaceholder = {
  primary: css`
    color: rgba(95, 98, 102, 0.6); ;
  `,
  secundary: css`
    color: rgba(95, 98, 102, 0.5);
  `,
  ternary: css`
    color: green;
  `,
};

export const Container = styled.label<IContainerProps>`
  width: ${props => (props.width ? `${props.width}%` : '100%')};

  display: flex;

  background-color: ${props =>
    props.typeVariation ? 'rgba(95, 98, 102, 0.1)' : props.theme.colors.white};

  box-shadow: -4px 4px 12px rgba(0, 0, 0, 0.02);
  border-radius: 12px;

  margin-bottom: 16px;

  label {
    display: flex;
    align-items: center;
    justify-content: center;

    padding-left: 16px;
  }

  .Content {
    display: flex;
    flex-direction: column;
    /* width: 100%; */
    flex: 1;

    position: relative;

    background-color: transparent;

    input,
    textarea {
      width: 100%;

      height: 44px;
      padding: 0 16px 0 16px;
      border: none;

      display: flex;
      align-items: center;

      color: ${props => props.theme.colors.gray};
      background-color: transparent;

      font-weight: 400;
      font-size: 16px;
      line-height: 24px;

      :focus {
        outline: none;
      }

      ::placeholder {
        ${props =>
          colorsTypeVariationsPlaceholder[props.typeVariation || 'primary']}

        transition: color 0.8s;

        ${props =>
          props.isFocused &&
          css`
            color: ${props.theme.colors.gray};
          `}
      }
    }
  }

  button {
    background-color: transparent;
    border: none;
    width: 35px;
    margin-top: 18px;
    height: 48px;

    position: absolute;
    right: 0;

    color: ${props => props.theme.colors.gray};
  }

  position: relative;

  .content-error {
    opacity: 0;
    //margin-top: 18px;
    height: 0;
    padding: 0 5px;

    position: absolute;
    right: 0;
    border-radius: 12px;
    background: ${props => props.theme.colors.white};

    transition: opacity 0.5s;
    transition: height 0.01s;

    ${props =>
      props.isErrored &&
      css`
        opacity: 1;

        height: 100%;
        svg {
          opacity: 1;
        }
      `}
  }
`;

export const Error = styled(Tooltip)`
  height: 100%;

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
