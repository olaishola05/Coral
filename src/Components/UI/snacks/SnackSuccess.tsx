import React from 'react'
import { useTheme } from '@mui/material/styles'
import CustomSnackbar from '../CustomSnackbar'

interface SnackSuccessProps {
  message: string
  toggle: () => void
  value: boolean
}

const SnackSuccess: React.FC<SnackSuccessProps> = ({ message, toggle, value }) => {
  const theme = useTheme()
  return (
    <CustomSnackbar
      open={value}
      message={message}
      severity='success'
      handleClose={() => toggle()}
      snackSuccess={{ height: `${theme.snack.height}`, backgroundColor: `${theme.snack.snackSuccess}`, color: 'success' }}
    />
  )
}

export default SnackSuccess