import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  .title-change-ownership {
    display: flex;
    flex-direction: row;
    align-items: center;

    margin-bottom: 20px;

    > h5 {
    }
    > p {
      margin-left: 5px;
      font-size: 1em;
      text-decoration-line: underline;
    }
  }

  > form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    .checkboxContainer {
      margin-bottom: 10px;
    }

    .buttons {
      display: flex;
      flex-direction: row;

      margin-top: 20px;

      .link {
        margin-left: 48px;
        background-color: transparent;
        border: none;
        text-decoration-line: underline;
        color: ${props => props.theme.colors.gray};
      }
    }
  }
`;
