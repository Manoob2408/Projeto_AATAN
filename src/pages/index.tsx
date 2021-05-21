import Image from 'next/image'
import { Container } from '../styles/pages/Home'

export default function Home () {
  return (
    <Container>
      <Image
        src="/logo.png"
        width="212.43"
        height="189.04"
      />
    </Container>
  )
}
