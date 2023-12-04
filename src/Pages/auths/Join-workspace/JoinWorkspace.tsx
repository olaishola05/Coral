import React from 'react'
import { PageLayoutSplit } from '../../../Components/Layouts'
import { useToggle, useMessage } from '../../../hooks'
import ImageContainer from '../../../Components/UI/ImageContainer'
import LoginImage from '../../../Assets/svg/login.svg'
import JoinWorkspace from '../../../Components/UI/JoinWorkspace'

export default function JoinWorkspacePage() {
  const [value, toggle] = useToggle(false)
  const [msg, setMsg] = useMessage()
  const [error, setError] = React.useState<boolean>()
  const [success, setSuccess] = React.useState<boolean>(false)

  return (
    <PageLayoutSplit
      value={value}
      error={error}
      success={success}
      message={msg}
      toggle={toggle}
      rightStyles={{ width: '100%', backgroundColor: '#F5F5F5' }}
      leftSide={<JoinWorkspace />}
      rightSide={<ImageContainer src={LoginImage} alt='login' />}
    />
  )
}
