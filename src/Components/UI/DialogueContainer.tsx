import React from 'react'
import Box from '@mui/material/Box';
import DialogueLeft from './DialogueLeft';

const containerStyles = {
  display: 'flex',
  flexDirection: 'column',
  // alignItems: 'center',
  padding: '12px 24px 24px',
  gap: '10px',
  width: '100%',
  overflowY: 'scroll'
}

const dialogueBoardStyles = {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '16px',
  width: '100%',
}

const dialogueItems = {
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  width: '100%',
  borderRadius: '8px',
  // border: '1px solid #E5E5E5',
}

const DialogueContainer = () => {
  return (
    <Box sx={{ ...containerStyles }}>
      <Box sx={{ ...dialogueBoardStyles }}>
        <DialogueLeft dialogueItems={dialogueItems} />
        <Box sx={{ ...dialogueItems, order: 1 }}>Right</Box>
      </Box>

      <Box>Footer</Box>
    </Box>
  )
}

export default DialogueContainer