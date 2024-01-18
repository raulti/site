import styled from 'styled-components';

export const Container = styled.div`
  .img-event {
    background-color: #9ea0a2;
    border-radius: 32px 32px 0px 0px;
    overflow: hidden;
    box-shadow: 0px 4px 72px 8px rgba(255, 255, 255, 0.32);

    width: 100%;
    height: 332px;

    position: relative;

    > span {
      width: 100%;
      img {
        object-fit: cover;
      }
    }
  }
  .text-card-event {
    border: solid #9ea0a2;
    border-width: 0px 2px 2px 2px;

    box-shadow: 0px 4px 72px 8px rgba(255, 255, 255, 0.32);
    border-radius: 0px 0px 32px 32px;
    padding: 40px;

    .title-card-event {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      > h1 {
        font-weight: 700;
        font-size: 40px;
        line-height: 48px;
        color: ${props => props.theme.colors.primary};
      }

      .category {
        width: 40px;
        height: 40px;
        border-radius: 8px;
        border: 2px solid ${props => props.theme.colors.secondaryLight};

        svg {
          scale: 0.3;
          margin: -70%;
        }
      }
    }
    > small {
      font-weight: 500;
      font-size: 12px;
      line-height: 15px;
      color: ${props => props.theme.colors.gray};
    }

    .data-event {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;

      margin: 16px -8px 0;

      > span {
        padding: 8px;

        font-weight: 500;
        font-size: 1.25em;
        line-height: 24px;
        color: ${props => props.theme.colors.secondaryDark};

        > svg {
          margin-right: 12px;
          color: ${props => props.theme.colors.grayLight};
        }
      }
    }
  }
`;
