import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  .preview {
    margin-right: 16px;

    height: 101px;
    width: 369px;

    background: #f9f9f9;
    box-shadow: 0px 4px 56px 4px rgba(0, 0, 0, 0.08);
  }

  > input {
    display: none;
  }

  label {
    cursor: pointer;
    color: ${props => props.theme.colors.gray};
  }

  > div > span {
    background-color: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.white};

    &::before {
      border-color: ${props => props.theme.colors.secondary} transparent;
    }
  }
`;
