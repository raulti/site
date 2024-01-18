import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin: 90px 0;

  padding: 0 20px;

  .banner-img {
    width: 60%;
    > span {
      border-radius: 32px 0px 0px 32px;
      overflow: hidden;
    }
  }

  .banner-text {
    flex: 1;
    max-width: 365px;

    margin-left: 8%;

    > p {
      font-size: 1.125em;

      margin-top: 17px;
    }
  }

  @media (max-width: 600px) {
    margin: 40px 0;
    flex-direction: column;
    .banner-img {
      width: 100%;
      > span {
        border-radius: 32px 32px 0px 0px;
      }
    }
    .banner-text {
      margin-left: 0;
      max-width: 100%;
      margin-top: 20px;
    }
  }
`;
