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
import EmailVerify from './Pages/Signup/EmailVerify';
import CompleteProfile from './Pages/Signup/CompleteProfile';
import ConfirmPasswordPage from './Pages/Login/ConfirmPasswordPage';
import ForgotPasswordPage from './Pages/Login/ForgotPasswordPage';
import EmailSentPage from './Pages/Login/EmailSentPage';

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
          <Route path="signup" element={<Signup />} />
          <Route path="/signup/email-verification" element={<EmailVerify />} />
          <Route path="/signup/complete-profile" element={<CompleteProfile />} />
          <Route path="reset-password" element={<ForgotPasswordPage />} />
          <Route path="/reset-password/email-sent" element={<EmailSentPage />} />
          <Route path="/reset-password/confirm-password" element={<ConfirmPasswordPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
