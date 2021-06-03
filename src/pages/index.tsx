import Image from 'next/image'
import { Container } from '../styles/pages/splash'

export default function Home () {
  return (
    <Container>
      <Image
        src="/images/logo.png"
        width="212.43"
        height="189.04"
      />
    </Container>
  )
}
