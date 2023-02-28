import BoxIcon from '../Assets/svg/BoxIcon.svg';
import Model from '../Assets/svg/model.svg';
import Database from '../Assets/svg/db.svg';
import MacroFasi from '../Assets/svg/macrofasi.svg';
import Network from '../Assets/svg/network.svg';
import Robot from '../Assets/svg/robot.svg';
import Support from '../Assets/svg/help.svg';
import LogoutIcon from '../Assets/svg/logout.svg';
import ProcessIcon from '../Assets/svg/process.svg';
import CartIcon from '../Assets/svg/cart.svg';
import PlusIcon from '../Assets/svg/plus.svg';
import LockIcon from '../Assets/svg/lock.svg';
import ElipsesIcon from '../Assets/svg/elipses.svg';

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

export const processList = [
  {
    id: '0',
    name: 'Create a new process',
    background: '#F5F5F5',
    icon: PlusIcon,
    color: '#464356',
  },
  {
    id: '1',
    name: 'Processo 1',
    background: '#47BDFF',
    icon: ProcessIcon,
  },

  {
    id: '2',
    name: 'Processo 2',
    background: '#FF47B5',
    icon: ProcessIcon,
    private: {
      LockIcon,
      ElipsesIcon,
    },


  },

  {
    id: '3',
    name: 'Processo 3',
    background: '#FF9F47',
    icon: CartIcon,
    private: { LockIcon, ElipsesIcon }
  },

  {
    id: '4',
    name: 'Processo 4',
    background: '#6C47FF',
    icon: ProcessIcon,
  },

  {
    id: '5',
    name: 'Processo 5',
    background: '#2EF1CE',
    icon: ProcessIcon,
  },

  {
    id: '6',
    name: 'Processo 6',
    background: '#F7D524',
    icon: ProcessIcon,
  },

  {
    id: '7',
    name: 'Processo 7',
    background: '#E547FF',
    icon: ProcessIcon,
  },

  {
    id: '8',
    name: 'Processo 8',
    background: '#F7D524',
    icon: ProcessIcon,
  },

  {
    id: '9',
    name: 'Processo 9',
    background: '#E547FF',
    icon: ProcessIcon,
  },
];

export const generateRandomNumber = () => {
  return String(Math.floor(Math.random() * 100) + 10)
}