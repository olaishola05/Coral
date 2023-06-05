import React from 'react'
import HeaderText from './HeaderText'
import SuccessImg from '../../Assets/svg/mark.svg'
import Box from '@mui/material/Box'
import {styled } from '@mui/material/styles'

const StyledBoxContainer = styled(Box)(({ theme }) => ({

  [theme.breakpoints.down('sm')]: {
    width: '100%',
    padding: '10px 20px',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
}))

const EmailSent = () => {
  const text = (<span>Check your email inbox.<br />We sent you an email to edit your password. If you didn’t received the email, please check your SPAM inbox</span>)
  return (
    <StyledBoxContainer>
      <HeaderText
        header='Email was sent!'
        text={text}
        headerStyle={{ width: '330px', marginBottom: '56.4px' }}
      />
      <img src={SuccessImg} alt={SuccessImg} style={{ width: '135px', height: '135' }} />
    </StyledBoxContainer>
  )
}

export default EmailSent