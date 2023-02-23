import React from 'react'
import AuthenticationPageSplit from '../../Components/Layouts/AuthenticationPageSplit'
import ImageContainer from '../../Components/UI/ImageContainer'
import LoginForm from '../../Components/UI/LoginForm'
import LoginImage from '../../Assets/images/login-container.png'
import useLogin from '../../hooks/useLogin'
import useToggle from '../../hooks/useToggle'
import { useNavigate } from 'react-router-dom'
import useMessage from '../../hooks/useMessage'

const Login = () => {
  const [data, setData] = React.useState({
    email: '',
    password: '',
    rememberMe: false
  })

  const [value, toggle] = useToggle(false)
  const [msg, setMsg] = useMessage()
  const loginMutation = useLogin('http://localhost:3000/api/login')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    loginMutation.mutate(data, {
      onSuccess: (data) => {
        setMsg('Utente autenticato con successo');
      },
      onError: (error) => {
        setMsg('Credenziali non valide');
        toggle()
      }
    });
  };

  return (
    <AuthenticationPageSplit
      error={value}
      message={msg}
      leftClassName={{ width: '520px', display: 'flex', alignItems: 'flex-start', flexDirection: 'column', gap: '70px', padding: '100px 100px 150px' }}
      rightStyles={{ width: '100%', backgroundColor: '#F5F5F5' }}
      leftSide={<LoginForm onChange={(data) => setData(data)} submit={handleSubmit} />}
      rightSide={<ImageContainer src={LoginImage} alt='login' />}
    />
  )
}

export default Login