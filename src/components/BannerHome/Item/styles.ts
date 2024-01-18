import styled from 'styled-components';

export const Container = styled.div`
  width: 1196px;
  height: 411px;

  box-shadow: 0px 4px 72px 8px rgba(255, 255, 255, 0.32);

  background: ${props => props.theme.colors.light};
  border-radius: 32px;

  overflow: hidden;

  display: flex;
  flex-direction: row;

  .div-image {
    position: relative;
    width: 61%;
    height: 100%;
  }

  .data-banner {
    flex: 1;
    height: 100%;

    padding: 70px 65px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .title-banner {
      display: flex;
      flex-direction: column;

      gap: 10px;

      > span {
        font-weight: 400;
        font-size: 1em;
        line-height: 19px;

        color: ${props => props.theme.colors.secondaryDark};
      }

      > h2 {
        font-weight: 700;

        color: ${props => props.theme.colors.secondary};
      }
    }

    > p {
      font-weight: 400;
      font-size: 1.25em;
      line-height: 24px;

      color: ${props => props.theme.colors.secondaryDark};
    }

    .buttons {
      display: flex;
      flex-direction: row;

      margin-top: 20px;

      > button:first-child {
        margin-right: 40px;
      }
    }
  }

  @media (max-width: 1375px) {
    width: calc(100vw - 180px);

    .data-banner {
      padding: 40px;
    }
  }

  @media (max-width: 850px) {
    height: 400px;

    flex-direction: column;
    .div-image {
      width: 100%;
    }

    .data-banner {
      padding: 20px;
    }
  }

  @media (max-width: 850px) {
    height: 500px;
  }

  @media (max-width: 600px) {
    width: calc(100vw - 80px);
  }
`;
