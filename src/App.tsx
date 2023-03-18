import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './themes/theme';
import { Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ErrorPage from './Pages/Error';
import { Login, ConfirmPasswordPage, ForgotPasswordPage, EmailSentPage } from './Pages/Login';
import { Signup, EmailVerify, CompleteProfile } from './Pages/Signup';
import { Processes, ProcessPage, Models, Databases } from './Pages/Dashboard';
import { useLocalStorage } from './hooks';
import Home from './Pages/Home';

const queryClient = new QueryClient()

function App() {
  const [token] = useLocalStorage('token', '')
  const isLoggedIn = !!token

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="signup/email-verification" element={<EmailVerify />} />
          <Route path="signup/complete-profile" element={<CompleteProfile />} />
          <Route path="reset-password" element={<ForgotPasswordPage />} />
          <Route path="reset-password/email-sent" element={<EmailSentPage />} />
          <Route path="reset-password/confirm-password" element={<ConfirmPasswordPage />} />
          {isLoggedIn &&
            <>
              <Route path='/' element={<Processes />} />
              <Route path='process/:id' element={<ProcessPage />} />
              <Route path='models' element={<Models />} />
              <Route path='databases' element={<Databases />} />
              <Route path='databases' element={'Model'} />
              <Route path='databases' element={'Model'} />
              <Route path='databases' element={'Model'} />
              <Route path='databases' element={'Model'} />
            </>}

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
