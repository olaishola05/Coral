import React from 'react'
import { PageLayoutSplit } from '../../Components/Layouts'
import ResetImage from '../../Assets/svg/resetimg.svg'
import ImageContainer from '../../Components/UI/ImageContainer'
import ResetPaswword from '../../Components/UI/ConfirmPassword'

const ConfirmPasswordPage = () => {
  return (
    <PageLayoutSplit
      leftClassName={{ width: '520px', gap: '50px', padding: '70px 100px 100px' }}
      leftSide={<ResetPaswword />}
      rightSide={<ImageContainer src={ResetImage} alt={ResetImage} />}
    />
  )
}

export default ConfirmPasswordPage