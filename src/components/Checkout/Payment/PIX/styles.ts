import styled from 'styled-components';

export const Container = styled.div`
  .step {
    display: flex;
    flex-direction: row;

    margin-top: 20px;

    > p {
      flex: 1;
    }
  }
`;

export const NumberIcon = styled.div`
  color: ${props => props.theme.colors.gray};
  border-radius: 50%;
  border: solid 1px ${props => props.theme.colors.gray};

  height: 20px;
  width: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-right: 10px;
`;
