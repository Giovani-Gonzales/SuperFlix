import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Profile1 from '../assets/profile1.jpg'
import Profile2 from '../assets/profile2.jpg'

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
`

const Logo = styled.div`
  color: red;
  font-size: 24px;
  font-weight: bold;
`

const MainContent = styled.div`
  margin-top: 100px;
  text-align: center;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ProfilesContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  .profile {
    margin: 0 10px;
    text-align: center;
    cursor: pointer;

    img {
      width: 100px;
      height: 100px;
      border-radius: 10px;
      margin-bottom: 10px;
    }

    span {
      display: block;
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

  &:hover {
    border-color: white;
  }

`

const LogoutButton = styled.button`
  mrgin-top: 20px;
  padding: 10px 20px;
  font-size: 18px;
  background-color: red;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

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
        <Logo>Dashboard</Logo>
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
