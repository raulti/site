import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 44px;

  display: flex;
  justify-content: center;

  background-color: ${props => props.theme.colors.secondaryDark};

  > section {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 0 20px;

    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    p {
      color: ${props => props.theme.colors.light};
    }

    > div {
      flex: 1;
    }

    > p {
      font-weight: 500;
    }

    .text {
      display: flex;
      justify-content: center;
      > p {
        text-align: center;
      }
    }

    .options {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;

      > p {
        margin-right: 16px;
      }

      .option {
        display: flex;
        align-items: center;
        justify-content: center;

        > p {
          margin: 0 6px;
        }
      }
    }
  }

  @media (max-width: 570px) {
    .options {
      display: none;
    }
  }
`;
