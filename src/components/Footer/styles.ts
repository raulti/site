import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  > hr {
    height: 1px;
    width: 100%;
    max-width: 1440px;
    opacity: 0.3;

    background-color: ${props => props.theme.colors.grayLight};
  }

  > section {
    padding: 112px 20px;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;

    > div {
      display: flex;
      flex-direction: column;

      & + div {
        margin-left: 20px;
      }

      .title-link {
        text-decoration: none;
        margin-bottom: 16px;
        text-transform: uppercase;
      }

      > h5 {
        margin-bottom: 16px;
      }
    }

    .col-1 {
      max-width: 345px;
      min-width: 100px;

      .logo {
        margin-bottom: 32px;
      }

      > p {
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;

        color: ${props => props.theme.colors.gray};
      }

      .social-networks {
        margin-top: 16px;

        > a {
          :first-child {
            margin-right: 24px;
          }

          > svg {
            color: ${props => props.theme.colors.secondary};
          }
        }

        > a:hover > svg {
          color: ${props => props.theme.colors.primary};
        }
      }
    }

    .col-2 {
      min-width: 240px;
      .dropdown {
        width: 240px;
        margin-bottom: 16px;

        > button {
          font-weight: 600;
          font-size: 18px;
          line-height: 27px;

          color: ${props => props.theme.colors.secondary} !important;
          padding: 0;
        }
      }
      .sub-menu {
        margin-bottom: 50px;
        > p {
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;

          color: ${props => props.theme.colors.gray};
        }
      }
    }

    .col-3 {
      min-width: 150px;
      width: 150px;

      a {
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        margin-bottom: 2px;

        color: ${props => props.theme.colors.gray};

        text-decoration: none;

        position: relative;

        ::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;

          width: 0;
          height: 1px;
          background-color: ${props => props.theme.colors.gray};

          transition: width 0.5s;
        }

        :hover {
          ::after {
            width: 100%;
          }
        }
      }
    }

    .col-4 {
      min-width: 300px;
      .card-app {
        position: relative;

        width: 298px;
        height: 212px;

        border-radius: 12px;
        box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.16);

        overflow: hidden;

        .burn-bg {
          position: absolute;
          inset: 0;

          background: #212d47;
          mix-blend-mode: multiply;
          opacity: 0.7;
        }

        .content-card-app {
          position: absolute;
          inset: 0;

          padding: 20px 24px 24px;

          display: flex;
          flex-direction: column;
          justify-content: space-between;

          > span {
            font-weight: 700;
            font-size: 16px;
            line-height: 24px;
            text-transform: uppercase;

            color: ${props => props.theme.colors.white};
          }

          > p {
            font-weight: 400;
            font-size: 16px;
            line-height: 19px;

            color: ${props => props.theme.colors.light};
          }

          .buttons {
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            .button-link-app {
              position: relative;
              width: 164px;
              width: 120px;

              height: 50px;
              height: 36.6px;
              border-radius: 6px;
              overflow: hidden;

              border: solid 1px ${props => props.theme.colors.grayLight};
              box-shadow: 0px 4px 72px 8px rgba(255, 255, 255, 0.32);
            }
          }
        }
      }
    }
  }

  @media (max-width: 1150px) {
    > section {
      width: 100%;

      display: grid;
      grid-template-rows: auto auto;
      grid-template-columns: calc(50% - 25px) calc(50% - 25px);
      grid-template-areas:
        'topLeft topRight'
        'bottomLeft bottomRight';

      grid-gap: 50px;

      //justify-content: center;

      > div {
        & + div {
          margin-left: 0px;
        }
      }

      .col-1 {
        grid-area: topLeft;
      }
      .col-2 {
        grid-area: bottomLeft;
      }
      .col-3 {
        grid-area: bottomRight;
      }
      .col-4 {
        grid-area: topRight;
      }
    }
  }

  @media (max-width: 750px) {
    > section {
      display: grid;
      grid-template-rows: auto auto auto auto;
      grid-template-columns: 100%;
      grid-template-areas: 'one' 'two' 'three' 'four';

      justify-items: center;

      > div {
        align-items: center;
      }

      .col-1 {
        grid-area: one;
      }
      .col-2 {
        grid-area: three;
      }
      .col-3 {
        grid-area: four;
      }
      .col-4 {
        grid-area: two;
      }
    }
  }
`;
