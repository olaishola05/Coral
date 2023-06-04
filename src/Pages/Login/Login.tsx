import React from 'react'
import { PageLayoutSplit } from '../../Components/Layouts'
import ImageContainer from '../../Components/UI/ImageContainer'
import LoginForm from '../../Components/UI/LoginForm'
import LoginImage from '../../Assets/svg/login.svg'
import { useLogin, useToggle, useMessage, useLocalStorage } from '../../hooks'

const Login = () => {
  const [data, setData] = React.useState({
    email: '',
    password: '',
  })

  const [value, toggle] = useToggle(false)
  const [msg, setMsg] = useMessage()
  const [error, setError] = React.useState<boolean>()
  const [success, setSuccess] = React.useState<boolean>(false)
  const loginMutation = useLogin('https://reqres.in/api/login')
  const [, setTokenValue] = useLocalStorage('token', '')

  const handleSubmit = () => {
    loginMutation.mutate(data, {
      onSuccess: (data) => {
        setMsg('Utente autenticato con successo');
        setSuccess(true);
        toggle();
        setTokenValue(data.token);
        window.history.pushState({}, '', '/');
        window.location.reload();
      },
      onError: (error) => {
        setMsg('Credenziali non valide');
        toggle();
        setError(true);
      }
    });
  };

  return (
    <PageLayoutSplit
      value={value}
      error={error}
      success={success}
      message={msg}
      toggle={toggle}
      leftClassName={{ width: '100%', padding: '80px 100px'}}
      rightStyles={{ width: '100%', backgroundColor: '#F5F5F5' }}
      leftSide={<LoginForm submit={handleSubmit} onChange={(data) => setData(data)} />}
      rightSide={<ImageContainer src={LoginImage} alt='login' />}
    />
  )
}

export default Login