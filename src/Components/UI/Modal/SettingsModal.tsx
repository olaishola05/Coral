import React from 'react'
import { CustomModal } from './'
import Box from '@mui/material/Box';
import { SettingsMemberTop } from '../../Layouts';
import MembersContainer from '../MembersContainer';

interface Props {
  open: boolean
  toggleOpen: () => void
}

const displays = {
  flex: 'flex',
  alignItems: 'flex-start',
}

const settingsModalStyles = {
  top: '50%',
  left: '52.2%',
  height: 770,
  width: 1350,
}

const SettingsModal = ({ open, toggleOpen }: Props) => {
  return (
    <CustomModal open={open} onClose={toggleOpen} sx={{ ...settingsModalStyles }}>
      <Box sx={{ ...displays, padding: '0px', flexDirection: 'column' }}>
        <SettingsMemberTop handleClose={toggleOpen} />
        <MembersContainer />
      </Box>
    </CustomModal>
  )
}

export default SettingsModal