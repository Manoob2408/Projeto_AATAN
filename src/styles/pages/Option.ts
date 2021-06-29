import styled from 'styled-components'

export const PageContainer = styled.div`
  display: flex;
  position: relative;
  min-height: 100vh;
  justify-content: center;
  background-color: #FFC757;
`

export const Container = styled.div`
  max-width: 375px;
  min-height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center
  padding-top: 110px;
  padding-bottom: 120px;
  margin-top: 70px;
`


export const Menu = styled.div`
  display: flex;
  margin-top: 27px;
  flex-direction: row;
  justify-content: space-evenly;
`


interface MenuItemButtonProps {
  firstColorHex: string
  secondColorHex: string
}


export const Card = styled.div`
  margin-top: 30px;
  text-align: center;
`
export const CardImageContainer = styled.div`
  
  
  height: 125px;
  width: 125px;
  position: absolute;
  top: -30;
  left: 0;
  bottom: 0;
  right: 0;
  box-sizing: border-box;
  padding: 0;
  border: none;
  margin: none;
  display: block;
  min-width: 10% !important;
  max-width: 100%;
  min-height: 100%;
  max-height: 100%;
  object-fit: contain;
  
`

export const CardButton = styled.button`
  width: 232px;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #000;
  border: 0px;
  padding: 11px 17px;
  border-radius: 4px;
  background: #fff;
  cursor: pointer;
  margin-top: 18px;
  box-shadow: 2px 2px 4px #0000003b;
`

export const Spacer = styled.div`
  margin-top: 45px;
`
