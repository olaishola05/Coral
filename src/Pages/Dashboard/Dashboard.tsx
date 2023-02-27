import React from 'react'
import { Outlet } from 'react-router-dom'
import { styled, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '../../Assets/svg/menuIcon.svg'
import useToggle from '../../hooks/useToggle';
import { drawerWidth } from '../../utils/utils';
import BoardTopbar from '../../Components/Layouts/BoardTopbar';
import BoardListItems from '../../Components/Layouts/BoardListItems';
import { useLocation, useParams } from 'react-router-dom';



const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  padding: '5px 16px 19px',
  alignItems: 'flex-start',
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
  const [open, toggle] = useToggle(false);
  const [path, setPath] = React.useState<string>('')


  const location = useLocation()
  const params = useParams()
  console.log(params)
  React.useEffect(() => {
    if (location.pathname === '/')
      setPath('Process')
    else
      setPath(location.pathname.split('/')[1])

  }, [location.pathname])
  return (
    <Box sx={{ display: 'flex' }}>
      <BoardTopbar open={open} toggle={toggle} path={path} />
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton
            onClick={toggle}>
            <img src={MenuIcon} alt="menu" />
          </IconButton>
        </DrawerHeader>
        <BoardListItems open={open} />
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
        }}
      >

        <DrawerHeader />
        <Outlet />
      </Box>
    </Box>
  )
}

export default Dashboard