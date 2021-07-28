import Image from 'next/image'
import Header from '../Header'
import { Form } from "./styles";
import  Link from 'next/link'
import { FiChevronLeft } from 'react-icons/fi';
import api from '../../services/api';
import React, { useState } from 'react';
import { useRouter } from 'next/router'
import {HeaderContainer} from '../../styles/pages/Home'

import {
  Container,
  Menu,
  Card,
  CardButton,
  CardImageContainer,
  PageContainer,
  Spacer
} from '../../styles/pages/SignUp'


export default function SignUp() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  async function handleRegister(e: any) {
    e.preventDefault();

    const data = {
      name,
      email,
      whatsapp,
      city,
      uf,
      password
    };
    try {
      const response = await api.post('users', data);
      alert(`Seu cadastro foi realizado utilize seu Login e Senha para acessar`);
      router.push('/signIn');

    } catch (err) {
      alert('Erro no cadastro, tente novamente!');
    }
  }

  return (
    <PageContainer>
      <HeaderContainer>
        <header style={{ marginTop: "30px", color: 'white', fontWeight: 'bold' }}>
          <div style={{display: 'flex', alignItems: 'center', fontSize: '2rem'}}>
            <div style={{display: 'flex', alignItems: 'center'}}>
              <Link href="/option">
                <FiChevronLeft size={35} color="white" />
              </Link>
            </div>
            <div>
              <span className="textoHeader" >CADASTRO DE USUÁRIO</span>
            </div>
          </div>
        </header>
      </HeaderContainer>
      <Container>

        <div style={{ marginTop: "30px" }}>
          <Form onSubmit={handleRegister}>
            <input placeholder="Nome "
              className="input"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <input type="email" placeholder="E-mail"
              className="input"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <input placeholder="WhatsApp"
              className="input"
              value={whatsapp}
              onChange={e => setWhatsapp(e.target.value)}
            />

            <div className="input-group">
              <input placeholder="Cidade"
              className="input"
                value={city}
                onChange={e => setCity(e.target.value)}
              />
              <input placeholder="UF" 
              className="input"
                value={uf}
                onChange={e => setUf(e.target.value)}
              />
               <input placeholder="Senha ex:13546" 
               type="password"
              className="input"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>

            <button className="btn" type="submit">CADASTRAR</button>
          </Form>
        </div>
        <CardImageContainer>
          <Image src="/images/footprints.png" layout="fill" objectFit="contain" objectPosition="bottom" />
        </CardImageContainer>
      </Container>

    </PageContainer>

  )
}


