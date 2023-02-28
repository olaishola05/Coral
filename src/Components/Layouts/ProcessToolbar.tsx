import React from 'react'
import { ReactComponent as ViewsIcon } from '../../Assets/svg/views.svg'
import { ReactComponent as ListsIcon } from '../../Assets/svg/lists.svg'
import { ReactComponent as ColumnIcon } from '../../Assets/svg/column.svg'
import { ReactComponent as FilterIcon } from '../../Assets/svg/filter.svg'
import { ReactComponent as GroupIcon } from '../../Assets/svg/group.svg'
import { ReactComponent as OrderIcon } from '../../Assets/svg/arrow.svg'
import { ReactComponent as SearchIcon } from '../../Assets/svg/lens.svg'
import { ReactComponent as PalleteIcon } from '../../Assets/svg/pallete.svg'
import { ReactComponent as HeightIcon } from '../../Assets/svg/height.svg'
import { ReactComponent as BagIcon } from '../../Assets/svg/bag.svg'
import { ReactComponent as FileImportIcon } from '../../Assets/svg/fileImport.svg'
import { ReactComponent as FileExportIcon } from '../../Assets/svg/fileExport.svg'
import { ReactComponent as SettingIcon } from '../../Assets/svg/setting.svg'
import { ReactComponent as AddIcon } from '../../Assets/svg/add.svg'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import { IconButton } from '@mui/material'



const ProcessToolbar = () => {
  return (
    <Box sx={{ padding: '12px 0px 0px;', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
      <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', padding: '0px 12px', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', padding: '3px 12px', gap: '78px' }}>
          <IconButton sx={{ padding: '0px', fontSize: '16px', display: 'flex', gap: '14px' }}>
            <ViewsIcon /> Views <span style={{ fontSize: '12px', color: '#464356', fontWeight: '700', marginLeft: '16px' }}>|</span>
          </IconButton>
          <ListsIcon />
          <ColumnIcon />
          <FilterIcon />
          <GroupIcon />
          <OrderIcon />
          <PalleteIcon />
          <HeightIcon />
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', padding: '3px 12px', marginLeft: 'auto', gap: '28.17px' }}>
          <BagIcon />
          <SearchIcon />
          <FileImportIcon />
          <FileExportIcon />
          <SettingIcon />
          <AddIcon style={{ backgroundColor: 'red' }} />
        </Box>
      </Box>
      <Divider sx={{ width: '100%', height: '1px', backgroundColor: '#D6D5D9', margin: '8px' }} />
    </Box>
  )
}

export default ProcessToolbar