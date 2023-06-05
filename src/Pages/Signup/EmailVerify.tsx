import React from 'react'
import { PageLayoutSplit } from '../../Components/Layouts'
import ImageContainer from '../../Components/UI/ImageContainer'
import signupImage from '../../Assets/svg/signup.svg'
import VerifyEmail from '../../Components/UI/VerifyEmail'

const EmailVerify = () => {
  return (
    <PageLayoutSplit
      leftSide={<VerifyEmail />}
      rightSide={<ImageContainer src={signupImage} alt={signupImage} />}
    />
  )
}

export default EmailVerify