import React from 'react'
import Box from '@mui/material/Box'
import CustomPopover from '../CustomPopover'
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

interface ListModalProps {
  open: boolean
  toggle: () => void
  anchorEl: HTMLElement | null
  handleClose: () => void
}

const styles = {
  width: 226,
  height: '104px',
  padding: '4px 0px',
  borderRadius: '8px',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  backgroundColor: 'white',
  display: 'flex',
  alignItems: 'flex-start'
}

const ListModal = ({ open, toggle, anchorEl, handleClose }: ListModalProps) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const listsOptions = [
    'Solo Card',
    'Solo Prodotti',
    'Card & Prodotti'
  ]

  const handleListItemClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => {
    setSelectedIndex(index);
  };
  return (
    <Box>
      <CustomPopover
        open={open}
        anchorEl={anchorEl}
        handleClose={handleClose}
      >
        <Box sx={{ ...styles }}>
          <List sx={{ width: '100%', padding: '0px' }}>
            {listsOptions.map((option, index) => (
              <ListItem key={index} sx={{ padding: '0px 0px', height: '32px', display: 'flex', alignItems: 'center', }}>
                <ListItemIcon
                  onClick={(event) => handleListItemClick(event, index)}
                >
                  {selectedIndex === index ? <img src="./Assets/svg/plus.svg" alt="checked" /> : ''}
                </ListItemIcon>
                <ListItemText primary={option} />
              </ListItem>
            ))}
          </List>
        </Box>
      </CustomPopover>
    </Box>
  )
}

export default ListModal