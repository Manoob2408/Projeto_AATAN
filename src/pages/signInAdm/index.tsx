import Image from 'next/image'
import Header from '../../components/Header'

import Link from 'next/link';
import React, { useState } from 'react';
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

interface MenuItemProps {
  title: string
  imageSrc: string
  firstColorHex: string
  secondColorHex: string
  url: string
}
import api from '../../services/api';


export default function SignInAdm() {
const [id, setId] = useState('');
const router = useRouter();
async function handleLogin(e){
  e.preventDefault();


  try {
    const response = await api.post('session', {id});
  
    localStorage.setItem('ongId', id);
    localStorage.setItem('ongName',  response.data.name);
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
              type="text"
              placeholder="Insira seu código de acesso"
              required
              value={id}
              onChange={e => setId(e.target.value)}
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

