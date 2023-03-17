import React from 'react'
import Box from '@mui/material/Box'
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Check from '@mui/icons-material/Check';

const styles = {
  width: 226,
  height: '104px',
  padding: '4px 0px',
  borderRadius: '8px',
  boxShadow: ' 0px 0px 4px rgba(0, 0, 0, 0.15)',
  backgroundColor: 'white',
  display: 'flex',
  alignItems: 'flex-start',
  position: 'absolute',
  top: '100%',
  left: '-45px'
}

interface ListModalProps {
  handleClose: () => void
}

const ListModal = ({ handleClose }: ListModalProps) => {
  const [selectedIndex, setSelectedIndex] = React.useState(2);
  const listsOptions = [
    'Solo Card',
    'Solo Prodotti',
    'Card & Prodotti'
  ]

  const handleListItemClick = (index: number) => {
    setSelectedIndex(index);
  };
  return (
    <>

      <Box sx={{ ...styles }}
        onClick={handleClose}
      >
        <List sx={{ width: '100%', padding: '0px' }}>
          {listsOptions.map((option, index) => (
            <ListItem
              onClick={() => handleListItemClick(index)}
              key={index} sx={{ height: '32px', display: 'flex', alignItems: 'center', fontSize: '12px' }}>
              <ListItemText primary={option} sx={{ fontSize: '12px' }} />
              {selectedIndex === index ? <Check sx={{ color: '#f93e6c', width: '16px' }} /> : ''}
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  )
}

export default ListModal