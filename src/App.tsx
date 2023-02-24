import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './themes/theme';
import { Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Signup from './Pages/Signup/Signup';
import ErrorPage from './Pages/Error/ErrorPage';
import Login from './Pages/Login/Login';
import Dashboard from './Pages/Dashboard/Dashboard';

const queryClient = new QueryClient()

function App() {
  const isLoggedIn = localStorage.getItem('token') ? true : false;
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          {isLoggedIn && <Route path="/board" element={<Dashboard />} />}
          <Route path="/" element={<Login />} />
          <Route path="signup" element={<Signup />}>
            <Route path="sent-email" element={<div>Sent Email</div>} />
            <Route path="complete-profile" element={<div>Profile</div>} />
          </Route>
          <Route path={"/forgetpassword"} element={'forget pssword'} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>

      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
