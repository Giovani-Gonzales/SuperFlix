import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import back from '../assets/netflix_background.jpg'
import { Link } from 'react-router-dom'


const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #1F1F1F;
  align-items:center;
`

const RegisterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('${back}');
  background-size: cover;
  background-position: center;
  background-color: rgba(0, 0, 0, 0.5);
  background-blend-mode: darken;
`

const RegisterForm = styled.form`
  background-color: rgba(0, 0, 0, 0.75);
  padding: 60px;
  border-radius: 10px;
  text-align: center;
`

const Title = styled.h2`
  color: white;
  margin-bottom: 20px;
  font-size: 30px;
`

const Input = styled.input`
  width: 100%;
  padding: 15px;
  margin: 10px 0;
  border: none;
  border-radius: 5px;
`

const Button = styled.button`
  width: 100%;
  padding: 15px;
  background-color: red;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin: 20px 0;
  transition: 0.15s;

  &:hover {
    background-color: darkred;
  }
`

const LoginLink = styled.a `
  color: white;
  text-decoration: underline;
  cursor: pointer:
`


const Register = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const history = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/users', { email, password })
      if (response.status === 201){
        history('/login')
      }
    } catch (error) {
      console.error('Error registering', error)
    }
  }

  return (
    <RegisterContainer>
      <RegisterForm onSubmit={handleRegister}>

        <Title>Register</Title>
        <Input placeholder='Email' type='email' value={email} onChange={(e) => setEmail(e.target.value)} required/>
        <Input placeholder='Senha' type='password' value={password} onChange={(e) => setPassword(e.target.value)} required/>
        <Button type='submit'>Registrar</Button>
        <LoginLink><Link to='/login'>Realizar Login?</Link></LoginLink>
      </RegisterForm>
    </RegisterContainer>
  )
}

export default Register
