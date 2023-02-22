import React from 'react'
import AuthenticationPageSplit from '../../Components/Layouts/AuthenticationPageSplit'
import ImageContainer from '../../Components/UI/ImageContainer'
import LoginForm from '../../Components/UI/LoginForm'
import LoginImage from '../../Assets/images/login-container.png'

const Login = () => {
  return (
    <AuthenticationPageSplit
      leftClassName={{ width: '520px', display: 'flex', alignItems: 'flex-start', flexDirection: 'column', gap: '100px', padding: '100px 100px 150px' }}
      rightStyles={{ width: '100%', backgroundColor: '#F5F5F5' }}
      leftSide={<LoginForm onSubmit={(data) => console.log(data)} />}
      rightSide={<ImageContainer src={LoginImage} alt='login' />}
    />
  )
}

export default Login