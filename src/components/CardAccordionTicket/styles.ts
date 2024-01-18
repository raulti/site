import styled, { css } from 'styled-components';

import { IDoubtsData } from '@/interfaces/components/CardAccordionTicket';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  height: auto;
`;

export const Doubts = styled.div<IDoubtsData>`
  width: 100%;
  cursor: pointer;
  height: 64px;

  padding: 0 16px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  font-weight: 600;
  font-size: 16px;
  line-height: 24px;

  color: ${props =>
    props.visible ? props.theme.colors.primary : props.theme.colors.gray};

  background: ${props => props.theme.colors.white};
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.16);
  border-radius: 12px;

  transition: all 0.5s;

  .titles {
    > span {
      margin-right: 55px;
    }
  }

  .chevron {
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.5s;
  }

  ${props =>
    props.visible &&
    css`
      .chevron {
        transform: rotate(180deg);
        transition: transform 0.5s;
      }
    `}

  transition: all 0.5s;
`;

export const DataDoubts = styled.div<IDoubtsData>`
  padding: 0 24px;
  background: rgba(33, 45, 71, 0.08);
  border-radius: 12px;

  ${props =>
    props.visible
      ? css`
          max-height: calc((${props.numberTicket} * 123px) + 500px);
          padding: 24px;
          margin-top: 16px;
          transition: all 0.4s ease-out;
        `
      : css`
          max-height: 0;
          overflow: hidden;
          transition: all 0.4s ease-out;
        `}

  display: flex;
  flex-direction: column;
  align-items: center;
`;
