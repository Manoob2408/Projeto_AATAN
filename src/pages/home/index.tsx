import Image from 'next/image'
import Carousel from '../../components/Carousel'
import Header from '../../components/Header'
import {
  Container,
  HeaderContainer,
  Highlights,
  Menu,
  MenuItemContainer,
  MenuItemButton,
  MenuItemTitle,
  TabMenu,
  Card,
  CardButton,
  CardText,
  CardTitle,
  CardContent,
  CardImageContainer
} from '../../styles/pages/home'

interface MenuItemProps {
  title: string
  imageSrc: string
  firstColorHex: string
  secondColorHex: string
  url: string
}

function MenuItem ({ title, imageSrc, firstColorHex, secondColorHex, url }: MenuItemProps) {
  return (
    <MenuItemContainer>
      <MenuItemButton firstColorHex={firstColorHex} secondColorHex={secondColorHex}>
        <Image src={imageSrc} width="100%" height="100%" objectFit="contain"/>
      </MenuItemButton>
      <MenuItemTitle>{title}</MenuItemTitle>
    </MenuItemContainer>
  )
}

export default function Home () {
  return (
    <Container>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <Carousel />
      <Card>
        <CardContent>
          <CardTitle>
            Seja Bem-Vindo!
          </CardTitle>
          <CardText>
            Veja a importância da adoção
          </CardText>
          <CardButton>
            Veja Agora!
          </CardButton>
        </CardContent>
        <CardImageContainer>
          <Image src="/images/animals/19.png" width="100%" height="100%" objectFit="contain"/>
        </CardImageContainer>

      </Card>
      <Menu>
        <MenuItem
          title="Animais"
          imageSrc="/images/icons/icon-pets.png"
          firstColorHex="#FF885A"
          secondColorHex="#FE6347"
          url=""
        />
        <MenuItem
          title="Eventos"
          imageSrc="/images/icons/icon-calendar-day.png"
          firstColorHex="#71D4FE"
          secondColorHex="#40B0F9"
          url=""
        />
        <MenuItem
          title="Doação"
          imageSrc="/images/icons/icon-hand-holding-heart.png"
          firstColorHex="#FEB940"
          secondColorHex="#F99327"
          url=""
        />
        <MenuItem
          title="Voluntariado"
          imageSrc="/images/icons/icon-users.png"
          firstColorHex="#59E48A"
          secondColorHex="#2AC975"
          url=""
        />

      </Menu>
      <Highlights />
      <TabMenu>
        {/* <TabMenuItem></TabMenuItem> */}
      </TabMenu>
    </Container>
  )
}
