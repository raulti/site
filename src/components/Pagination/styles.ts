import styled, { css } from 'styled-components';

import theme from '@/styles/theme';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  padding: 50px 0;

  input {
    background-color: transparent !important;
    border: none !important;
    color: ${theme.colors.grayLight} !important;
    padding: 0 !important;
    width: 30px !important ;
    margin-right: 0 !important;
  }

  .rc-pagination-prev:hover button,
  .rc-pagination-next:hover button {
    border-color: ${theme.colors.grayLight};
  }

  color: ${theme.colors.grayLight};

  .rc-pagination {
    display: flex;
    flex-direction: row;
  }

  .rc-pagination-simple .rc-pagination-simple-pager {
    height: 40px;
    margin-right: 20px;
  }

  .rc-pagination-item {
    position: relative;
    display: flex;
    a {
      display: flex;
      margin: auto;
      color: ${theme.colors.grayLight};
      font-size: 20px;
    }
    height: 40px;

    background-color: transparent;
    border-color: transparent;
  }

  .rc-pagination-prev,
  .rc-pagination-next,
  .rc-pagination-jump-prev,
  .rc-pagination-jump-next {
    height: 40px;

    button {
      background-color: transparent;
      color: ${theme.colors.grayLight};
    }
  }

  .rc-pagination-next button:after,
  .rc-pagination-prev button:after {
    font-size: 30px;
    margin-top: -2px;
  }

  .rc-pagination-prev .rc-pagination-item-link,
  .rc-pagination-next .rc-pagination-item-link {
    display: flex;
    position: relative;
    margin: auto 0;
    justify-content: center;
  }

  .rc-pagination-item:hover {
    border-color: ${theme.colors.grayLight};
    transition: all 0.3s;

    a {
      border-color: ${theme.colors.grayLight};
      font-weight: bold;
    }
  }

  .rc-pagination-prev:hover .rc-pagination-item-link,
  .rc-pagination-next:hover .rc-pagination-item-link {
    color: ${theme.colors.secondary};

    background-color: ${theme.colors.secondary};
  }

  .rc-pagination-item-active {
    border: 0;
    border-radius: 50%;
    background-color: ${theme.colors.secondary};
    a {
      color: ${theme.colors.background};
      :hover {
        color: ${theme.colors.secondary};
        cursor: not-allowed;
      }
    }
  }

  /* .rc-pagination-prev {
    background-color: red;
  } */
`;

interface IButton {
  typePage?: 'page' | 'prev' | 'next' | 'jump-prev' | 'jump-next';
}

export const Button = styled.button<IButton>`
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${props => props.theme.colors.light};
  width: 50px;
  height: 44px;
  margin: 0 20px;

  border: 2px solid rgba(95, 98, 102, 0.5);
  border-radius: 12px 0px 0px 12px;

  ${props =>
    props.typePage === 'next'
      ? css`
          border-radius: 0px 12px 12px 0px;
        `
      : css`
          border-radius: 12px 0px 0px 12px;
        `}
`;
