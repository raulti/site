import styled, { css } from 'styled-components';

import { IMenuProps } from '@/interfaces/components/Header';

import theme from '@/styles/theme';

export const Container = styled.header`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

  section {
    width: 100%;
    max-width: 1240px;
  }
`;

export const Content = styled.section<IMenuProps>`
  height: 100%;

  padding: 16px 20px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;

  z-index: 2;

  .logo {
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
      cursor: pointer;
    }
  }

  > form {
    width: 280px;

    margin-left: 24px;

    > label {
      margin-bottom: 0;
    }
  }

  nav {
    height: 48px;
    padding-left: 40px;

    display: flex;
    flex-direction: row;
    align-items: center;

    a {
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      color: ${props => props.theme.colors.gray};
    }

    > a,
    .dropdown {
      margin-left: 15px;
    }
  }

  .div-button {
    margin-left: 30px;
    .dropdown {
      margin-left: 0;
    }
  }

  @media (max-width: 1240px) {
    .button {
      margin-left: 0;
      padding-left: 0;
      flex: 1;
      display: flex;
      justify-content: flex-end;
    }

    nav {
      position: absolute;
      top: 100px;
      right: 20px;

      flex-direction: column;
      align-items: flex-start;
      height: 0;

      flex: 0;

      background: ${theme.colors.background};
      border-radius: 12px 0px 12px 12px;
      box-shadow: 5px 8px 20px rgba(15, 15, 15, 0.56);
      opacity: 0;

      transition: height 0.5s, padding-top 0.5s, padding-bottom 0.5s,
        opacity 0.5s;

      z-index: 88;

      padding: 0 20px 0 0;

      > a {
        padding: 0 10px;
      }

      .div-button {
        margin-top: 20px;
        padding-left: 10px;
      }

      ${props =>
        props.menuOpened &&
        css`
          height: 200px;
          opacity: 1;

          border: solid rgba(252, 252, 252, 0.8);

          border-width: 1px 0 0 1px;
          padding-top: 20px;
          padding-bottom: 20px;
        `};
    }
  }
`;

export const MenuButton = styled.button<IMenuProps>`
  background: transparent;
  border: none;
  outline: none;

  width: 40px;
  height: 40px;

  margin-left: 20px;

  border: 1px solid ${props => props.theme.colors.gray};

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: ${theme.colors.grayLight};
    width: 20px;
    height: 20px;

    transition: all 0.5s;
  }

  ${props =>
    props.menuOpened
      ? css`
          svg:first-child {
            display: none;
          }
          svg:last-child {
            display: flex;
          }
        `
      : css`
          svg:first-child {
            display: flex;
          }
          svg:last-child {
            display: none;
          }
        `};

  @media (min-width: 1241px) {
    display: none;
  }
`;
