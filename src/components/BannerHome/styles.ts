import styled from 'styled-components';

import { IBannerHomeContent } from '@/interfaces/components/BannerHome';

export const Container = styled.div`
  position: relative;

  width: 100%;
  height: 527px;
  padding-top: 56px;
  z-index: 1;

  > span {
    z-index: -1;
  }

  .content-banner {
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .button-left,
    .button-right {
      display: flex;
      justify-content: center;
      align-items: center;

      background: ${props => props.theme.colors.light};
      border: none;
      width: 50px;
      height: 44px;
      margin: 0 20px;
    }

    .button-left {
      width: 50px !important;
      border-radius: 12px 0px 0px 12px;
    }
    .button-right {
      width: 50px !important;
      border-radius: 0px 12px 12px 0px;
    }

    .itens {
      width: calc(100vw - 180px);

      display: flex;
      flex-direction: row;

      overflow: hidden;

      border-radius: 32px;

      box-shadow: 0px 4px 72px 8px rgba(255, 255, 255, 0.32);
    }
  }

  .dots {
    z-index: 9;
    width: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    margin-top: 24px;

    > button {
      background-color: transparent;
      border: none;
    }

    .dot {
      display: flex;
      align-items: flex-end;
      justify-content: center;

      height: 12px;
      width: 12px;

      margin: 0 5px;

      border-radius: 6px;
    }
  }

  @media (max-width: 950px) {
    height: 516px;
  }

  @media (max-width: 850px) {
    height: 616px;
  }

  @media (max-width: 600px) {
    .content-banner {
      .button-left,
      .button-right {
        margin: 0 10px;
        width: 20px !important;
      }
      .itens {
        width: calc(100vw - 80px);
      }
    }
  }
`;

export const Content = styled.div<IBannerHomeContent>`
  display: flex;
  flex-direction: row;
  width: ${props => props.numItens * 1196}px;

  transform: translateX(${props => -(props.page - 1) * 1196}px);

  transition: all 0.5s;

  @media (max-width: 1375px) {
    width: ${props => props.numItens * (props.widthPage - 180)};

    transform: translateX(
      ${props => -(props.page - 1) * (props.widthPage - 180)}px
    );
  }

  @media (max-width: 600px) {
    width: ${props => props.numItens * (props.widthPage - 80)};
    transform: translateX(
      ${props => -(props.page - 1) * (props.widthPage - 80)}px
    );
  }
`;
