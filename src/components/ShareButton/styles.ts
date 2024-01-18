import styled, { css } from 'styled-components';

import { IShareButtonContainer } from '@/interfaces/components/ShareButton';

export const Container = styled.div<IShareButtonContainer>`
  width: 50px;
  height: 50px;

  position: relative;

  .btn {
    position: absolute;
    border: none;
    z-index: 10;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 50px;
    height: 50px;
    border-radius: 50%;

    ${props =>
      props.typeButton === 'primary'
        ? css`
            background-color: ${props.theme.colors.primary};
            border: 2px solid ${props.theme.colors.primary};
            color: ${props.theme.colors.white};
          `
        : css`
            background-color: white;
            border: 2px solid ${props.theme.colors.gray};
            color: ${props.theme.colors.gray};
            box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.16);
          `}
  }

  .list {
    z-index: -1;
    overflow: hidden;
  }

  .item {
    position: absolute;
    list-style: none;
    transition: transform 0.5s;
    transition-delay: var(--d);

    width: 48px;
    height: 48px;
    border-radius: 50%;

    background-color: white;
    border: 2px solid ${props => props.theme.colors.gray};
    color: ${props => props.theme.colors.gray};

    z-index: 9;

    > button {
      width: 100%;
      height: 100%;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  ${props =>
    props.active &&
    css`
      .btn {
        border-color: ${props.theme.colors.primary};
      }

      .item:nth-child(1) {
        transform: translateX(-55px);

        :hover {
          border-color: #3b5998;
          color: #3b5998;
        }
      }

      .item:nth-child(2) {
        transform: translateY(-55px);

        :hover {
          border-color: #25d366;
          color: #25d366;
        }
      }

      .item:nth-child(3) {
        transform: translateX(55px);

        :hover {
          border-color: #f77737;
          color: #f77737;
        }
      }
    `}
`;
