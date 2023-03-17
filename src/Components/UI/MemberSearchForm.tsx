import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';

const MemberSearchForm = () => {
  return (
    <Paper component="form"
      sx={{ p: '0px 16px', display: 'flex', alignItems: 'center', width: 287, height: 42, border: '1px solid #C1C0C7' }}
    >
      <IconButton type="submit" sx={{ pl: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}

        placeholder="Cerca utente"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
    </Paper>
  )
}

export default MemberSearchForm