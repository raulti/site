import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  > section {
    max-width: 1254px;

    display: flex;
    flex-direction: row;
    align-items: center;

    overflow: hidden;
    background-color: transparent;
  }

  .button-left,
  .button-right {
    display: flex;
    justify-content: center;
    align-items: center;

    background: ${props => props.theme.colors.light};
    width: 52px;
    height: 44px;
    margin: 0 20px;

    border: 2px solid rgba(95, 98, 102, 0.5);
    border-radius: 12px 0px 0px 12px;
  }

  .button-left {
    border-radius: 12px 0px 0px 12px;
  }
  .button-right {
    border-radius: 0px 12px 12px 0px;
  }

  @media (max-width: 600px) {
    .button-left,
    .button-right {
      margin: 0;
      width: 20px;
    }
    .button-left {
      margin-left: 10px;
    }
    .button-right {
      margin-right: 10px;
    }
  }
`;

interface IPropsContent {
  page?: number;
  numItens?: number;
  itemPerPage?: number;
}

export const Content = styled.div<IPropsContent>`
  max-width: 1254px;
  width: calc(${props => props.itemPerPage} * 418px);

  display: flex;
  flex-direction: row;

  overflow: hidden;

  .contaniner-cards {
    display: flex;
    flex-direction: row;
    padding: 20px 0;

    width: calc((100vw - 180px) * ${props => props.numItens});

    transform: translateX(
      calc(
        (${props => props.page} - 1) * (${props => props.itemPerPage} * 418px) *
          -1
      )
    );

    transition: all 0.5s;
  }

  @media (max-width: 600px) {
    width: 380px;

    .contaniner-cards {
      width: calc((100vw - 60px) * ${props => props.numItens});

      transform: translateX(
        calc((${props => props.page} - 1) * (100vw - 60px) * -1)
      );
    }
  }

  @media (max-width: 440px) {
    width: 100%;
  }
`;

interface IProps {
  index: number;
}

export const Card = styled.div<IProps>`
  width: 418px;

  height: 300px;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: transparent;

  > span {
    border-radius: 12px;
    box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.16);

    overflow: hidden;
  }

  @media (max-width: 600px) {
    margin: 0 10px;
  }

  @media (max-width: 440px) {
    width: calc(100vw - 80px);
  }
`;
