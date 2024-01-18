import styled from 'styled-components';

export const Container = styled.aside`
  width: 267px;
  min-height: 100%;

  display: flex;
  flex-direction: column;

  .title-menu {
    display: flex;
    flex-direction: row;
    align-items: center;

    margin-bottom: 32px;

    > svg {
      color: ${props => props.theme.colors.secondaryLight};
      margin-right: 20px;
    }

    > h4 {
      color: ${props => props.theme.colors.secondaryDark};
    }
  }

  .buttons-menu {
    border-right: 1px solid #c0c0c0;
    padding-right: 42px;
    padding-top: 36px;

    flex: 1;

    > button {
      width: 100%;
      margin-bottom: 16px;
    }

    .sign-out {
      width: min-content;
      margin-top: 100px;

      font-weight: 600;
      font-size: 16px;
      line-height: 24px;

      text-decoration-line: underline;

      color: ${props => props.theme.colors.gray};
      border: none;
      background-color: transparent;
    }
  }

  @media (max-width: 800px) {
    min-height: 20px;

    .buttons-menu {
      border-right: none;
    }
  }
`;
