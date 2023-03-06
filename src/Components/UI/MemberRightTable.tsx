import React from 'react'
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CustomCheckbox from './CustomCheckbox';
import MiniHeader from './MiniHeader';
import { ReactComponent as InfoIcon } from '../../Assets/svg/info.svg';
import { ReactComponent as TrashIcon } from '../../Assets/svg/trash.svg';
import { generateRandomNumber } from '../../utils/utils';

const tableContainerStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '0px 0px 8px',
  gap: '8px',
  width: 970,
  order: 1,
  height: '365px',
  borderRadius: '8px',
}

const MemberRightTable = () => {
  const createData = (utente: string, email: string, permessi: string, isChecked: boolean) => {
    return { utente, email, permessi, id: generateRandomNumber(), isChecked: isChecked };
  }
  const rows = [
    createData('Michele Cimmino', 'michele.cimmino@lastingdynamics.com', 'Admin', false),
    createData('Marino Panariello', 'marino.panariello@lastingdynamics.com', 'Utente', false),
    createData('Vincenzo Lavorante', 'vincenzo.lavorante@lastingdynamics.com', 'Venditore', true),
    createData('Antonio Langella', 'antonio.langella@lastingdynamics.com', 'Solo Lettura', true),
    createData('Alessandro Durni', 'a.durni@lastingdynamics.com', 'Venditore', false),
    createData('Andrea', 'andrea@coraly.com', 'Venditore', false),
    createData('Francesco', 'francesco@coraly.com', 'Utente', false),
  ]

  const [tableRows, setTableRows] = React.useState(rows);

  const handleCheckBoxChange = (id: string) => {
    const updatedRows = tableRows.map(row => {
      if (row.id === id) {
        return { ...row, isChecked: !row.isChecked };
      }
      return row;
    });
    setTableRows(updatedRows);
  };

  return (
    <Box sx={tableContainerStyles}>
      <TableContainer component={Paper}>
        <Table aria-label="memberi">
          <TableHead >
            <TableRow sx={{ backgroundColor: '#F6F8FA' }}>
              <TableCell sx={{ width: '186px', display: 'flex', borderBottom: 'none', alignItems: 'center', padding: 0 }}>
                <CustomCheckbox
                  checked={false}
                  onChange={() => { }}
                  name="Utente"
                />
                <MiniHeader text='Utente' />
              </TableCell>
              <TableCell sx={{ width: '457px', borderBottom: 'none' }}><MiniHeader text='Email' /></TableCell>
              <TableCell sx={{ width: '255px', display: 'flex', gap: '8px', borderBottom: 'none', }}>
                <MiniHeader text="Permessi" />
                <InfoIcon />
              </TableCell>
              <TableCell sx={{ width: '72px', borderBottom: 'none' }} />
            </TableRow>
          </TableHead>
          <TableBody>
            {tableRows.map((row, index) => (
              <TableRow
                key={row.utente}
                sx={{ '&:last-child td, &:last-child th': { border: 0 }, padding: 0 }}
              >
                <TableCell component="th" scope="row" sx={{ padding: 0, }}>
                  <CustomCheckbox
                    checked={row.isChecked}
                    onChange={() => handleCheckBoxChange(row.id)}
                    name={row.utente}
                    checkedStyle={{ color: 'secondary.main', '&.Mui-checked': { color: 'primary.main' } }}

                  />
                  {row.utente}
                </TableCell>
                <TableCell align='justify'>{row.email}</TableCell>
                <TableCell>
                  {row.permessi}
                </TableCell>
                <TableCell>
                  <TrashIcon />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default MemberRightTable