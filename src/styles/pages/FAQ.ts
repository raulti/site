import styled from 'styled-components';

export const Container = styled.main`
  .content {
    display: flex;
    flex-direction: row;

    align-items: flex-start;

    margin: 65px 0 92px;

    padding: 0 20px;

    .line {
      height: 540px;

      width: 1px;
      margin: 0 30px;

      border: none;
      background-color: #c0c0c0;
    }

    .div-faq,
    .div-form {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;

      flex: 1;
      height: 100%;

      > h3 {
        margin-bottom: 32px;
      }
    }

    .div-form {
      padding-bottom: 15px;

      > p {
        margin-bottom: 32px;
      }

      > form {
        > button {
          margin-top: 32px;
          width: auto;
        }
      }
    }
  }

  @media (max-width: 800px) {
    .content {
      margin: 20px 0 40px;
      flex-direction: column;

      .line {
        height: 1px;
        width: 100%;
        margin: 30px 0;
      }
    }
  }
`;
