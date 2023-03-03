import React from 'react'
import Box from '@mui/material/Box';
import DialogueLeftTop from '../Layouts/DialogLeftTop';
import CompanyInfo from './CompanyInfo';

interface Props {
  dialogueItems: any
}


const DialogueLeft = ({ dialogueItems }: Props) => {
  return (
    <Box sx={{
      ...dialogueItems,
      order: 0, padding: '10px',
      overflowY: 'scroll',
      border: '1px solid #E5E5E5',
      height: '600px'
    }}>
      <DialogueLeftTop />
      <CompanyInfo />
    </Box>
  )
}

export default DialogueLeft 