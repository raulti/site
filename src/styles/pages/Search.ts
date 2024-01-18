import styled, { css } from 'styled-components';

export const Container = styled.main`
  height: 100%;
  background-color: ${props => props.theme.colors.background};
  box-shadow: inset 4px 4px 80px rgba(0, 0, 0, 0.05);

  display: flex;
  flex-direction: column;

  .search-result {
    align-items: flex-start;

    margin-top: 100px;
    padding: 0 20px;

    .search-title {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;

      margin-bottom: 40px;

      > svg {
        color: ${props => props.theme.colors.secondaryLight};
      }

      > h3 {
        margin: 0 16px;
      }

      > span {
        font-weight: 500;
        font-size: 1.25em;
        line-height: 24px;

        color: ${props => props.theme.colors.secondaryDark};
      }
    }

    .filters-order {
      width: 100%;

      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;

      > form {
        width: 100%;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
      }

      .filters,
      .order {
        padding: 5px 0;
        > span {
          font-weight: 400;
          font-size: 18px;
          line-height: 22px;

          color: ${props => props.theme.colors.gray};
        }
      }

      .filters {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;

        .tag {
          width: 159px;
          height: 48px;
          margin-left: 32px;

          border: none;
          background: ${props => props.theme.colors.secondary};
          color: ${props => props.theme.colors.light};
          border-radius: 12px;
          padding: 0 12px;

          font-weight: 500;
          font-size: 14px;
          line-height: 20px;

          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .select {
          width: 200px;
          margin-left: 32px;

          > label {
            margin-bottom: 0;
          }

          .react-select__control {
            border: 2px solid ${props => props.theme.colors.gray};
            border-radius: 12px;
          }
        }

        @media (max-width: 800px) {
          flex-direction: column;
          align-items: flex-start;

          > span {
            margin-bottom: 20px;
          }

          .tag,
          .select {
            margin-left: 20px;
            margin-bottom: 10px;
          }
        }
      }

      .order {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;

        .select {
          width: 220px;

          > label {
            margin-bottom: 0px;
            background-color: transparent;

            .react-select__control {
              background-color: transparent;
            }

            .react-select__value-container {
              padding-left: 15px;

              div {
                color: ${props => props.theme.colors.secondary};
              }
            }
          }
        }
      }
    }
  }

  .categories {
    padding: 80px 0 90px;

    .content-categories {
      padding: 20px 0;
      display: flex;
      flex-direction: row;

      .button-category {
        margin: 0 17.5px;
      }
    }
  }

  .title-and-date-scheduled {
    display: flex;
    flex-direction: row;

    .date-scheduled {
      display: flex;
      flex-direction: row;
      align-items: flex-end;

      margin-left: 32px;

      > p {
        margin-left: 20px;

        font-style: italic;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;

        color: ${props => props.theme.colors.gray};
      }
    }
  }

  .container-search {
    display: flex;
    position: relative;

    margin-bottom: 110px;
    padding: 0 20px;

    > span {
      height: 322px !important;

      top: 50% !important;
      transform: translateY(-50%) !important;
    }

    .card-search {
      background: rgba(33, 45, 71, 0.75);
      box-shadow: 0px 4px 64px rgba(33, 45, 71, 0.32);
      backdrop-filter: blur(24px);

      border-radius: 12px;

      width: 100%;
      max-width: 778px;

      padding: 100px 120px;

      z-index: 1;

      > h4 {
        margin-bottom: 8px;

        font-weight: 500;
        color: ${props => props.theme.colors.white};
      }

      > p {
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;

        color: ${props => props.theme.colors.white};
      }

      .buttons-search {
        padding: 24px 0 38px;
        margin: 0 -8px;

        width: calc(100% +16px);

        display: flex;
        flex-direction: row;
        flex-wrap: wrap;

        > button {
          margin: 8px;
        }
      }

      > button {
        width: 174px;
      }
    }
  }

  .events {
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    margin: 50px 0;

    .card-event {
      margin: 20px;
    }
  }

  @media (max-width: 800px) {
    .container-search .card-search {
      padding: 80px 60px;
    }
  }

  @media (max-width: 600px) {
    .container-search .card-search {
      padding: 60px 40px;
    }
  }
`;

export const EventsLastDaysSale = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  background-color: ${props => props.theme.colors.background};
  box-shadow: inset 4px 4px 80px rgba(0, 0, 0, 0.05);

  .title {
    max-width: 1254px;
  }
`;

interface IButton {
  active: boolean;
}

export const ButtonSearch = styled.button<IButton>`
  height: 40px;

  padding: 0 16px;

  border: 2px solid;

  transition: background-color 0.5s, color 0.5s, border-color 0.5s;

  ${props =>
    props.active
      ? css`
          background-color: ${props.theme.colors.light};
          color: ${props.theme.colors.secondary};
          border-color: ${props.theme.colors.light};
        `
      : css`
          background-color: transparent;
          color: ${props.theme.colors.grayLight};
          border-color: ${props.theme.colors.grayLight};
        `}

  border-radius: 29px;
`;
