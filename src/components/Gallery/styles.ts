import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  .button-left,
  .button-right {
    display: flex;
    justify-content: center;
    align-items: center;

    background: ${props => props.theme.colors.light};
    width: 50px;
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
    .content-banner {
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
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: center;

    height: 825px;
    //width: ${props => (props.numItens / 6) * 1254}px !important;
    padding: 25px 0;

    //transform: translateX(${props => -(props.page - 1) * 1254}px);

    width: calc((100vw - 180px) * ${props => props.numItens / 2});

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
      height: 330px;

      width: calc((100vw - 60px) * ${props => props.numItens});
      transform: translateX(
        calc(
          (${props => props.page} - 1) *
            (${props => props.itemPerPage} * (100vw - 60px)) * -1
        )
      );
    }
  }
`;

interface IProps {
  index: number;
}

export const Card = styled.div<IProps>`
  margin: 0 29px;
  width: 360px;

  ${props =>
    props.index % 3 === 0
      ? css`
          height: 60%;
        `
      : css`
          height: ${(props.index - 2) % 6 === 0 ? '60%' : '35%'};
        `}

  position: relative;

  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.16);
  border-radius: 12px;
  overflow: hidden;

  display: flex;
  align-items: flex-end;

  .content-text-gallery {
    width: 100%;
    padding: 100px 24px 24px;

    background: linear-gradient(
      180deg,
      rgba(33, 45, 71, 0) 0%,
      rgba(33, 45, 71, 0.9) 100%
    );
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    > span {
      font-weight: 600;
      font-size: 16px;
      line-height: 19px;

      color: ${props => props.theme.colors.white};
    }

    .local-date-gallery {
      margin-top: 8px;

      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      > p {
        line-height: 17px;

        color: ${props => props.theme.colors.light};
      }
    }
  }

  @media (max-width: 600px) {
    margin: 10px;
    height: 330px;
  }

  @media (max-width: 440px) {
    width: calc(100vw - 80px);
  }
`;
