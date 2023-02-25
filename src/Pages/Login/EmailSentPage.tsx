import React from 'react'
import AuthenticationPageSplit from '../../Components/Layouts/AuthenticationPageSplit'
import ImageContainer from '../../Components/UI/ImageContainer'
import ResetImage from '../../Assets/svg/resetimg.svg'
import EmailSent from '../../Components/UI/EmailSent'


const EmailSentPage = () => {
  return (
    <AuthenticationPageSplit
      leftClassName={{ width: '520px', gap: '82px', padding: '100px 100px 100px' }}
      rightStyles={{ width: '100%' }}
      leftSide={<EmailSent />}
      rightSide={<ImageContainer src={ResetImage} alt={ResetImage} />}
    />
  )
}

export default EmailSentPage