import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  max-width: 100%;
  height: 411px;

  margin-bottom: 112px;
  padding: 0 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  .event-organizers-card {
    display: flex;
    flex-direction: row;

    //height: 411px;
    width: 100%;
    max-width: 1450px;

    .img-event-organizers {
      width: 50%;

      overflow: hidden;

      > span {
        border-radius: 12px 0px 0px 12px;
        height: 100% !important;
      }
    }

    .content-card-event-organizers {
      display: flex;
      flex-direction: column;

      width: 50%;
      height: 100%;
      padding: 50px 10%;

      border-width: 2px 2px 2px 0px;
      border: solid ${props => props.theme.colors.secondaryLight};
      border-radius: 0px 12px 12px 0px;

      > span {
        font-weight: 500;
        font-size: 1em;
        text-transform: uppercase;

        color: ${props => props.theme.colors.secondary};
        margin-bottom: 8px;
      }

      > h5 {
        line-height: 29px;
        font-weight: 700;
        font-size: 1.5em;

        color: ${props => props.theme.colors.secondaryDark};
        margin-bottom: 32px;
      }

      > p {
        font-weight: 400;
        font-size: 1em;

        color: ${props => props.theme.colors.gray};
        margin-bottom: 32px;
      }

      .buttons {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: center;

        width: 100%;

        > a {
          text-decoration: none !important;
        }

        > a:last-child {
          font-weight: 600;
          font-size: 1em;
          line-height: 24px;
          text-decoration: none;
          margin-left: 20px;

          color: ${props => props.theme.colors.secondary};

          position: relative;

          ::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;

            width: 0;
            height: 2px;
            background-color: ${props => props.theme.colors.secondary};

            transition: width 0.5s;
          }

          :hover {
            ::after {
              width: 100%;
            }
          }
        }
      }
    }
  }

  @media (max-width: 1200px) {
    .event-organizers-card .content-card-event-organizers {
      padding: 50px 5%;
    }
  }

  @media (max-width: 850px) {
    .buttons {
      .link {
        margin-top: 20px;
      }
    }
  }

  @media (max-width: 600px) {
    .event-organizers-card {
      flex-direction: column;

      .img-event-organizers {
        width: 100%;
        margin-bottom: -3px;

        > span {
          border-radius: 12px 12px 0px 0px;
          height: 100% !important;
        }
      }

      .content-card-event-organizers {
        padding: 20px;
        width: 100%;

        border-radius: 0px 0px 12px 12px;

        > h5,
        > p {
          margin-bottom: 20px;
        }
      }
    }
  }
`;
