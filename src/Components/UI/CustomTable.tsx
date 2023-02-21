import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, } from '@mui/material';

interface CustomTableProps {
  headers?: string[];
  rows?: string[][];
  columns?: string[];
}

const CustomTable: React.FC<CustomTableProps> = ({ headers, rows }, ...rest) => {
  return (
    <TableContainer component={Paper} {...rest}>
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
          {rows && rows.map((row, index) => (
            <TableRow key={index}>
              {row.map((column, index) => (
                <TableCell key={index}>
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