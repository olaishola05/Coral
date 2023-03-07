import React from 'react'
import Box from '@mui/material/Box';
import { ReactComponent as PLIcon } from '../../Assets/svg/pl.svg'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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

  console.log(process)

  const cellStyles = {
    height: '30px',
    flexGrow: 1,
    borderBottom: '1px solid #EAEAEC',
    borderRight: '1px solid #EAEAEC',
    borderLeft: '1px solid #EAEAEC',
    color: '#312E43',
    padding: '6px',
  }

  const dateFomatter = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })

  return (
    <Box sx={{ width: '98%', }}>
      <TableContainer component={Paper} sx={{ boxShadow: 'none' }}>
        <Table aria-label="process table">
          <TableBody>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th"
                scope="row" sx={{ width: '64px' }}
                style={cellStyles}
              />

              <TableCell
                component="th"
                scope="row"
                onClick={handleClick}
                style={cellStyles}
                sx={{ width: '160px' }}
              >
                {VOD}
              </TableCell>
              <TableCell
                component="th" scope="row"
                sx={{ width: '310px' }}
                style={cellStyles}
              >
                {firstName} {lastName}
              </TableCell>
              <TableCell component="th" scope="row"
                sx={{ width: '200px' }}
                style={cellStyles}
              >
                {`+${phone}`}
              </TableCell>
              <TableCell component="th" scope="row"
                sx={{ width: '200px' }}
                style={cellStyles}
              >
                {processId}
              </TableCell>
              <TableCell component="th" scope="row"
                sx={{ width: '205px', display: 'flex', alignItems: 'center', gap: 1 }}
                style={cellStyles}>
                <PLIcon /> {Assignee}
              </TableCell>
              <TableCell component="th" scope="row"
                sx={{ width: '205px' }}
                style={cellStyles}
              >
                {dateFomatter.format(new Date(createdAt))}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>

  )
}

export default ProcessTable