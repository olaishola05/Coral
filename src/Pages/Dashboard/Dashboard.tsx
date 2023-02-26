import React from 'react'
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '../../Assets/svg/menuIcon.svg'
import NotificationIcon from '../../Assets/svg/notification.svg'
import Alpha from '../../Assets/svg/Shortcut.svg'
import FNIcon from '../../Assets/svg/FN.svg'
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import useToggle from '../../hooks/useToggle';
import { drawerIconNames } from '../../utils/utils';
import LastingDIcon from '../../Assets/svg/LastinD.svg'

const drawerWidth = 236;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  padding: '0px 16px 19px',
  alignItems: 'center',
  height: '900px',
  backgroundColor: theme.palette.secondary.main,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  backgroundColor: theme.palette.secondary.main,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
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

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

function Dashboard() {
  const theme = useTheme();
  const [open, toggle] = useToggle(false);
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" open={open} color='transparent'>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={toggle}
            edge="start"
            sx={{
              marginRight: 4,
              ...(open && { display: 'none' }),
            }}
          >
            <img src={MenuIcon} alt="menu" />
          </IconButton>
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h6" noWrap component="div">
              Process
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
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={toggle}>
            <img src={MenuIcon} alt="menu" />
          </IconButton>
        </DrawerHeader>
        <List>
          <ListItem disablePadding sx={{ display: 'block' }}>
            <ListItemButton sx={{ minHeight: 48, justifyContent: 'center', px: 2.5 }}>
              <ListItemIcon sx={{ minWidth: 0, mr: 3, justifyContent: 'center' }}>
                <img src={LastingDIcon} alt={LastingDIcon} />
              </ListItemIcon>
              <ListItemText primary="Lasting Dynamics" sx={{ opacity: 1, color: 'white' }} />
            </ListItemButton>
          </ListItem>
          {drawerIconNames.map((text, index) => (
            <ListItem key={text.name} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
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
                <ListItemText primary={text.name} sx={{ opacity: open ? 1 : 0, color: 'white' }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  )
}

export default Dashboard