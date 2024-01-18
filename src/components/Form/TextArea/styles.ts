import styled from 'styled-components';

export const TextAreaContainer = styled.div`
  textarea {
    min-height: 100px !important;
    background-color: transparent;
    padding-top: 10px !important;

    &::-webkit-scrollbar {
      width: 10px;
      background-color: ${props => props.theme.colors.secondaryDark};
      cursor: pointer;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
      background-color: rgba(0, 0, 0, 0.4);

      cursor: pointer;
    }
  }
`;
