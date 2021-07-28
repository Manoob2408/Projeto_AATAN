import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
      font-size: 10px;
    }

    body {
      font-family: 'Open Sans', sans-serif;
      background: ${({ theme }) => theme.colors.background}
    }

    input {
      border: 0;
      outline: none;
      background: none;
    }

    .input {
      width: 100%;
      height: 3.5rem;
      margin-bottom: 1rem;
      background-color: white;
      border-radius: 1rem;
      padding: 1rem;
      box-shadow: .1rem .1rem .4rem rgba(0, 0, 0, .2);
    }

    button {
      outline: none;
    }

    .btn {
      color: #fff;
      font-size: 16px;
      border-radius: .5rem;
      background: #7DBAE8;
      height: 46px;
      border: 0;
      width: 90%;
      margin: 2rem auto 0;
      font-weight: bold;
    }

    .btn:active {
      opacity: .5;
    }
`
