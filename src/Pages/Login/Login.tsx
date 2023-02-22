import React from 'react'
import AuthenticationPageSplit from '../../Components/Layouts/AuthenticationPageSplit'
import LoginForm from '../../Components/UI/LoginForm'

const Login = () => {
  return (
    <AuthenticationPageSplit
      leftClassName={{ width: '520px', display: 'flex', alignItems: 'flex-start', flexDirection: 'column', gap: '100px', padding: '100px 100px 150px', border: '1px solid red' }}
      leftSide={<LoginForm onSubmit={(data) => console.log(data)} />}
      rightSide={<h1>Right Side</h1>}
    />
  )
}

export default Login