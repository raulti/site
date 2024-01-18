import styled from 'styled-components';

export const Container = styled.div`
  font-size: 18px;
  color: ${props => props.theme.colors.gray};

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: row;

  > div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
  }

  input {
    margin-right: 10px;
    -webkit-appearance: none;
    background-color: transparent;
    border: 1px solid #888888;

    height: 18px;
    width: 18px;

    position: relative;

    &:checked {
      &:after {
        content: ' ';
        width: 10px;
        height: 10px;
        position: absolute;
        inset: 3px;
        background: #5cbaf2;
      }
    }
  }

  label {
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    /* identical to box height */

    color: #878787;
  }

  .content-error {
    margin-left: 5px;
  }

  .error {
    color: #c53030;

    display: flex;
    align-items: center;

    svg {
      margin-right: 5px;
    }
  }
`;
