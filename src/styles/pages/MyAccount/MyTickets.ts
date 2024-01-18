import styled from 'styled-components';

export const Container = styled.div`
  min-height: calc(100vh - 931px);
  height: 100%;

  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;

  > section {
    display: flex;
    flex-direction: row;
    align-items: flex-start;

    margin: 112px 0;
    padding: 0 20px;

    .content {
      flex: 1;
      height: 100%;

      display: flex;
      flex-direction: column;

      padding: 0 0 0 44px;

      .buttons-header {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;

        height: 50px;
      }

      .content-cars {
        padding: 36px 0 12px;

        > h5 {
          color: ${props => props.theme.colors.secondaryLight};

          margin-bottom: 35px;
        }
      }
    }
  }

  @media (max-width: 800px) {
    > section {
      align-items: center;
      flex-direction: column;
    }
  }
`;
