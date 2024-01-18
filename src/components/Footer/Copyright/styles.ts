import styled from 'styled-components';

import theme from '@/styles/theme';

export const Container = styled.div`
  width: 100%;
  height: 50px;
  background: #e3e3e3;

  padding: 5px 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  > section {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    color: ${theme.colors.background};

    > div {
      display: flex;
      flex-direction: row;
      flex: 1;
    }

    .risestudio {
      > a {
        display: flex;
        flex-direction: row;
        align-items: center;
        text-decoration: none;

        > span:first-child {
          width: 38.4px !important;
          height: 31.2px !important;
        }

        > span:last-child {
          margin-left: 10px;

          color: #2c2c2c;

          line-height: 15px;
          font-size: 12px;
        }

        :hover {
          > span:last-child {
            color: rgb(249, 88, 80);
          }
        }
      }
    }

    p {
      font-weight: 400;
      font-size: 12px;
      line-height: 15px;
    }

    /* @media (max-width: 1200px) {
      width: 100%;
      height: 114px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      span {
        margin-top: 15px;
        text-align: center;
      }
    } */
  }

  @media (max-width: 750px) {
    height: auto;
    padding: 10px 20px;

    > section {
      flex-direction: column;

      .risestudio {
        margin-bottom: 20px;
      }
    }
  }
`;
