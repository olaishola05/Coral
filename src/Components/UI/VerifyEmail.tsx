import React from 'react'
import HeaderText from './HeaderText'
import SuccessImg from '../../Assets/svg/mark.svg'

const VerifyEmail = () => {
  const text = (<span>Check your email inbox.<br />We sent you a confirmation email.</span>)
  return (
    <div>
      <HeaderText
        header='Your workspace is ready'
        text={text}
        headerStyle={{ marginBottom: '50px' }}
      />
      <img src={SuccessImg} alt={SuccessImg} style={{ width: '135px', height: '135' }} />
    </div>
  )
}

export default VerifyEmail