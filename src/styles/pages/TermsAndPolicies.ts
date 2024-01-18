import styled from 'styled-components';

export const Container = styled.main`
  .content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    max-width: 710px;
    margin: 20px 0 65px;

    padding: 0 20px;

    > h3 {
      margin: 45px 0;
    }

    > p {
      font-size: 1.125em;
      line-height: 24px;
    }
  }

  @media (max-width: 600px) {
    .content {
      margin: 20px 0 40px;
      > h3 {
        margin: 25px 0;
      }
    }
  }
`;
