import styled from 'styled-components';

export const Container = styled.main`
  .icons-info-about {
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    margin: 65px 0;
    padding: 0 20px;

    .col {
      display: flex;
      flex-direction: column;

      align-items: center;

      max-width: 250px;

      > svg {
        fill: none;
        stroke: ${props => props.theme.colors.secondary};
        stroke-width: 15;
        stroke-linecap: butt;
        stroke-dasharray: 0;

        margin-bottom: 15px;
      }

      > p {
        text-align: center;
      }
    }
  }

  .infos {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    margin: 66px 0 92px;
    padding: 0 20px;

    .info {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      max-width: 1075px;

      margin-bottom: 64px;

      :first-child {
        flex-direction: row;
        .info-text {
          margin-left: 50px;
        }
      }

      :last-child {
        flex-direction: row-reverse;
        .info-text {
          margin-right: 50px;
        }
      }
      .img-info {
        width: 38%;
        > span {
          filter: drop-shadow(0px 4px 24px rgba(0, 0, 0, 0.16));
          border-radius: 12px;
          overflow: hidden;
        }
      }

      .info-text {
        flex: 1;
        width: 57%;

        display: flex;
        flex-direction: column;
        justify-content: center;

        > h3 {
          margin-bottom: 16px;
        }
      }
    }
  }

  .link {
    margin-top: 50px;

    a {
      text-decoration: none;
    }
  }

  @media (max-width: 800px) {
    .icons-info-about {
      margin: 40px 0;
    }
    .infos {
      margin: 40px 0;
      .info {
        flex-direction: column !important;
        align-items: center;

        .img-info {
          margin-bottom: 20px;
          width: 50%;
        }
        .info-text {
          margin: 0 !important;
          align-items: center;
          > p {
            text-align: center;
          }
        }
      }
    }
  }

  @media (max-width: 600px) {
    .icons-info-about {
      flex-direction: column;

      .col + .col {
        margin-top: 20px;
      }
    }

    .infos .info {
      .info-text,
      .img-info {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
      }
    }
  }
`;
