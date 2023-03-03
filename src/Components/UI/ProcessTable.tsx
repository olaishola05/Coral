import React from 'react'
import CustomTable from './CustomTable';
import Box from '@mui/material/Box';
import PLIcon from '../../Assets/svg/pl.svg'

interface Process {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  processId: string;
  Assignee: string;
  createdAt: string;
}

interface ProcessTableProps {
  process: Process;
  index: string
  handleClick: (event: React.MouseEvent<HTMLElement>) => void;
  open: boolean;
  status: string;
}
const ProcessTable = ({ process, index, handleClick, status }: ProcessTableProps) => {
  const { id, firstName, lastName, phone, processId, Assignee, createdAt } = process
  const VOD = `VOD-15${index + 1}`

  return (
    <Box sx={{ width: '98%' }}>
      <CustomTable
        key={id}
        rows={[
          ['', VOD, `${firstName} ${lastName}`, `+${phone}`, processId, Assignee, createdAt]
        ]}
        handleClick={handleClick}
        status={status}
      />
    </Box>

  )
}

export default ProcessTable