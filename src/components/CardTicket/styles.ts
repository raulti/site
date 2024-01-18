import styled from 'styled-components';

export const Container = styled.div`
  border: 2px solid ${props => props.theme.colors.grayLight};
  border-radius: 12px;
  padding: 24px;

  .sold-off {
    color: red;
  }

  .title-cads {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding-bottom: 16px;
    margin-bottom: 16px;

    border-bottom: 1px solid ${props => props.theme.colors.grayLight}50;

    > h5 {
      font-weight: 500;
      font-size: 18px;
      line-height: 22px;

      color: ${props => props.theme.colors.secondaryDark};
    }

    > a {
      font-style: italic;
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      text-align: right;
      text-decoration-line: underline;

      color: ${props => props.theme.colors.gray};
    }
  }

  .value {
    display: flex;
    flex-direction: row;
    align-items: flex-end;

    font-weight: 400;
    font-size: 1.25em;
    line-height: 24px;

    > small {
      font-size: 14px;
      line-height: 16px;
      margin-left: 5px;
    }

    color: ${props => props.theme.colors.secondary};
  }

  .parcel-and-qtd {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;

    margin-top: 5px;

    .parcel {
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;

      color: ${props => props.theme.colors.gray};
    }

    .qtd {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      > button {
        background-color: transparent;
        border: none;

        color: ${props => props.theme.colors.secondary};

        :disabled {
          color: ${props => props.theme.colors.secondaryLight};
        }
      }

      > input {
        margin: 0 3px;
        width: 80px;
        border-radius: 6px;

        text-align: center;
        background-color: transparent;
        border-color: ${props => props.theme.colors.grayLight}50;
        color: ${props => props.theme.colors.gray};

        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
      }
    }
  }
`;
