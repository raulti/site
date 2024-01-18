import styled, { css } from 'styled-components';

interface ContainerProps {
  width?: number;
  isErrored?: boolean;
}

export const ContainerSelect = styled.div<ContainerProps>`
  display: flex;

  .react-select {
  }

  .content-error {
    ${props =>
      props.isErrored &&
      css`
        position: relative !important;
      `}

    background-color: white;
    box-shadow: 0px 4px 56px 4px rgba(0, 0, 0, 0.08);

    opacity: 1 !important;

    svg {
      opacity: 0;
    }
  }

  > div > div > div {
    height: 48px;
    box-shadow: 0px 4px 56px 4px rgba(0, 0, 0, 0.08);
  }

  .placeholder {
    background-color: red;
    color: black;
  }

  .react-select__control {
    height: 100%;
    background: ${props => props.theme.colors.white};
    box-shadow: 0px 4px 56px 4px rgba(0, 0, 0, 0.08);

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

    &::placeholder {
      color: #bbb;
    }

    .react-select__placeholder {
      color: rgba(95, 98, 102, 0.6);
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
