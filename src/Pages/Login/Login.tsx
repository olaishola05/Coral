import React from 'react'
import AuthenticationPageSplit from '../../Components/Layouts/AuthenticationPageSplit'
import ImageContainer from '../../Components/UI/ImageContainer'
import LoginForm from '../../Components/UI/LoginForm'
import LoginImage from '../../Assets/images/login-container.png'
import useLogin from '../../hooks/useLogin'
import useToggle from '../../hooks/useToggle'
import useMessage from '../../hooks/useMessage'

const Login = () => {
  const [data, setData] = React.useState({
    email: '',
    password: '',
    // rememberMe: false
  })

  const [value, toggle] = useToggle(false)
  const [msg, setMsg] = useMessage()
  const [error, setError] = React.useState<any>(null)
  const loginMutation = useLogin('https://reqres.in/api/login')

  const handleSubmit = () => {
    loginMutation.mutate(data, {
      onSuccess: (data) => {
        setMsg('Utente autenticato con successo');
        // localStorage.setItem('token', data.token);
        toggle();
      },
      onError: (error) => {
        setMsg('Credenziali non valide');
        toggle();
        setError(error);
      }
    });
  };

  return (
    <AuthenticationPageSplit
      value={value}
      error={error}
      message={msg}
      toggle={toggle}
      leftClassName={{ width: '520px', display: 'flex', alignItems: 'flex-start', flexDirection: 'column', gap: '70px', padding: '100px 100px 150px' }}
      rightStyles={{ width: '100%', backgroundColor: '#F5F5F5' }}
      leftSide={<LoginForm submit={handleSubmit} onChange={(data) => setData(data)} />}
      rightSide={<ImageContainer src={LoginImage} alt='login' />}
    />
  )
}

export default Login