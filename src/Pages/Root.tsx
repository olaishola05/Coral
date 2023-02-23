import React from 'react'
import { Outlet } from "react-router-dom";

import Dashboard from './Dashboard/Dashboard';
import Login from './Login/Login';

function Root() {

  const isLoggedIn = localStorage.getItem('token') ? true : false;
  return (
    <div>
      {isLoggedIn ? <Dashboard /> : <Login />}
      <Outlet />
    </div>
  )
}

export default Root