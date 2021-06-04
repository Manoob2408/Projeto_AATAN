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

export const Highlights = styled.div`
  width: 100%;
  padding: 28px;
`

export const HighlightsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const HighlightsTitle = styled.div`
  font-family: 'Open Sans', sans-serif;
  font-size: 23px;
  font-weight: bold;
`

export const HighlightsSeeMore = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  background-color: transparent;
  cursor: pointer;
`

export const HighlightsSeeMoreText = styled.div`
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  color: #B8B8B8;
  text-decoration: none;
`

export const HighlightsSeeMoreIcon = styled.div`
  margin-left: 8px;
  transform: rotate(-90deg);
`

export const HighlightsContent = styled.div`
  margin-top: 14px;
  padding: 0 35px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 86px 86px;
  grid-template-areas: "first second"
                       "first second";
  gap: 10px;
`

export const HighlightsPrimaryImage = styled.div`
  grid-area: first;
  position: relative;
  border: 2px solid #A7A7A7;
  border-radius: 7px 0px 0px 7px;
  box-shadow: 0px 3px 6px #00000045;
`

export const HighlightsSecondaryImageContainer = styled.div`

`

export const HighlightsSecondaryImage = styled.div`
  
  position: relative;
  border: 2px solid #A7A7A7;
  border-radius: 0px 7px 7px 0px;
  box-shadow: 0px 3px 6px #00000045; 
`
