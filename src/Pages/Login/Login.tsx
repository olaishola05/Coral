import React from 'react'
import AuthenticationPageSplit from '../../Components/Layouts/AuthenticationPageSplit'
import ImageContainer from '../../Components/UI/ImageContainer'
import LoginForm from '../../Components/UI/LoginForm'
import LoginImage from '../../Assets/svg/login.svg'
import useLogin from '../../hooks/useLogin'
import useToggle from '../../hooks/useToggle'
import useMessage from '../../hooks/useMessage'
import { useNavigation } from '../../hooks/useNavigation'

const Login = () => {
  const [data, setData] = React.useState({
    email: '',
    password: '',
    // rememberMe: false
  })
  const navigate = useNavigation();
  const [value, toggle] = useToggle(false)
  const [msg, setMsg] = useMessage()
  const [error, setError] = React.useState<boolean>()
  const [success, setSuccess] = React.useState<boolean>(false)
  const loginMutation = useLogin('https://reqres.in/api/login')

  const handleSubmit = () => {
    loginMutation.mutate(data, {
      onSuccess: (data) => {
        setMsg('Utente autenticato con successo');
        setSuccess(true);
        toggle();
        localStorage.setItem('token', data.token);
        navigate('/dashboard');
      },
      onError: (error) => {
        setMsg('Credenziali non valide');
        toggle();
        setError(true);
      }
    });
  };

  return (
    <AuthenticationPageSplit
      value={value}
      error={error}
      success={success}
      message={msg}
      toggle={toggle}
      leftClassName={{ width: '520px', padding: '100px 100px 150px' }}
      rightStyles={{ width: '100%', backgroundColor: '#F5F5F5' }}
      leftSide={<LoginForm submit={handleSubmit} onChange={(data) => setData(data)} />}
      rightSide={<ImageContainer src={LoginImage} alt='login' />}
    />
  )
}

export default Login