import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  .event-info {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-bottom: 32px;

    .card-img {
      span {
        box-shadow: 0px 4px 72px 8px rgba(255, 255, 255, 0.32);
        border-radius: 12px 0px 0px 12px;
        overflow: hidden;
      }
    }

    .text-info-event {
      display: flex;
      flex-direction: column;

      justify-content: space-between;

      padding: 0 0 10px 25px;

      color: ${props => props.theme.colors.gray};

      > div {
        > h5 {
          font-weight: 600;
          font-size: 20px;
          line-height: 28px;

          color: ${props => props.theme.colors.gray};
        }

        > span {
          font-weight: 400;
          font-size: 18px;
          line-height: 20px;
        }
      }

      > span {
        font-weight: 400;
        font-size: 18px;
        line-height: 20px;
      }
    }
  }

  .tickets {
    > h5 {
      color: ${props => props.theme.colors.secondaryDark};
    }

    .ticket {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;

      border-bottom: 1px solid #c0c0c0;
      padding: 16px 0;

      margin-bottom: 24px;

      .qtd {
        width: 30px;
        margin-right: 20px;
      }

      span {
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;

        color: ${props => props.theme.colors.gray};
      }

      .title {
        flex: 1;
        align-items: flex-start;
      }

      > div {
        display: flex;
        flex-direction: column;

        > h5 {
          font-size: 16px;
          line-height: 19px;
          text-decoration-line: underline;

          color: ${props => props.theme.colors.secondary};
          margin-bottom: 8px;
        }

        :last-child {
          width: 130px;
          height: 46px;

          justify-content: space-between;
          align-items: flex-end;
        }

        > button {
          background-color: transparent;
          border: none;
          width: 120px;
          text-decoration-line: underline;
        }
      }

      .value {
        width: 100px;
        display: flex;
        justify-content: flex-end;
      }
    }
  }

  .status {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    margin-bottom: 20px;

    > h5 {
      color: ${props => props.theme.colors.secondaryDark};
    }
  }

  .payment-methods {
    h5 {
      color: ${props => props.theme.colors.secondaryDark};
    }

    p {
      font-size: 1.125em;
    }
  }

  .row {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }

  .purchase-details {
    > h5 {
      color: ${props => props.theme.colors.secondaryDark};
    }
    .row {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
    }

    span {
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;

      color: ${props => props.theme.colors.gray};
    }

    .title-purchase {
      font-weight: 700;
    }

    .values {
      width: 40%;
      padding: 23px 0;
    }

    .payment-methods {
      width: 40%;
    }

    .purchases {
      margin-top: 50px;

      .purchase {
        .header-purchase {
          display: flex;
          flex-direction: row;
          justify-content: space-between;

          .qtd {
            width: 30px;
            margin-right: 20px;
          }
          .title-purchase {
            flex: 1;
          }

          > span {
            font-weight: 700;
            font-size: 16px;
            line-height: 19px;

            color: ${props => props.theme.colors.gray};
          }
        }

        .desciption {
          margin-left: 50px;
          margin-top: 16px;

          display: flex;
          flex-direction: row;
          justify-content: space-between;

          .value {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            justify-content: flex-start;
          }
        }

        .owner {
          margin-left: 70px;

          > div {
            display: flex;
            flex-direction: row;
            > p:first-child {
              margin-right: 50px;
            }
          }
        }
      }
    }
  }
`;
