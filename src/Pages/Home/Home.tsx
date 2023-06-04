import React from 'react'
import { useLocalStorage } from '../../hooks';
import { Dashboard, Processes } from '../Dashboard';
import { Login } from '../Login';

const Home = () => {
  const [token,] = useLocalStorage('token', '')
  return (
    <>
      {token ? <Processes /> : <Login />}
    </>
  )
}

export default Home