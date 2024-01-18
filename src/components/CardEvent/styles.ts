import styled from 'styled-components';

export const Container = styled.div`
  height: 455px;
  width: 360px;

  background: ${props => props.theme.colors.light};
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.16);
  border-radius: 12px;

  margin: 0 29px;

  .div-img-card-event {
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    overflow: hidden;

    cursor: pointer;
  }

  .div-share-button {
    width: 100%;
    margin-top: -25px;
    padding: 0 32px;

    display: flex;
    justify-content: flex-end;
  }

  .content-card-event {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    flex: 1;
    padding: 0 25px 32px;

    height: calc(100% - 236px);

    cursor: pointer;

    .date {
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;

      color: ${props => props.theme.colors.gray};
    }

    > p {
      font-weight: 400;
      font-size: 18px;
      line-height: 28px;

      color: ${props => props.theme.colors.gray};
    }
  }

  @media (max-width: 600px) {
    margin: 0 10px;
  }

  @media (max-width: 440px) {
    width: calc(100vw - 80px);
  }
`;
