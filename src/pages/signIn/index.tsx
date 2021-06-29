import Image from 'next/image'
import Header from '../../components/Header'

import Link from 'next/link'
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import {
  Container,
  Menu,
  Card,
  CardButton,
  CardImageContainer,
  PageContainer,
  Spacer
} from '../../styles/pages/Option'
import api from '../../services/api'


interface MenuItemProps {
  title: string
  imageSrc: string
  firstColorHex: string
  secondColorHex: string
  url: string
}


export default function SignIn() {


const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const router = useRouter();

async function handleLogin(e){
  e.preventDefault();


  try {
    const response = await api.post('login', {email, password});
  
    localStorage.setItem('userId', email);
    localStorage.setItem('userName',  response.data.name);
    router.push('/home');
  } catch (err) {
    alert('Falha no Login, tente novamente!');
  }
}

  return (
    <PageContainer  >
      <Container >
        <Image
          src="/images/logo.png"
          width="152.43"
          height="129.04"
        />
        <Card>
          <form className="formStile" onSubmit={handleLogin} 
          style={{ width: "20rem",background: "#fff",padding: "20px",
            display: "flex",  "flexDirection": "column",borderRadius: '10px',alignItems: 'center'}}>
            <input
              type="email"
              placeholder="Insira seu email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
            />       
             <input
              type="text"
              placeholder="Insira sua senha"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
            />  
            <button className="btn" type="submit"  > ENTRAR</button>
          </form>

        </Card>

        <CardImageContainer>
          <Image src="/images/footprints.png" layout="fill" objectFit="contain" objectPosition="bottom" />
        </CardImageContainer>
        <Spacer />

      </Container>

    </PageContainer>

  )
}
