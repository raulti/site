import styled, { css } from 'styled-components';

export const Container = styled.main`
  height: 100%;
  background-color: ${props => props.theme.colors.background};
  box-shadow: inset 4px 4px 80px rgba(0, 0, 0, 0.05);

  display: flex;
  flex-direction: column;

  .categories {
    padding: 80px 0 85px;

    .content-categories {
      padding: 10px 0;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;

      .button-category {
        margin: 10px 17.5px;
      }
    }
  }

  .popular-events,
  .scheduled-events,
  .container-search,
  .events-last-days-sale,
  .photos-events-recent {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .popular-events,
  .scheduled-events,
  .events-last-days-sale,
  .photos-events-recent {
    margin-bottom: 90px;
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

      /* > button {
        width: 174px;
      } */
    }
  }

  @media (max-width: 800px) {
    .container-search .card-search {
      padding: 80px 60px;
    }
  }

  @media (max-width: 600px) {
    .scheduled-events {
      .title,
      .title-and-date-scheduled,
      .date-scheduled {
        flex-direction: column !important;
        align-items: center !important;
        margin-left: 0 !important;
        margin-top: 10px;
        > p {
          margin-left: 0 !important;
          margin-top: 10px;
          text-align: center;
        }

        a {
          margin-top: 10px;
        }
      }
    }
    .container-search .card-search {
      padding: 60px 40px;
    }
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
