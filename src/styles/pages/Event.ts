import styled, { css } from 'styled-components';

interface IProps {
  numTicketsAvailable?: number;
}

export const Container = styled.main`
  height: 100%;
  background-color: ${props => props.theme.colors.background};
  box-shadow: inset 4px 4px 80px rgba(0, 0, 0, 0.05);

  display: flex;
  flex-direction: column;

  .banner-event {
    width: 100%;
    margin-bottom: 80px;
    position: relative;

    background-color: ${props => props.theme.colors.background};

    .banner-event-bg {
      position: relative;
      width: 100%;

      display: flex;
      align-items: center;
      justify-content: center;

      padding: 80px 80px 0;

      > span {
        overflow: hidden;

        > img {
          filter: blur(32px);
        }
      }
    }

    .img-card-banner {
      margin-bottom: -80px;

      max-width: 954px;
      width: 100%;

      position: relative;

      > span {
        border-radius: 32px;
        overflow: hidden;
        box-shadow: 0px 4px 72px 8px rgba(255, 255, 255, 0.32);
      }
    }

    .container-sale-closed {
      width: 100%;
      height: calc(100%);
      border-radius: 32px;

      inset: 0;

      position: absolute;

      background: rgba(33, 45, 71, 0.2);

      display: flex;
      align-items: center;
      justify-content: center;

      .sale-closed {
        width: 500px;

        padding: 20px 16px;

        background: #fafafa;

        box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.24);
        elevation: 5;
        border-radius: 12px;

        p {
          font-size: 45px;
          line-height: 49px;
          text-align: center;
          color: ${p => p.theme.colors.secondaryDark};
          font-weight: bold;
        }
      }
    }
  }

  .content {
    max-width: 954px;
    margin-top: 45px;
    padding: 0 20px;

    align-items: flex-start;

    > h1 {
      font-weight: 700;
      font-size: 2.5em;

      color: ${props => props.theme.colors.primary};

      margin-bottom: 8px;
    }

    > span {
      font-weight: 500;
      font-size: 0.75em;
      line-height: 15px;

      color: ${props => props.theme.colors.gray};
    }

    .data-event {
      width: 100%;

      display: flex;
      flex-direction: row;
      flex-wrap: wrap;

      margin: 32px 0 64px;

      > div {
        display: flex;
        align-items: center;
        flex-direction: row;

        margin: 10px 20px 10px 0;

        > svg {
          color: ${props => props.theme.colors.grayLight};
          margin-right: 12px;
        }

        .ate {
          color: ${props => props.theme.colors.secondaryDark};
          font-weight: bold;
        }

        > span,
        > a {
          font-weight: 500;
          font-size: 1.25em;
          line-height: 24px;

          color: ${props => props.theme.colors.secondaryDark};
        }
        > a {
          text-decoration: underline;
        }
      }
    }

    > h5 {
      font-weight: 700;
      font-size: 1.125em;
      line-height: 21px;

      text-transform: uppercase;

      color: ${props => props.theme.colors.secondaryDark};
      margin-bottom: 16px;
    }

    a {
      font-weight: 400;
      font-size: 1.25em;
      line-height: 23px;
    }
  }

  > section {
    .title {
      display: flex;
      flex-direction: row;

      > h5 {
        line-height: 21px;
        text-transform: uppercase;

        color: ${props => props.theme.colors.secondaryDark};
        padding-right: 24px;
      }

      > hr {
        flex: 1;
      }
    }
  }

  .infos-ticket {
    max-width: 954px;
    margin: 112px 0 0;

    .info-ticket-content {
      padding: 32px 20px 0;

      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;

      .info {
        width: calc(50% - 56px);

        margin-bottom: 56px;

        :first-child {
          width: 50%;

          padding-right: 56px;

          border-right: 1px solid #c0c0c0;
        }

        > h5 {
          color: ${props => props.theme.colors.gray};
          margin-bottom: 16px;
        }
      }

      .info-img {
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: center;

        padding-left: 56px;
        border-left: 1px solid #c0c0c0;
        margin-bottom: 56px;
      }
    }
  }

  .event-map {
    max-width: 954px;
    margin: 112px 0 0;

    .event-map-content {
      padding: 0 20px;
      width: 100%;

      .row-map-and-info {
        display: flex;
        flex-direction: row;

        .img-map {
          width: 50%;
          > span {
            filter: drop-shadow(0px 4px 24px rgba(0, 0, 0, 0.16));
            border-radius: 12px;
            overflow: hidden;
          }
        }

        .info-map {
          display: flex;
          flex-direction: column;
          justify-content: center;

          flex: 1;

          width: 50%;

          > h5 {
            line-height: 22px;
            color: ${props => props.theme.colors.gray};
            margin-bottom: 16px;
          }
          > p {
            font-size: 16px;
            line-height: 19px;
            color: ${props => props.theme.colors.gray};
          }
        }

        .img-map + .info-map {
          margin-left: 53px;
        }
      }

      .map {
        margin: 24px 0 0;
        width: 100%;

        .link-map {
          width: 100%;
          margin-bottom: 16px;

          display: flex;
          align-items: center;
          justify-content: flex-end;
        }

        span {
          filter: drop-shadow(0px 4px 24px rgba(0, 0, 0, 0.16));
          border-radius: 12px;
          overflow: hidden;
        }

        .google-map {
          width: 100%;
          max-width: 954px;
          height: 265px;
        }
      }
    }
  }

  .important-info {
    max-width: 954px;
    margin: 112px 0 0;
    .important-info-content {
      padding: 0 20px;
      width: 100%;

      align-items: flex-start;

      > div {
        display: flex;
        flex-direction: row;
        > span {
          font-weight: 700;
          font-size: 18px;
          line-height: 22px;

          color: ${props => props.theme.colors.secondary};

          margin-left: 24px;
        }
        margin-top: 32px;
      }

      h5 {
        font-weight: 700;
        font-size: 18px;
        line-height: 22px;

        color: ${props => props.theme.colors.gray};

        margin-bottom: 16px;
      }

      > h5 {
        margin-top: 64px;
      }

      > p {
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;

        color: ${props => props.theme.colors.gray};
      }
    }

    > hr {
      width: 100%;

      margin: 112px 0;
    }
  }

  .other-events {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    margin-bottom: 112px;

    margin-top: 112px;
  }

  @media (max-width: 800px) {
    .infos-ticket .info-ticket-content {
      flex-direction: column;

      .info {
        width: 100%;

        padding-bottom: 20px;
        border-bottom: 1px solid #c0c0c0;

        margin-bottom: 40px;

        :first-child {
          width: 100%;
          padding-right: 0;
          border-right: none;
        }
      }

      .info-img {
        border-left: none;
        width: 100%;
        padding-left: 0;
        margin-bottom: 40px;
      }
    }

    .event-map {
      margin: 40px 0 0;
      .event-map-content {
        .row-map-and-info {
          flex-direction: column;

          .img-map {
            display: flex;
            justify-content: center;
            margin-bottom: 20px;
          }
          .info-map,
          .img-map {
            width: 100%;
            margin-left: 0px;
          }
        }
      }
    }

    .important-info {
      margin: 40px 0 0;

      > hr {
        margin: 40px 20px;
      }
    }
  }

  @media (max-width: 600px) {
    .banner-event {
      margin-bottom: 40px;
      .banner-event-bg {
        padding: 40px 20px 0;
      }
      .img-card-banner {
        margin-bottom: -40px;
      }
    }

    .content {
      margin-top: 40px;
      .data-event {
        margin-bottom: 30px;
      }
    }

    .infos-ticket {
      margin: 40px 0 0;
      .info-ticket-content {
        padding: 20px 20px 0;
      }
    }
  }
`;

interface IProps {
  active?: boolean;
}

export const Tickets = styled.section<IProps>`
  margin: 112px 0;
  max-width: 954px;
  padding: 0 20px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  overflow: hidden;

  height: auto;
  position: relative;

  > div {
    width: 50%;
    height: 100% !important;

    display: flex;
    flex-direction: column;
  }

  .line {
    display: flex;
    margin: 0 32px;

    ${props =>
      css`
        height: ${150 + props.numTicketsAvailable * 187}px;
      `}

    background-color: #c0c0c0;
  }

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
      font-size: 1.5em;
      line-height: 29px;

      color: ${props => props.theme.colors.secondaryDark};
      margin-left: 16px;
    }
  }

  .tickets-available {
    > span {
      font-style: italic;
      font-weight: 400;
      font-size: 0.875em;
      line-height: 17px;

      color: #000000;

      margin-bottom: 10px;
    }

    .buttons {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;

      margin: 14px 0 16px;

      > button {
        //width: 175px;
        height: 33px;
        margin: 5px 0;

        :first-child {
          margin-right: 8px;
        }
      }
    }

    .cards-tickets {
      > div {
        margin-bottom: 24px;
      }
    }
  }
  .selected-tickets {
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
          font-size: 0.875em;
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
          font-size: 1em;
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
          font-size: 0.875em;
          line-height: 17px;

          text-decoration-line: underline;
        }
      }
    }
  }

  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: center;

    > div {
      width: 100%;
    }

    .line {
      height: 1px;
      width: 100%;
      margin: 30px 0;
    }
  }
`;

export const Description = styled.div<IProps>`
  margin-bottom: 24px;

  > p {
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;

    color: ${props => props.theme.colors.gray};

    ${props =>
      !props.active &&
      css`
        display: -webkit-box;
        overflow-y: hidden;
        -webkit-line-clamp: 7;
        -webkit-box-orient: vertical;
        word-break: break-word;
      `}
  }

  .read-more {
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    text-decoration-line: underline;

    color: ${props => props.theme.colors.secondary};

    border: none;
    background-color: transparent;

    ${props =>
      props.active &&
      css`
        display: none;
      `}
  }
`;

interface IMarker {
  lat: number;
  lng: number;
}

export const Marker = styled.div<IMarker>`
  border-radius: 50% 50% 50% 0;
  color: ${props => props.theme.colors.secondary};
  border: 4px solid ${props => props.theme.colors.secondary};
  width: 20px;
  height: 20px;
  transform: rotate(-45deg);

  &::after {
    position: absolute;
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    margin-left: -5px;
    margin-top: -5px;
    background-color: ${props => props.theme.colors.secondary};
  }
`;
