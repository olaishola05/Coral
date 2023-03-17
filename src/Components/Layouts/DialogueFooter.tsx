import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CustomButton from '../UI/CustomButton';

const btnCommonStyles = {
  lineHeight: '18px',
  fontSize: '14px',
}

const commonStyles = {
  display: 'flex',
  alignItems: 'flex-start',
}

const DialogueFooter = () => {
  return (
    <Box sx={{
      ...commonStyles,
      justifyContent: 'flex-end'
    }}>
      <Typography variant="body2" color="text.secondary">
        <strong>Fase ID</strong>: 61571535e7058c00143322b8
      </Typography>

      <Box sx={{ ...commonStyles, width: '150px', gap: '16px', marginLeft: 'auto' }}>
        <CustomButton
          variant='outlined'
          onClick={() => { }}
          color='secondary'
          btnStyles={{ width: '77px', color: 'secondary', ...btnCommonStyles }}
        >
          Annulla
        </CustomButton>
        <CustomButton
          variant='contained'
          onClick={() => { }}
          color='success'
          type='submit'
          btnStyles={{ width: '62px', color: 'white', ...btnCommonStyles }}
        >
          Salva
        </CustomButton>

      </Box>
    </Box>
  )
}

export default DialogueFooter