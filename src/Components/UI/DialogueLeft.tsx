import React from 'react'
import Box from '@mui/material/Box';
import { DialogLeftTop } from '../Layouts';
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
      height: '600px',
    }}>
      <DialogLeftTop />
      <CompanyInfo />
    </Box>
  )
}

export default DialogueLeft 