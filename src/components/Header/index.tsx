import {
  Container,
  MenuIcon,
  MenuLogo,
  NotificationIconImage,
  NotificationIconContainer,
  NotificationIconActive
} from './styles'

type NotificationIconProps = {
  hasMessage?: boolean
}

function NotificationIcon ({ hasMessage }: NotificationIconProps) {
  return (
    <NotificationIconContainer>
      <NotificationIconImage src="/images/icons/icon-notification.png"/>
      { hasMessage && <NotificationIconActive /> }
    </NotificationIconContainer>
  )
}

export default function Header () {
  return (
    <Container>
      <MenuIcon src="/images/icons/icon-menu.png"/>
      <MenuLogo src="/images/logo.png"/>
      <NotificationIcon hasMessage/>
    </Container>
  )
}
