import Image from 'next/image'
import Header from '../../components/Header'
import Link from 'next/link'
import { Form } from "./styles";
import {
  Container,
  Menu,
  Card,
  CardButton,
  CardImageContainer,
  PageContainer,
  Spacer
} from '../../styles/pages/Option'

interface MenuItemProps {
  title: string
  imageSrc: string
  firstColorHex: string
  secondColorHex: string
  url: string
}

export default function Option() {

  return (
    <PageContainer  >

      <Container >

        <Image
          src="/images/logo.png"
          width="152.43"
          height="129.04"

        />

        <Form style={{marginTop: '30px'}}>
          <Link href="/signInAdm">
            <button type="submit"  >
              <a style={{ color: '#000', textDecoration: 'none', fontSize: '12px' }} >Sou Administrador</a>
            </button>
          </Link>
          <Link href="/signIn">
            <button type="submit"  >
              <a style={{ color: '#000', textDecoration: 'none', fontSize: '12px' }} >Sou Usuário</a>
            </button>
          </Link>

        </Form>
        <Menu>
          <a style={{ color: '#fff', textDecoration: 'none', fontSize: '12px' }} >Não é cadastrado?</a>
          <a href="../signUp" style={{ color: '#12A5E6', fontSize: '12px' }} >Cadastre-se</a>

        </Menu>
        <a href="../signUpAdm" style={{ color: '#000', fontSize: '12px' }} >Cadastro de ONG</a>

        <CardImageContainer>
          <Image src="/images/footprints.png" layout="fill" objectFit="contain" objectPosition="bottom" />
        </CardImageContainer>
        <Spacer />

      </Container>

    </PageContainer>

  )
}

