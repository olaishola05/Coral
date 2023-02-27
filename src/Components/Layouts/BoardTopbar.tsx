
import React from 'react'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import NotificationIcon from '../../Assets/svg/notification.svg'
import Alpha from '../../Assets/svg/Shortcut.svg'
import FNIcon from '../../Assets/svg/FN.svg'
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '../../Assets/svg/menuIcon.svg'
import { drawerWidth } from '../../utils/utils';


interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

interface BoardTopbarProps {
  open: boolean;
  toggle: () => void;
  path: string;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const BoardTopbar = ({ open, toggle, path }: BoardTopbarProps) => {
  return (
    <AppBar position="fixed" open={open} color='transparent'>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={toggle}
          edge="start"
          sx={{
            marginRight: 4,
            alignItems: 'center',
            ...(open && { display: 'none' }),
          }}
        >
          <img src={MenuIcon} alt="menu" />
        </IconButton>
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" noWrap component="div" sx={{ fontWeight: '600', fontSize: '20px', lineHeight: '36px', textTransform: 'capitalize' }}>
            {path}
          </Typography>

          <Box>
            <IconButton color="inherit" aria-label="open drawer" onClick={toggle} edge="start" sx={{ marginRight: 2, ...(open && { display: 'none' }), }}>
              <img src={NotificationIcon} alt={NotificationIcon} />
            </IconButton>
            <IconButton color="inherit" aria-label="open drawer" onClick={toggle} edge="start" sx={{ marginRight: 2, ...(open && { display: 'none' }), }}>
              <img src={Alpha} alt={Alpha} />
            </IconButton>
            <IconButton color="inherit" aria-label="open drawer" onClick={toggle} edge="start" sx={{ marginRight: 2, ...(open && { display: 'none' }), }}>
              <img src={FNIcon} alt={FNIcon} />
            </IconButton>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default BoardTopbar