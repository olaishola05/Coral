import React from 'react'
import HeaderText from './HeaderText'

const VerifyEmail = () => {
  const text = (<span>Check your email inbox.<br />We sent you a confirmation email.</span>)
  return (
    <div>
      <HeaderText
        header='Your workspace is ready'
        text={text}
      />
    </div>
  )
}

export default VerifyEmail