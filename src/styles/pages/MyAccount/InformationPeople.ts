import styled from 'styled-components';

export const Container = styled.div`
  min-height: calc(100vh - 931px);
  height: 100%;

  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;

  > section {
    display: flex;
    flex-direction: row;
    align-items: flex-start;

    margin: 112px 0;
    padding: 0 20px;

    .content {
      flex: 1;
      height: 100%;

      display: flex;
      flex-direction: column;

      padding: 0 0 0 44px;

      .buttons-footer,
      .buttons-header {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;

        > button {
          :first-child {
            margin-right: 50px;

            border: none;
            background-color: transparent;

            font-weight: 600;
            font-size: 16px;
            line-height: 24px;
            text-decoration-line: underline;

            color: ${props => props.theme.colors.gray};
          }

          :last-child {
            width: 197px;
          }
        }
      }

      .content-form {
        padding: 36px 0 12px;

        > h5 {
          color: ${props => props.theme.colors.secondaryLight};
        }

        > form {
          margin-top: 60px;

          .row {
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            margin-bottom: 10px;

            :last-child {
              // margin-top: 70px;
            }

            @media (max-width: 800px) {
              flex-direction: column;

              > div {
                width: 100%;
              }
            }
          }
        }

        .link {
          margin-top: 18px;
          width: 100%;
          display: flex;
          justify-content: flex-end;

          > button {
            background-color: transparent;
            border: none;
            text-decoration-line: underline;
          }
        }
      }
    }
  }

  @media (max-width: 800px) {
    > section {
      align-items: center;
      flex-direction: column;
      .content {
        width: 100%;
        padding: 0;
        .buttons-header {
          display: none;
        }
      }
    }
  }

  @media (min-width: 800px) {
    > section .content .buttons-footer {
      display: none;
    }
  }
`;
