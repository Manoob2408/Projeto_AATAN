import Header from '../../components/Header'
import { Carousel, Container, Highlights, Menu, TabMenu } from '../../styles/pages/home'

export default function Home () {
  return (
    <Container>
      <Header />
      <Carousel />
      <Menu />
      <Highlights />
      <TabMenu />
    </Container>
  )
}
