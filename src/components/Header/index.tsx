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
      <NotificationIconImage src="/images/icons/icon-notification.png" objectFit="contain"/>
      { hasMessage && <NotificationIconActive /> }
    </NotificationIconContainer>
  )
}

export default function Header () {
  return (
    <Container>
      <MenuIcon src="/images/icons/icon-menu.png" objectFit="contain"/>
      <MenuLogo src="/images/logo.png" objectFit="contain"/>
      <NotificationIcon hasMessage/>
    </Container>
  )
}
