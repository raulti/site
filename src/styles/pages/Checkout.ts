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
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 112px;
    padding: 0 20px;

    .header-checkout {
      width: 100%;
      margin-bottom: 20px;

      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-end;

      svg {
        margin-right: 8px;
      }

      > button {
        display: flex;
        flex-direction: row;
        align-items: center;

        color: ${props => props.theme.colors.gray};
        background-color: transparent;
        border: none;

        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        text-decoration-line: underline;
      }

      .time-close {
        display: flex;
        flex-direction: row;
        align-items: flex-end;

        > p {
          font-weight: 400;
          font-size: 16px;
          line-height: 19px;
          color: ${props => props.theme.colors.gray};

          margin-right: 20px;
        }
        > span {
          font-weight: 700;
          font-size: 32px;
          line-height: 38px;
          color: ${props => props.theme.colors.secondary};
          display: flex;
          align-items: center;
        }
      }
    }

    .content {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      width: 100%;

      .line {
        width: 1px;
        height: 100%;

        margin: 0 40px;
      }

      .col-1,
      .col-2 {
        flex: 1 !important;

        padding-bottom: 40px;
      }

      .col-2 {
        .selected-tickets {
          background: #ffffff;
          border-radius: 32px;

          padding: 40px;

          .title-ticket {
            display: flex;
            flex-direction: row;
            align-items: center;

            margin-bottom: 32px;

            > svg {
              color: ${props => props.theme.colors.secondaryLight};
            }

            > h4 {
              font-weight: 700;
              font-size: 24px;
              line-height: 29px;

              color: ${props => props.theme.colors.secondaryDark};
              margin-left: 16px;
            }
          }

          .description-purchase {
            display: flex;
            flex-direction: column;
            border-left: 2px solid ${props => props.theme.colors.secondaryLight};

            padding: 0 24px 100px 30px;

            .row-title {
              display: flex;
              flex-direction: row;
              justify-content: space-between;

              > p {
                font-weight: 700;
                font-size: 14px;
                line-height: 17px;

                color: ${props => props.theme.colors.secondaryLight};
                margin-bottom: 32px;

                :first-child {
                  width: 45px;
                  text-align: left;
                }

                :nth-child(2) {
                  width: calc(100% - 140px);
                }

                :last-child {
                  text-align: right;
                  width: 95px;
                }
              }
            }

            .row {
              display: flex;
              flex-direction: row;
              justify-content: space-between;

              margin-bottom: 12px;

              > p {
                font-weight: 500;
                font-size: 16px;
                line-height: 19px;

                color: ${props => props.theme.colors.gray};

                :first-child {
                  width: 45px;
                }

                :nth-child(2) {
                  width: calc(100% - 140px);
                }

                :last-child {
                  text-align: right;
                  width: 95px;
                }
              }

              @media (max-width: 500px) {
                flex-direction: column;

                > p {
                  :first-child {
                    width: 100%;
                  }
                  :nth-child(2) {
                    width: 100%;
                  }
                  :last-child {
                    width: 100%;
                  }
                }
              }
            }
          }
          .taxa-purchase {
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            border: solid ${props => props.theme.colors.secondaryLight};
            border-width: 2px 2px 1px;
            border-radius: 0px 12px 0 0;
            padding: 5px 24px;

            > p {
              font-weight: 500;
              font-size: 1em;
              line-height: 19px;

              color: ${props => props.theme.colors.secondaryLight};
            }

            .value {
              display: flex;
              flex-direction: column;
              justify-content: flex-end;

              > span {
                font-weight: 700;
                font-size: 1em;
                line-height: 24px;
                text-align: right;

                color: ${props => props.theme.colors.secondaryLight};
              }
            }
          }

          .total-purchase {
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            border: solid ${props => props.theme.colors.secondaryLight};
            border-width: 0px 2px 2px;
            border-radius: 0px 0 12px 12px;
            padding: 20px;

            > p {
              font-weight: 500;
              font-size: 1.1em;
              line-height: 19px;

              color: ${props => props.theme.colors.secondary};
            }

            .value {
              display: flex;
              flex-direction: column;
              justify-content: flex-end;

              > span {
                font-weight: 700;
                font-size: 1.25em;
                line-height: 24px;
                text-align: right;

                color: ${props => props.theme.colors.secondary};

                margin-bottom: 5px;
              }
            }
          }

          > button {
            width: 100%;

            margin: 16px 0 34px;
          }

          .div-info {
            width: 100%;
            margin-top: 20px;

            display: flex;
            align-items: center;
            justify-content: center;

            .info-tax {
              display: flex;
              flex-direction: row;
              align-items: center;

              color: ${props => props.theme.colors.secondaryLight};
              > svg {
                margin-right: 10px;
              }

              > p {
                font-weight: 400;
                font-size: 14px;
                line-height: 17px;

                text-decoration-line: underline;
              }
            }
          }

          @media (max-width: 500px) {
            padding: 20px;
          }
        }
      }
    }
  }

  @media (max-width: 1000px) {
    > section {
      align-items: center;
      .content {
        flex-direction: column;
        max-width: 600px;
      }
    }
  }

  @media (max-width: 600px) {
    > section .header-checkout {
      flex-direction: column;
      align-items: flex-start;

      .time-close {
        margin-top: 20px;
      }
    }
  }
`;

interface IProps {
  status?: boolean;
}

export const CardForm = styled.div<IProps>`
  margin-top: 80px;
  .header-card-form {
    display: flex;
    flex-direction: row;
    align-items: center;

    margin-bottom: 10px;

    svg {
      color: ${props => (props.status ? '#2ea15c' : '#A1432E')};
      margin-right: 18px;
    }
  }

  .content-card-form {
    /* border-left: 2px solid ${props =>
      props.status ? '#2ea15c' : '#A1432E'};
    margin-left: 7px; */

    padding: 30px 0 0 0;

    display: flex;
    flex-direction: column;

    .row {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    hr {
      opacity: 0.3;
      border-color: #9ea0a2;
      width: 100%;

      margin-top: 40px;
    }

    h5 {
      color: ${props => props.theme.colors.secondaryLight};
    }

    .title-content {
      display: flex;
      flex-direction: row;
      margin-bottom: 25px;
      > h4 {
        margin-left: 16px;

        font-weight: 400;
        font-size: 1.25em;
        line-height: 23px;

        color: ${props => props.theme.colors.secondaryDark};
      }
    }

    .buttons {
      display: flex;
      flex-direction: row;

      display: flex;
      flex-wrap: wrap;

      flex: 1;

      margin: -5px -5px 55px;

      button {
        width: 210px;

        height: 33px;

        > svg {
          margin: 0 10px;
        }

        margin: 5px;

        /* + button {
          margin-left: 20px;
        } */
      }
    }

    > span {
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;

      color: ${props => props.theme.colors.gray};

      margin-bottom: 56px;
    }

    > button {
      width: 100%;
    }
  }
`;

export const InfoSubmitTicket = styled.div`
  max-width: 335px;
  width: 100%;
  border: 2px solid #d9d9d9;
  border-radius: 24px;

  padding: 12px 30px;

  margin-top: 16px;

  p {
    font-weight: 700;
    font-size: 16px;
    line-height: 32px;

    color: #5f6266;
  }

  span {
    font-weight: 400;
    font-size: 16px;
    line-height: 32px;

    color: #212d47;
  }
`;

interface IPIXIcon {
  active: boolean;
}

export const PIXIcon = styled.div<IPIXIcon>`
  height: 17px;
  width: 49px;

  margin: 0 10px;

  align-items: center;
  justify-content: center;

  > svg > path {
    :nth-child(-n + 3) {
      stroke: ${props =>
        props.active ? props.theme.colors.white : props.theme.colors.secondary};
    }
    :nth-child(4) {
      fill: ${props =>
        props.active ? props.theme.colors.white : props.theme.colors.secondary};
    }
    :nth-child(5) {
      fill: ${props =>
        props.active ? props.theme.colors.white : props.theme.colors.secondary};
    }
  }
`;
