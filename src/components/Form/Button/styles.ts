import styled, { css } from 'styled-components';

import { IContainerButton } from '@/interfaces/components/form/Button';

const colorsTypeVariations = {
  primary: css`
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
    border: none;
  `,
  secondary: css`
    background: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.secondary};
    border: solid 2px ${props => props.theme.colors.secondary};
  `,
  tertiary: css`
    background: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.white};
    border: none;
  `,
};

export const Container = styled.button<IContainerButton>`
  width: ${props => (props.width ? `${props.width}px` : 'auto')};
  min-width: 140px;
  //height: 48px;
  padding: 12px 16px;

  ${props => colorsTypeVariations[props.typeButton || 'primary']}

  border-radius: 12px;

  font-family: 'Inter';
  text-decoration: none;
  font-style: normal;
  font-weight: 600;
  font-size: 1em;
  //line-height: 24px;

  position: relative;

  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: center;
`;
