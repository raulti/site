import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ::selection {
      background-color:#114F73;
      color: #E4E4E4;
  }


  ::-webkit-scrollbar{
    width: 6px;
  }

  ::-webkit-scrollbar-track{
    background-color: #E4E4E4;
    border-radius: 19px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #C4C4C4;
    border-radius: 19px;
  }

  body {
    background: ${props => props.theme.colors.background};
    font-family: 'Inter', sans-serif;
    font-weight: 400;


    /* font-size: calc( 8px + ( (16 - 8) / 1200 ) * 100vw); */
    font-size: 16px;
  }



  a {
    font-weight: 500;
    font-size: 1em;
    line-height: 19px;
    text-decoration-line: underline;
    color: ${props => props.theme.colors.secondary};
  }

  a, button {
    cursor: pointer;
  }

  input, textarea, h1, h2, h3, h4, h5, p, li, a, button, label {
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: normal;
  }

  h2{
    //font-size: 32px;
    font-size: 2em;

    font-weight: 300;

    color: ${props => props.theme.colors.secondaryDark};
  }

  h3{
    //font-size: 24px;
    font-size: 1.5em;

    font-weight: 700;
    line-height: 29px;
    color: ${props => props.theme.colors.secondaryDark};
  }

  h4{
    //font-size: 24px;
    font-size: 1.5em;

    font-weight: 600;
    line-height: 28px;
    color: ${props => props.theme.colors.secondary};
  }

  h5{
   // font-size: 18px;
    font-size: 1.125em;

    font-weight: 600;
    line-height: 27px;
    color: ${props => props.theme.colors.secondary};
  }

  p, span{
   // font-size: 14px;
    font-size: 0.875em;

    font-weight: 400;
    line-height: 21px;
    color: ${props => props.theme.colors.gray};
  }

  main{
    width: 100%;
    min-height: calc(100vh - 931px);
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  section{
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    max-width: 1196px;
  }

  .title {
    max-width: 955px;
    width: 100%;
    margin-bottom: 20px;
    padding: 0 20px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;


    >a{
      margin-bottom: 5px;
    }

  }
`;
