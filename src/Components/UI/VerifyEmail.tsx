import React from 'react'
import HeaderText from './HeaderText'
import SuccessImg from '../../Assets/svg/mark.svg'
import { styled } from '@mui/material/styles'

const StyledContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',

  [theme.breakpoints.down('sm')]: {
    width: '100%',
    padding: '10px 20px',
  },
}))

const VerifyEmail = () => {
  const text = (<span>Check your email inbox.<br />We sent you a confirmation email.</span>)
  return (
    <StyledContainer>
      <HeaderText
        header='Your workspace is ready'
        text={text}
        headerStyle={{ marginBottom: '50px' }}
      />
      <img src={SuccessImg} alt={SuccessImg} style={{ width: '135px', height: '135' }} />
    </StyledContainer>
  )
}

export default VerifyEmail