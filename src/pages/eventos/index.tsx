import Image from 'next/image'
import Header from '../Header'
import { Form } from "./styles";
import  Link from 'next/link';
import { FiPlusCircle,FiChevronLeft } from 'react-icons/fi';
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


export default function SignUpAdm() {
  
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
          <span className="textoHeader">EVENTOS</span>
          </div>
          </div>
        </header>
      </HeaderContainer>
      <Container>

        <div style={{ marginTop: "30px" }}>
        
            <button className="btn" type="submit" style={{ background: '#4DB9FA',width: '400px',fontSize: 22,height: '57px'}}>
            <FiPlusCircle size={30} color="#FFF" style={{ margin:-7, marginRight: 20}} />
              Novo Evento</button>
          
        </div>
        <CardImageContainer>
          <Image src="/images/footprints.png" layout="fill" objectFit="contain" objectPosition="bottom" />
        </CardImageContainer>
      </Container>

    </PageContainer>

  )
}

