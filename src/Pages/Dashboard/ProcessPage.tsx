import React from 'react'
import ProcessToolbar from '../../Components/Layouts/ProcessToolbar'
import Box from '@mui/material/Box';
import ProcessTable from '../../Components/UI/ProcessTable';
import TaskModal from '../../Components/UI/Modal/TaskModal';
import SettingsModal from '../../Components/UI/Modal/SettingsModal';
import ListModal from '../../Components/UI/Modal/ListModal';
import { useFetch, useToggle } from '../../hooks';

const baseUrl = process.env.REACT_APP_BASE_URL

const ProcessPage = () => {
  const { data, status, error } = useFetch(baseUrl + '/processes')
  const [open, toggle] = useToggle(false)
  const [openSettings, toggleSettings] = useToggle(false)
  const [openList, toggleList] = useToggle(false)
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    toggle()
  };

  const handleSettingsClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const openPopover = Boolean(anchorEl);

  if (status === 'error') {
    return <div>
      <>
        Error: {error}</>
    </div>
  }

  return (
    <Box>
      {open && <TaskModal open={open} toggleOpen={toggle} />}
      {openSettings && <SettingsModal open={openSettings} toggleOpen={toggleSettings} />}
      {openList &&
        <ListModal
          open={openPopover}
          toggle={toggleList}
          anchorEl={anchorEl}
          handleClose={handleClose}
        />}
      <ProcessToolbar toggleOpen={toggleSettings} toggle={handleSettingsClick} />
      {data && data.map((process: any, index: string) => (
        <ProcessTable
          process={process}
          index={index}
          key={process.id}
          handleClick={handleClick}
          open={open}
          status={status}
        />
      ))
      }
    </Box>
  )
}

export default ProcessPage