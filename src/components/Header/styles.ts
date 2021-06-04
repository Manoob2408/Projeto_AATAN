import Image from 'next/image'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: white;
`

export const MenuIcon = styled(Image).attrs({
  width: '35.44',
  height: '23.62'
})`
  cursor: pointer;
`

export const MenuLogo = styled(Image).attrs({
  width: '83.16',
  height: '74'
})``

export const NotificationIconImage = styled(Image).attrs({
  width: '21.05',
  height: '24.06'
})`
  cursor: pointer;
`

export const NotificationIconContainer = styled.div`
  position: relative;
`

export const NotificationIconActive = styled.div`
  position: absolute;
  top: 2px;
  right: 2px;
  width: 8px;
  height: 8px;
  background-color: #FE6447;
  border-radius: 50%;
`
