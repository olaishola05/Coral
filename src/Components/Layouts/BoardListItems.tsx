import React from 'react'
import { useTheme } from '@mui/material/styles';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import { drawerIconNames } from '../../utils/utils';
import LastingDIcon from '../../Assets/svg/LastinD.svg'
import LogoIcon from '../../Assets/svg/Logo.svg'
import Box from '@mui/material/Box';
import { useNavigation } from '../../hooks/useNavigation';
import { Link } from 'react-router-dom';

interface BoardListItemsProps {
  open: boolean;
}

const BoardListItems = ({ open }: BoardListItemsProps) => {
  const theme = useTheme();
  const navigate = useNavigation();

  return (
    <List>
      <ListItem disablePadding sx={{ display: 'block' }}>
        <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center' }}
        >
          <ListItemIcon
            sx={{ minWidth: 0, mr: open ? 2 : 'auto', justifyContent: 'center', marginBottom: '24px', width: '35px', height: '35px' }}
          >
            <img src={LastingDIcon} alt={LastingDIcon} />
          </ListItemIcon>
          <ListItemText primary="Lasting Dynamics" sx={{ opacity: open ? 1 : 0, color: 'white' }} />
        </ListItemButton>
      </ListItem>
      <Box sx={{ height: '580px' }}>
        {drawerIconNames.map((text, index) => (
          <ListItem component={Link} to={text.path} key={text.name} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
              onClick={() => navigate(text.path)}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <img src={text.icon} alt={text.name} />
              </ListItemIcon>
              <ListItemText primary={text.name} sx={{ opacity: open ? 1 : 0, color: 'white', }} />
            </ListItemButton>
          </ListItem>
        ))}
      </Box>

      <ListItem disablePadding sx={{ display: 'block', alignItems: 'baseline' }}>
        <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center' }}
        >
          <ListItemIcon
            sx={{ minWidth: 0, mr: open ? 2 : 'auto', justifyContent: 'center', width: '35px', height: '35px' }}
          >
            <img src={LogoIcon} alt={LogoIcon} />
          </ListItemIcon>
          <ListItemText primary="Coraly"
            sx={{
              opacity: open ? 1 : 0,
              color: open ? `${theme.palette.primary.main}` : '',
              marginTop: '8px',
            }}
          />
        </ListItemButton>
      </ListItem>
    </List>
  )
}

export default BoardListItems