import styled, { css } from 'styled-components';

import { IContainerButtonCategory } from '@/interfaces/components/ButtonCategory';

export const Container = styled.button<IContainerButtonCategory>`
  border: none;
  background-color: transparent;

  .card-category {
    width: 130px;
    height: 130px;

    display: flex;
    justify-content: center;
    align-items: center;

    background: ${props => props.theme.colors.light};
    border-radius: 24px;

    margin-bottom: 16px;

    ${props =>
      props.active
        ? css`
            box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.16);
          `
        : css`
            box-shadow: 0px 4px 64px rgba(46, 82, 161, 0.24);
          `}

    transition: all 0.5s;

    svg,
    path {
      fill: ${props =>
        props.active
          ? props.theme.colors.primary
          : props.theme.colors.secondary} !important;

      transition: fill 0.2s;
    }
  }

  .category-title {
    font-weight: 600;
    font-size: 1.25em;
    line-height: 24px;
    text-align: center;

    color: ${props =>
      props.active ? props.theme.colors.secondary : props.theme.colors.gray};

    transition: color 0.2s;
  }
`;
