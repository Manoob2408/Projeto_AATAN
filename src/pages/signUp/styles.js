import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px;
  border-radius: 10px;

  background: #FAF5E3;
  
  p {
    color: #ff3333;
    margin-bottom: 15px;
    border: 1px solid #ff3333;
    padding: 10px;
    width: 100%;
    text-align: center;
  }
 
  hr {
    margin: 20px 0;
    border: none;
    border-bottom: 1px solid #cdcdcd;
    width: 100%;
  }
  a {
    font-size: 16;
    font-weight: bold;
    color: #999;
    text-decoration: none;
  }

  .input-container {
    position: relative;
  }
  
  label {
    top: 0;
    left: 0; right: 0;
    color: #616161;
    display: flex;
    align-items: center;
    position: absolute;
    font-size: 1rem;
    cursor: text;
    transition: .2s ease-in-out;
    box-sizing: border-box;
  }
  
  /* Interation */
  input:valid,
  input:focus {
    border-bottom: 2px solid #A5A5A5;  
  }
  
  input:valid + label,
  input:focus + label {
    color: #D8D8D8;
    font-size: .8rem;
    top: -30px;
    pointer-events: none;
  }
`;