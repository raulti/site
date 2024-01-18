import styled, { css } from 'styled-components';

import {
  IContainerProps,
  IItemListContainer,
} from '@/interfaces/components/Dropdown';

export const Container = styled.div<IContainerProps>`
  position: relative;

  height: 100%;

  z-index: 88;

  overflow: visible;

  > button {
    height: 100%;

    padding: 12px 16px;
    border: 2px solid ${props => props.theme.colors.secondary} !important;
    border-radius: 12px;

    color: ${props => props.theme.colors.secondary};

    background-color: transparent;

    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: 600;
    font-size: 16px;
    line-height: 24px;

    transition: all 0.5s;

    ${props =>
      props.open &&
      css`
        background-color: ${props.theme.colors.secondary};
        color: ${props.theme.colors.white};
        border-radius: 12px 12px 0px 0px;
      `}

    > svg {
      margin-left: 10px;

      transition: transform 0.5s;

      ${props =>
        props.open &&
        css`
          transform: rotate(-180deg);
        `}
    }

    border: 0;
  }

  .sign-out-div {
    display: flex;
    justify-content: flex-end;

    padding: 28px 16px 12px;
  }

  .sign-out {
    width: min-content;

    font-weight: 600;
    font-size: 16px;
    line-height: 24px;

    text-decoration-line: underline;

    color: ${props => props.theme.colors.gray};
    border: none;
    background-color: transparent;
  }
`;

export const ItemList = styled.div<IItemListContainer>`
  position: absolute;
  right: 0;

  border-radius: 4px;
  padding: ${props => (props.open ? '24px' : '0px')} 24px;
  max-height: ${props => (props.open ? '1000px' : '0px')};
  opacity: ${props => (props.open ? 1 : 0)};
  z-index: 9;

  overflow: hidden;

  ${props =>
    props.open
      ? css`
          transition-timing-function: ease-out;
          transition: padding 1s, max-height 1s, opacity 1s;
        `
      : css`
          transition-timing-function: ease-in;
          transition: padding 0.4s, max-height 0.4s, opacity 0.4s;
        `}

  background: ${props => props.theme.colors.light};
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.16);
  border-radius: 12px 0px 12px 12px;

  button {
    white-space: nowrap;

    width: 223px;

    position: relative;
  }

  button + button {
    margin-top: 16px;
  }
`;
