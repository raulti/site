import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;

  min-height: calc(100vh - 44px);
  height: calc(100vh - 44px);

  position: relative;

  img {
    max-width: 40%;
  }

  .content {
    height: 100%;

    width: 100%;
    max-width: 1196px;

    display: flex;
    align-items: flex-start;
    justify-content: flex-end;

    .form-login {
      padding: 20px 40px 40px;

      width: 100%;
      max-width: 546px;
      height: 100%;

      background-color: #f5f5f5;

      z-index: 1;

      display: flex;
      flex-direction: column;

      .back {
        width: 100%;
        margin-top: 40px;

        > button {
          display: flex;
          flex-direction: row;
          align-items: center;

          > svg {
            margin-right: 10px;
          }

          color: ${props => props.theme.colors.gray};

          background-color: transparent;
          border: none;

          font-weight: 600;
          font-size: 1em;
          line-height: 24px;

          text-decoration-line: underline;

          color: ${props => props.theme.colors.gray};
        }
      }

      > h4 {
        margin-top: 88px;
        color: ${props => props.theme.colors.secondaryDark};
      }

      > span {
        margin-top: 8px;
        color: ${props => props.theme.colors.gray};

        > a {
          margin-left: 5px;
        }
      }

      > form {
        margin-top: 40px;
        max-width: 466px;

        .link {
          display: flex;
          flex-direction: row;
        }

        > button {
          width: 100%;
          margin-top: 40px;
        }
      }

      .login-social {
        margin-top: 56px;

        .or-enter-with {
          display: flex;
          flex-direction: row;
          align-items: center;

          > hr {
            flex: 1;
            height: 1px;
            background-color: ${props => props.theme.colors.grayLight};
            border: none;
          }

          > span {
            font-weight: 400;
            font-size: 1em;
            line-height: 19px;
            text-align: center;

            color: ${props => props.theme.colors.gray};

            margin: 0 24px;
          }
        }

        .buttons {
          margin-top: 24px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;

          > button {
            flex: 1;
            border: 2px solid #9ea0a2;
            border-radius: 12px;

            background-color: transparent;

            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;

            padding: 12px 0;

            > p {
              font-weight: 600;
              font-size: 1em;
              line-height: 24px;
              margin-left: 8px;
            }

            .google {
              color: #5f6266;
            }

            .facebook {
              color: #1877f2;
            }

            :first-child {
              margin-right: 10px;
            }
            :last-child {
              margin-left: 10px;
            }
          }
        }
      }
    }
  }

  @media (max-width: 900px) {
    .content {
      width: 100%;
      min-width: 100%;
      align-items: center;
    }

    .img-bg {
      display: none !important;
    }
  }

  @media (max-width: 600px) {
    .content .form-login {
      padding: 20px;
    }
  }

  @media (max-width: 500px) {
    .content .form-login > form .link {
      flex-direction: column;
      .forgot {
        margin-top: 20px;
        width: 100%;
        display: flex;
        justify-content: flex-end;
      }
    }
  }
`;
