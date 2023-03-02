import React from 'react'
import PageLayoutSplit from '../../Components/Layouts/PageLayoutSplit'
import ImageContainer from '../../Components/UI/ImageContainer'
import signupImage from '../../Assets/svg/signup.svg'
import Profile from '../../Components/UI/Profile'

const CompleteProfile = () => {
  return (
    <PageLayoutSplit
      leftClassName={{ width: '622px', padding: '70px 100px 100px' }}
      rightStyles={{ width: '100%', backgroundColor: '#F5F5F5' }}
      leftSide={<Profile />}
      rightSide={<ImageContainer src={signupImage} alt={signupImage} />}
    />
  )
}

export default CompleteProfile