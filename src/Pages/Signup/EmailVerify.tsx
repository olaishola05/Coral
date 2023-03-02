import React from 'react'
import PageLayoutSplit from '../../Components/Layouts/PageLayoutSplit'
import ImageContainer from '../../Components/UI/ImageContainer'
import signupImage from '../../Assets/svg/signup.svg'
import VerifyEmail from '../../Components/UI/VerifyEmail'

const EmailVerify = () => {
  return (
    <PageLayoutSplit
      leftClassName={{ width: '622px', padding: '70px 100px 100px' }}
      rightStyles={{ width: '100%', backgroundColor: '#F5F5F5' }}
      leftSide={<VerifyEmail />}
      rightSide={<ImageContainer src={signupImage} alt={signupImage} />}
    />
  )
}

export default EmailVerify