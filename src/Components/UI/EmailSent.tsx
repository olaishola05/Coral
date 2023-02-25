import React from 'react'
import HeaderText from './HeaderText'
import SuccessImg from '../../Assets/svg/mark.svg'
import Box from '@mui/material/Box'

const EmailSent = () => {
  const text = (<span>Check your email inbox.<br />We sent you an email to edit your password. If you didn’t received the email, please check your SPAM inbox</span>)
  return (
    <Box sx={{}}>
      <HeaderText
        header='Email was sent!'
        text={text}
        headerStyle={{ width: '330px', marginBottom: '56.4px' }}
      />
      <img src={SuccessImg} alt={SuccessImg} style={{ width: '135px', height: '135' }} />
    </Box>
  )
}

export default EmailSent