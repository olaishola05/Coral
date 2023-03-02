import React from 'react'
import PageLayoutSplit from '../../Components/Layouts/PageLayoutSplit'
import ImageContainer from '../../Components/UI/ImageContainer'
import ResetImage from '../../Assets/svg/resetimg.svg'
import EmailSent from '../../Components/UI/EmailSent'


const EmailSentPage = () => {
  return (
    <PageLayoutSplit
      leftClassName={{ width: '520px', gap: '82px', padding: '100px 100px 100px' }}
      rightStyles={{ width: '100%' }}
      leftSide={<EmailSent />}
      rightSide={<ImageContainer src={ResetImage} alt={ResetImage} />}
    />
  )
}

export default EmailSentPage