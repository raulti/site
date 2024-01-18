import styled, { css } from 'styled-components';

import { IDoubtsData } from '@/interfaces/components/CardAccordion';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  height: auto;
`;

export const Doubts = styled.div<IDoubtsData>`
  width: 100%;
  cursor: pointer;

  padding: 8px 16px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 8px;

  font-weight: 600;
  font-size: 16px;
  line-height: 24px;

  color: ${props =>
    props.visible
      ? props.theme.colors.white
      : props.theme.colors.secondaryDark};

  > span {
    color: ${props =>
      props.visible
        ? props.theme.colors.white
        : props.theme.colors.secondaryDark};
  }

  background-color: ${props =>
    props.visible ? props.theme.colors.secondary : 'rgba(133, 153, 196, 0.2)'};

  transition: all 0.5s;

  div {
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.5s;
  }

  ${props =>
    props.visible &&
    css`
      div {
        transform: rotate(180deg);
        transition: transform 0.5s;
      }
    `}

  transition: all 0.5s;
`;

export const DataDoubts = styled.div<IDoubtsData>`
  padding-left: 32px;
  padding-right: 32px;

  transition: all 0.5s ${props => (props.visible ? 'ease-out' : 'ease-in')};

  ${props =>
    props.visible
      ? css`
          max-height: 1000px;
          padding: 24px 20px 40px;
          margin-top: 8px;
        `
      : css`
          max-height: 0;
          overflow: hidden;
        `}

  display: flex;
  flex-direction: column;
  align-items: center;
`;
