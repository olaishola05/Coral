import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './themes/theme';
import { Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ErrorPage from './Pages/Error';
import { Login, ConfirmPasswordPage, ForgotPasswordPage, EmailSentPage } from './Pages/auths/Login';
import { Signup, EmailVerify, CompleteProfile } from './Pages/auths/Signup';
import { Processes, ProcessPage, Models, Databases, Macro, Venditori, Automation, Support } from './Pages/Dashboard';
import { useLocalStorage } from './hooks';
import Home from './Pages/Home';
import JoinWorkspace from './Pages/auths/Join-workspace/JoinWorkspace';

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
          <Route path="auth/login" element={<Login />} />
          <Route path='auth/join-workspace' element={<JoinWorkspace />} />
          <Route path="auth/signup" element={<Signup />} />
          <Route path="auth/signup/complete-profile" element={<CompleteProfile />} />
          <Route path="auth/signup/email-verification" element={<EmailVerify />} />
          <Route path="auth/reset-password" element={<ForgotPasswordPage />} />
          <Route path="auth/reset-password/email-sent" element={<EmailSentPage />} />
          <Route path="auth/reset-password/confirm-password" element={<ConfirmPasswordPage />} />
          {isLoggedIn &&
            <>
              <Route path='/' element={<Processes />} />
              <Route path='process/:id' element={<ProcessPage />} />
              <Route path='models' element={<Models />} />
              <Route path='databases' element={<Databases />} />
              <Route path='macrofasi' element={<Macro />} />
              <Route path='venditori' element={<Venditori />} />
              <Route path='automazioni' element={<Automation />} />
              <Route path='supporto' element={<Support />} />
            </>}

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
