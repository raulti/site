import styled, { css } from 'styled-components';

import {
  IContainerProps,
  IItemListContainer,
} from '@/interfaces/components/Dropdown';

export const Container = styled.div<IContainerProps>`
  position: relative;

  height: 100%;

  z-index: 99;

  overflow: visible;

  > button {
    height: 100%;
    padding: 0 10px;

    background-color: transparent;

    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.colors.gray};

    font-weight: 600;
    font-size: 16px;
    line-height: 24px;

    transition: color 0.5s;

    ${props =>
      props.open &&
      css`
        color: ${props.theme.colors.secondary};
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
`;

export const ItemList = styled.div<IItemListContainer>`
  position: absolute;
  right: 0;

  border-radius: 4px;
  padding: ${props => (props.open ? '12px' : '0px')} 20px;
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
`;

export const Item = styled.div`
  display: flex;
  justify-content: flex-end;

  position: relative;
  margin-bottom: 5px;

  button {
    white-space: nowrap;
    background: transparent;
    border: transparent;

    font-weight: 600;
    font-size: 16px;
    line-height: 24px;

    color: ${props => props.theme.colors.gray};

    position: relative;

    &:hover {
      color: ${props => props.theme.colors.secondary};
    }
  }
`;
