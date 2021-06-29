import Image from 'next/image'
import Header from '../../components/Header'

import { FiChevronLeft } from 'react-icons/fi';
import  Link from 'next/link'
import {
  Container,
  HeaderContainer,
  Highlights,
  Carousel,
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
  CardImageContainer,
  HighlightsHeader,
  HighlightsTitle,
  HighlightsSeeMore,
  HighlightsSeeMoreText,
  HighlightsSeeMoreIcon,
  HighlightsContent,
  HighlightsPrimaryImage,
  HighlightsSecondaryImage,
  PageContainer,
  TabMenuHomeButton,
  TabMenuHomeButtonContainer,
  TabMenuItem,
  Spacer
} from '../../styles/pages/Home'

interface MenuItemProps {
  title: string
  imageSrc: string
  firstColorHex: string
  secondColorHex: string
  href:string
}

function MenuItem ({ title, imageSrc, firstColorHex, secondColorHex,href }: MenuItemProps) {
  return (
    <MenuItemContainer>
      <MenuItemButton firstColorHex={firstColorHex} secondColorHex={secondColorHex}>
        <Image src={imageSrc} width="100%" height="100%" objectFit="contain" />
      </MenuItemButton>
      <MenuItemTitle>{title}</MenuItemTitle>
    </MenuItemContainer>
  )
}

export default function Animais () {
  return (
    <PageContainer>
      <HeaderContainer>
        <header style={{ marginTop: "30px", color: '#A1A1A1' }}>
          <div className="row headerAlign">
          <div>
          <Link href="/home">
            <FiChevronLeft size={30} color="#A1A1A1" />
          </Link>
          </div>
          <div>
          <span className="textoHeader">ANIMAIS</span>
          </div>
          </div>
        </header>
      </HeaderContainer>
      <Container>
        <Spacer />
        <Carousel>
          <Card style={{background: '#FE6749'}}>
            <CardImageContainer >
              <Image src="/images/animals/19.png" layout="fill" objectFit="contain" objectPosition="right center" />
            </CardImageContainer>
            <CardContent>
              <CardTitle style={{color: '#fff'}}>
               GATOS
                </CardTitle>
              <CardText style={{color: '#fff'}}>
               Encontreum gatinho para adotar
                </CardText>
              <CardButton>
                Veja Agora!
                </CardButton>
            </CardContent>
          </Card>
        </Carousel>
        <Carousel style={{marginTop: 30}}>
          <Card style={{background: '#2FCC77'}}>
            <CardImageContainer >
              <Image src="/images/animals/19.png" layout="fill" objectFit="contain" objectPosition="right center" />
            </CardImageContainer>
            <CardContent>
              <CardTitle style={{color: '#fff'}}>
               GATOS
                </CardTitle>
              <CardText style={{color: '#fff'}}>
               Encontreum gatinho para adotar
                </CardText>
              <CardButton>
                Veja Agora!
                </CardButton>
            </CardContent>
          </Card>
        </Carousel>
        
        
      </Container>
     
    </PageContainer>

  )
}
