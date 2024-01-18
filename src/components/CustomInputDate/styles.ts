import styled, { css } from 'styled-components';

interface ContainerProps {
  width?: number;
  isErrored?: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;

  height: 25px;
  /*
  .react-select__control {
    display: none;
  } */
  .react-datepicker-wrapper {
    .react-datepicker__input-container {
      display: none;
    }
  }

  .react-datepicker-popper {
    z-index: 99;
  }

  .content {
    display: flex;
    flex-direction: row;
    > button {
      margin-left: 32px;

      margin-top: 5px;

      font-weight: 500;
      font-size: 1em;
      line-height: 19px;
      text-decoration-line: underline;
      color: #2e52a1;

      background-color: transparent;
      border: none;

      > svg {
        margin-right: 12px;
      }
    }

    > p {
      margin-left: 20px;
      font-style: italic;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      color: #5f6266;
    }
  }

  /* .react-select__menu {
    border-radius: 10px;
    z-index: 5;
    > div > div {
      display: flex;
    }
  } */
`;
