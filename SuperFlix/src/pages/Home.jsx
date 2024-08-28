import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

import back from '../assets/netflix_background.jpg'
import Logo from '../assets/fontbolt.png'



const HomeContainer = styled.div`
  height: 100vh;
  background-image: url('${back}');
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  background-blend-mode: darken;
`

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: black;
  align-items:center;
`

const NavLinks = styled.div`
  a{
    margin: 0 10px;
    padding: 10px 20px;
    background-color: red;
    color: white;
    text-decoration: none;
    border-radius 5px;
    transition: 0.15s;

    &:hover {
      background-color: darkred;
    }

  }

`
const LogoFormat = styled.img`
  width: 12em;
`

const MainContent = styled.div`
  text-align: center;
  color: white;
  margin-top: 20px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 48px;
    margin-bottom: 20px;
  }

  h2 {
    font-size: 24px;
    margin-bottom: 40px;
  }

  button {
    padding: 10px 20px;
    font-size: 18px;
    background-color: red;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.15s;

    &:hover {
      background-color: darkred;
    }
  }
`;



const Home = () => {
  return (
    <HomeContainer>
      <Header>
        <LogoFormat src={Logo}/>
        <NavLinks>
          <Link to='/login'>Entrar</Link>
          <Link to='/register'>Criar conta</Link>
        </NavLinks>
      </Header>
      <MainContent>
        <h1>Filmes, séries e muito mais</h1>
        <h2>Sem limites. Assista onde quiser. Cancele quando quiser.</h2>
        <button>Vamos Lá &gt;</button>
      </MainContent>
    </HomeContainer>
  )
}

export default Home
