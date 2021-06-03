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

export const Highlights = styled.div``

export const TabMenu = styled.div``

export const Menu = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-evenly;
`

export const MenuItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;


  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
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
  font: normal normal bold 13px/18px Open Sans;
  color: #404E7F;
`
