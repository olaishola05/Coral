import BoxIcon from '../Assets/svg/BoxIcon.svg';
import Model from '../Assets/svg/model.svg';
import Database from '../Assets/svg/db.svg';
import MacroFasi from '../Assets/svg/macrofasi.svg';
import Network from '../Assets/svg/network.svg';
import Robot from '../Assets/svg/robot.svg';
import Support from '../Assets/svg/help.svg';
import LogoutIcon from '../Assets/svg/logout.svg';

export const drawerIconNames = [
  {
    name: 'Processi',
    icon: BoxIcon,
    path: '/',
  },
  {
    name: 'Modelli',
    icon: Model,
    path: '/model',
  },
  {
    name: 'Database',
    icon: Database,
    path: '/database',
  },
  {
    name: 'Macro Fasi',
    icon: MacroFasi,
    path: '/macrofasi',
  },
  {
    name: 'Venditori',
    icon: Network,
    path: '/venditori',
  },
  {
    name: 'Automazioni',
    icon: Robot,
    path: '/automazioni',
  },
  {
    name: 'Supporto',
    icon: Support,
    path: '/supporto',
  },
  {
    name: 'Logout',
    icon: LogoutIcon,
    path: '/logout',
  }
];

export const drawerWidth = 236;