import styled from "styled-components";

export const TabMenu = styled.a`
  display: flex;
  position: fixed;
  bottom: 0;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 120px;
  border-top: 2px solid #e9e9e9;
  background: white;
`;

export const TabMenuHomeButtonContainer = styled.button`
  width: 100px;
  display: flex;
  justify-content: center;
  border: 0px;
  background: transparent;
  cursor: pointer;

  border-bottom: 3px solid #fff;
  transition: ease-in 0.2s;

  &:hover {
    border-bottom: 3px solid #ffc757;
  }
`;

export const TabMenuHomeButton = styled.div`
  position: relative;
  border-radius: 50%;
  height: 74px;
  width: 74px;
`;

export const TabMenuItem = styled.button`
  position: relative;
  display: flex;
  width: 26px;
  height: 26px;
  justify-content: center;
  border: 0px;
  background: transparent;
  cursor: pointer;
  border-bottom: 3px solid #fff;
  transition: ease-in 0.2s;

  padding: 1.05rem;
  &:hover {
    border-bottom: 3px solid #ffc757;
  }
`;
