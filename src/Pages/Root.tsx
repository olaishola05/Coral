import React from 'react'
import { Outlet } from "react-router-dom";

import Dashboard from './Dashboard/Dashboard';
import Login from './Login/Login';

function Root() {
  return (
    <div>
      {false ? <Dashboard /> : <Login />}
      <Outlet />
    </div>
  )
}

export default Root