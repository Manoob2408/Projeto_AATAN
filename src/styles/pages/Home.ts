import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const HeaderContainer = styled.div`
  width: 100%;
  height: 110px;
  box-shadow: 0px 3px 6px #0000000F;
`

export const Menu = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-evenly;
`

export const MenuItemContainer = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  border: 0;
  background: transparent;

`

interface MenuItemButtonProps {
  firstColorHex: string
  secondColorHex: string
}

export const MenuItemButton = styled.div<MenuItemButtonProps>`
  width: 58px;
  height: 58px;
  border-radius: 50%;
  padding: 15px;

  background: transparent linear-gradient(180deg, ${({ firstColorHex }) => firstColorHex} 0%, ${({ secondColorHex }) => secondColorHex} 100%) 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #0000003B;

`

export const MenuItemTitle = styled.div`
  margin-top: 8px;
  font-family: 'Open Sans', sans-serif;
  font: normal normal bold 13px Open Sans;
  color: #404E7F;
`

export const Highlights = styled.div``

export const TabMenu = styled.div``

export const Card = styled.div`
  display: flex;
  width: 335px;
  height: 183px;
  background: #FFC757;
  box-shadow: 0px 3px 6px #00000024;
  border-radius: 14px;
  padding: 17px;
`

export const CardContent = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
`

export const CardImageContainer = styled.div`
  display: flex;
  flex: 1;
`

export const CardTitle = styled.div`
  font-family: 'Open Sans', sans-serif;
  font-size: 20px;
  font-weight: bold;
`

export const CardText = styled.div`
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-weight: bold;
`

export const CardButton = styled.button`
  width: 132px;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-weight: bold;
  color: white;
  border: 0px;
  padding: 11px 17px;
  border-radius: 4px;
  background: black;
  cursor: pointer;
`
