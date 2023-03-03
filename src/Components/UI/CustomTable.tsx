import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';

interface CustomTableProps {
  headers?: string[];
  rows?: string[][];
  columns?: string[];
  handleClick?: (event: React.MouseEvent<HTMLElement>) => void;
  open?: boolean;
  status?: string;
}

const CustomTable: React.FC<CustomTableProps> = ({ headers, rows, handleClick, status }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        {headers && (
          <TableHead>
            <TableRow>
              {headers.map((header, index) => (
                <TableCell key={index}>
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
        )}
        <TableBody>
          {status === 'loading' ? <Skeleton animation="wave" /> : rows && rows.map((row, index) => (
            <TableRow key={index}
              sx={{ display: 'flex', alignItems: 'center' }}
              onClick={handleClick}
            >
              {status === 'loading' ? <Skeleton animation="wave" /> : row.map((column, index) => (
                <TableCell key={index} align="left" sx={{ padding: '10px 0px 0px 10px', height: '34px', border: '1px solid #EAEAEC', width: column === '' ? '15%' : column[index] === 'Name' ? '200%' : '100%', flexGrow: 1, color: '#312E43' }}>
                  {column}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;