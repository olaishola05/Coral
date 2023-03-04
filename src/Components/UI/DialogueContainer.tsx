import React from 'react'
import Box from '@mui/material/Box';
import DialogueLeft from './DialogueLeft';
import DialogueRight from './DialogueRight';
import TabBar from '../Layouts/TabBar';

const containerStyles = {
  display: 'flex',
  padding: '12px 0px 24px',
  gap: '10px',
  width: '100%',
  overflowY: 'scroll',
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
  borderRadius: '8px',
}

const DialogueContainer = () => {
  return (
    <Box sx={{ ...containerStyles }}>
      <Box sx={{ ...dialogueBoardStyles }}>
        <DialogueLeft dialogueItems={dialogueItems} />
        <Box sx={{ ...dialogueItems, order: 1 }}>
          <DialogueRight dialogueItems={dialogueItems} />
        </Box>
        <Box sx={{ order: 3, display: 'flex' }}>
          <Box sx={{ borderLeft: '2px solid #EAEAEC', height: 600 }} />
          <TabBar />
        </Box>
      </Box>
    </Box>
  )
}

export default DialogueContainer