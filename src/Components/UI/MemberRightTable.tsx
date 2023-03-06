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
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useTheme } from '@mui/material/styles';


const tableContainerStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '0px 0px 8px',
  gap: '8px',
  width: 970,
  order: 1,
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
        return {
          ...row,
          isChecked: !row.isChecked,
          // permessi: row.permessi ? 'Utente' : 'Admin' 
        };
      }
      return row;
    });
    setTableRows(updatedRows);
  };

  const theme = useTheme();
  return (
    <Box sx={tableContainerStyles}>
      <TableContainer component={Paper}>
        <Table aria-label="memberi">
          <TableHead>
            <TableRow sx={{ backgroundColor: '#F6F8FA' }}>
              <TableCell sx={{ width: '186px', display: 'flex', borderBottom: 'none', alignItems: 'center', padding: '0px 13px 0px 16px' }}>
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
            {tableRows.map((row) => (
              <TableRow
                key={row.utente}
                sx={{ '&:last-child td, &:last-child th': { border: 0 }, padding: '0px 5px' }}
              >
                <TableCell component="th" scope="row" sx={{ width: '300px', padding: '0px 0px 0px 16px' }}>
                  <CustomCheckbox
                    checked={row.isChecked}
                    onChange={() => handleCheckBoxChange(row.id)}
                    name={row.utente}
                    checkedStyle={{
                      '&.Mui-checked': { color: 'primary.main' }
                    }}
                  />
                  {row.utente}
                </TableCell>
                <TableCell sx={{ width: '457px', padding: '0px 0px 0px 16px' }}>{row.email}</TableCell>
                <TableCell sx={{ padding: '0px 0px 0px 16px' }}>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={row.permessi}
                    label="Permessi"
                    onChange={(e: SelectChangeEvent) => console.log(e.target.value)}
                    sx={{
                      height: '22px', borderRadius: '8px',
                      backgroundColor: row.permessi === 'Admin' ? 'primary.main' : row.permessi === 'Utente' ? 'secondary.main' : row.permessi === 'Venditore' ? 'success.main' : `${theme.text.primary.neutral}`,
                      '& .MuiSelect-select': {
                        padding: '0px 16px',
                        color: 'white',
                        '&:focus': {
                          backgroundColor: 'transparent'
                        }
                      },
                      '& .MuiSelect-icon': {
                        color: 'white'
                      },
                      '& .MuiSelect-selectMenu': {
                        height: '40px'
                      },
                      '& .MuiSelect-iconOutlined': {
                        right: '8px'
                      },
                      '& .MuiOutlinedInput-notchedOutline': {
                        border: 'none'
                      },
                      '& .MuiSelect-select:focus': {
                        backgroundColor: 'transparent'
                      },
                      padding: '2px 8px'
                    }}
                  >
                    <MenuItem value={'Admin'}>Admin</MenuItem>
                    <MenuItem value={'Utente'}>Utente</MenuItem>
                    <MenuItem value={'Venditore'}>Venditore</MenuItem>
                    <MenuItem value={'Solo Lettura'}>Solo Lettura</MenuItem>
                  </Select>

                </TableCell>
                <TableCell sx={{ padding: 0, }}>
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