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
import { membersNavigationLists, processIconLists, processIconsRightArr } from '../types/appTypes';
import { ReactComponent as DividerIcon } from '../Assets/svg/Divider.svg';
import { ReactComponent as ArrowDownIcon } from '../Assets/svg/downarrow.svg';
import { ReactComponent as ViewsIcon } from '../Assets/svg/views.svg'
import { ReactComponent as ListsIcon } from '../Assets/svg/lists.svg'
import { ReactComponent as ColumnIcon } from '../Assets/svg/column.svg'
import { ReactComponent as FilterIcon } from '../Assets/svg/filter.svg'
import { ReactComponent as GroupIcon } from '../Assets/svg/group.svg'
import { ReactComponent as OrderIcon } from '../Assets/svg/arrow.svg'
import { ReactComponent as PalleteIcon } from '../Assets/svg/pallete.svg'
import { ReactComponent as HeightIcon } from '../Assets/svg/height.svg'

import { ReactComponent as BagIcon } from '../Assets/svg/bag.svg'
import { ReactComponent as FileImportIcon } from '../Assets/svg/fileImport.svg'
import { ReactComponent as FileExportIcon } from '../Assets/svg/fileExport.svg'
import { ReactComponent as SettingIcon } from '../Assets/svg/setting.svg'
import { ReactComponent as AddIcon } from '../Assets/svg/add.svg'
import { ReactComponent as SearchIcon } from '../Assets/svg/lens.svg'
import { ReactComponent as ListBlackIcon } from '../Assets/svg/blklist.svg'
import { ReactComponent as SubdirectoryIcon } from '../Assets/svg/subdirectory.svg'
import { ReactComponent as GridIcon } from '../Assets/svg/grid.svg'
import { ReactComponent as CardIcon } from '../Assets/svg/card.svg'
import { ReactComponent as LabelIcon } from '../Assets/svg/label.svg'
import { ReactComponent as AnchorIcon } from '../Assets/svg/anchor.svg'
import { ReactComponent as BotIcon } from '../Assets/svg/bot.svg'
import { ReactComponent as ConnectIcon } from '../Assets/svg/connection.svg'
import { ReactComponent as MembersIcon } from '../Assets/svg/members.svg'
import { ReactComponent as ExportIcon } from '../Assets/svg/export.svg'


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

export const processIcons: processIconLists[] = [
  {
    id: generateRandomNumber(),
    name: 'Views',
    icon: <ViewsIcon />,
    divider: <DividerIcon />,
  },

  {
    id: generateRandomNumber(),
    name: 'Tables',
    icon: <ListsIcon />,
    divider: <DividerIcon />,
    extraIcon: <ArrowDownIcon />,
  },
  {
    id: generateRandomNumber(),
    name: 'Columns',
    icon: <ColumnIcon />,
    divider: <DividerIcon />,
    background: 'rgba(71, 255, 145, 0.2)',
  },

  {
    id: generateRandomNumber(),
    name: 'Filters',
    icon: <FilterIcon />,
  },

  {
    id: generateRandomNumber(),
    name: 'Grouped in : Phases',
    icon: <GroupIcon />,
    background: 'rgba(108, 71, 255, 0.2)',
  },

  {
    id: generateRandomNumber(),
    name: 'Orders',
    icon: <OrderIcon />,
  },

  {
    id: generateRandomNumber(),
    name: 'Colors',
    icon: <PalleteIcon />,
  },

  {
    id: generateRandomNumber(),
    name: 'Heights',
    icon: <HeightIcon />,
  },

]

export const processIconRight: processIconsRightArr = [
  <BagIcon />,
  <SearchIcon />,
  <FileImportIcon />,
  <FileExportIcon />,
  <SettingIcon />,
  <AddIcon />,
];

export const membersNavigations: membersNavigationLists = [
  {
    name: 'Startform',
    icon: <ListBlackIcon />,
    path: '',
  },

  {
    name: 'Fasi',
    icon: <SubdirectoryIcon />,
    path: '',
  },
  {
    name: 'Tabella',
    icon: <GridIcon />,
    path: '',
  },
  {
    name: 'Card',
    icon: <CardIcon />,
    path: '',
  },
  {
    name: 'Labels',
    icon: <LabelIcon />,
    path: '',
  },

  {
    name: 'Campi condizionali',
    icon: <AnchorIcon />,
    path: '',
  },

  {
    name: 'Automazioni',
    icon: <BotIcon />,
    path: '',
  },

  {
    name: 'Connessioni',
    icon: <ConnectIcon />,
    path: '',
  },

  {
    name: 'Membri',
    icon: <MembersIcon />,
    path: 'settings/members',
    active: true,
  },

  {
    name: 'Esportazione',
    icon: <ExportIcon />,
    path: '',
  },

  {
    name: 'Generali',
    icon: <SettingIcon />,
    path: '',
  },
];
