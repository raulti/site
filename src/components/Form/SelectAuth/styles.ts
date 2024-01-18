import styled, { css } from 'styled-components';

interface ContainerProps {
  width?: number;
  isErrored?: boolean;
  typeVariation?: 'primary' | 'secundary' | 'ternary';
}

export const ContainerSelect = styled.div<ContainerProps>`
  display: flex;

  ${props =>
    props.width &&
    css`
      width: ${props.width}%;
    `}

  .react-select {
  }

  .content-error {
    ${props =>
      props.isErrored &&
      css`
        position: relative !important;
        display: flex !important;
        opacity: 1 !important;
      `}

    background-color: ${props =>
      props.typeVariation === 'secundary'
        ? 'rgba(33, 45, 71, 0.09)'
        : props.theme.colors.white} !important;
    box-shadow: 0px 4px 56px 4px rgba(0, 0, 0, 0.08);

    opacity: 0 !important;
    display: none !important;
  }

  > div > div > div {
    height: 48px;
    box-shadow: 0px 4px 56px 4px rgba(0, 0, 0, 0.08);
    border-radius: 12px;
  }

  .react-select__control {
    height: 100%;
    background: ${props =>
      props.typeVariation === 'secundary'
        ? 'rgba(33, 45, 71, 0.09)'
        : props.theme.colors.white};
    box-shadow: ${props =>
      props.typeVariation === 'secundary'
        ? '-1px 1px 4px rgba(0, 0, 0, 0.08);'
        : '-4px 4px 12px rgba(0, 0, 0, 0.08)'};
    border-radius: 12px;

    border: none;

    box-shadow: none;

    ${props =>
      props.isErrored &&
      css`
        border-color: #c53030;
      `}
  }

  .react-select__value-container {
    display: flex;
    height: 100%;
    padding-left: 20px;

    .react-select__placeholder {
      display: none;
      color: ${props => props.theme.colors.secondary};
    }

    .react-select__input-container {
      height: 100%;

      margin: 0 !important;
      padding: 0 !important;
    }
  }

  .react-select__menu {
    border-radius: 10px;
    z-index: 5;
    > div > div {
      display: flex;
    }
  }
`;
