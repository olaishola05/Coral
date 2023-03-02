import React from 'react'
import PageLayoutSplit from '../../Components/Layouts/PageLayoutSplit'
import ImageContainer from '../../Components/UI/ImageContainer'
import ResetImage from '../../Assets/svg/resetimg.svg'
import ForgotPassword from '../../Components/UI/ForgotPassword'

const ForgotPasswordPage = () => {
  return (
    <PageLayoutSplit
      leftClassName={{ width: '520px', gap: '50px', padding: '70px 100px 100px' }}
      rightStyles={{ width: '100%', backgroundColor: '#F5F5F5' }}
      leftSide={<ForgotPassword />}
      rightSide={<ImageContainer src={ResetImage} alt={ResetImage} />}
    />
  )
}

export default ForgotPasswordPage