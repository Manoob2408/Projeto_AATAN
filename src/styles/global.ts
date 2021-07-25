import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
      font-family: 'Open Sans', sans-serif;
      background: ${({ theme }) => theme.colors.background};
    }

    

  ::-webkit-scrollbar {
    width: 0.8rem;
    background: ${({ theme }) => theme.colors.background};
  }
  
  ::-webkit-scrollbar-thumb {
    background: #FFC757;
    border-radius: 1rem;
  }

`;
