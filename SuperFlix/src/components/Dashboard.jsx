import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Profile1 from '../assets/profile1.jpg'
import Profile2 from '../assets/profile2.jpg'

import Logo from '../assets/fontbolt.png'

const DashboardContainer = styled.div`
  height: 100vh;
  background-color: #141414;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Header = styled.div `
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  position: absolute;
  top: 0; 
  background: black;
`

const LogoFormat = styled.img`
  width: 12em;
`

const MainContent = styled.div`
  margin-top: 100px;
  text-align: center;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    position: absolute;
    top: 120px;
    margin: 0;
  }
`

const ProfilesContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  .profile {
    margin: 0 10px;
    text-align: center;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: transform 0.5s ease; 

    img {
      width: 145px;
      height: 145px;
      border-radius: 10px;
      margin-bottom: 10px;
      transition: transform 0.5s ease;
    }

    span {
      display: block;
      transition: transform 0.5s ease;
    }

    &:hover {
      transform: scale(1.05); 
    }

    &:hover img {
      transform: scale(1.05);
    }

    &:hover span {
      transform: scale(1.05);
    }
  }
`;

const ManageProfilesButton = styled.button`
  padding: 10px 20px;
  font-size: 18px;
  background-color: transparent;
  color: white;
  border: 1px solid gray;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 40px;
  

  &:hover {
    border-color: white;
  }

`

const LogoutButton = styled.button`
  margin-top: 20px;
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

`
const Dashboard = () => {

  const history = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      history('/login')
    }

  }, [])

  return (
    <DashboardContainer>
      <Header>
        <LogoFormat src={Logo}/>
      </Header>
      <MainContent>
        <h1>Quem está assistindo?</h1>

        <ProfilesContainer>

          <div className="profile">
            <img src={Profile1} alt='Profile 1'/>
            <span>Giovani</span>
          </div>

          <div className="profile">
            <img src={Profile2} alt='Profile 2'/>
            <span>Marina</span>
          </div>
        </ProfilesContainer>

        <ManageProfilesButton>GERENCIAR PERFIS</ManageProfilesButton>

        <LogoutButton onClick={() => {
        localStorage.removeItem('token');
        history('/login')
      }}>Logout</LogoutButton>
      </MainContent>
    </DashboardContainer>
  )
}

export default Dashboard
