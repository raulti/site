import styled from 'styled-components';

import { ILoadingContainer } from '@/interfaces/components/Loading';

export const Container = styled.div<ILoadingContainer>`
  height: 50px;
  width: 100%;
  border-radius: 5px;
  padding: 0 10px 0 10px;
  margin-top: 10px;

  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  flex-direction: row;

  border: none;
  background-color: ${props => props.theme.colors.white};
  box-shadow: 0px 3px 6px #00000029;
  overflow: hidden;

  .title-card {
    flex: 2;
    height: 100%;
    margin-right: 10px;

    display: flex;
    align-items: center;
  }

  .chevron {
    flex: 1;
    height: 100%;
  }

  .title-card-loading {
    width: 80px;
    height: 20px;
  }

  .time-loading {
    width: 110px;
    height: 20px;
  }

  .title-card-loading,
  .time-loading {
    background-color: #eee;
    background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);

    background-size: 200% 100%;

    -webkit-animation: 1.5s bg-loading linear infinite;
    animation: 1.5s bg-loading linear infinite;
  }

  @keyframes bg-loading {
    to {
      background-position-x: -200%;
    }
  }
`;
