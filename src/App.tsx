import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './themes/theme';
import { Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ErrorPage from './Pages/Error';
import { Login, ConfirmPasswordPage, ForgotPasswordPage, EmailSentPage } from './Pages/Login';
import { Signup, EmailVerify, CompleteProfile } from './Pages/Signup';
import { Processes, ProcessPage, Dashboard } from './Pages/Dashboard';

const queryClient = new QueryClient()

function App() {
  const isLoggedIn = false;

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          {isLoggedIn ?
            <Route element={<Dashboard />}>
              <Route index path="/" element={<Processes />} />
              <Route path="/:id" element={<ProcessPage />} />
              <Route path="model" element={'Model'} />

            </Route>
            : <>
              <Route path="/login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
              <Route path="/signup/email-verification" element={<EmailVerify />} />
              <Route path="/signup/complete-profile" element={<CompleteProfile />} />
              <Route path="reset-password" element={<ForgotPasswordPage />} />
              <Route path="/reset-password/email-sent" element={<EmailSentPage />} />
              <Route path="/reset-password/confirm-password" element={<ConfirmPasswordPage />} /></>}

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
