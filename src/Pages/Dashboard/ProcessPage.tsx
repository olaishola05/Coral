import React from 'react'
import ProcessToolbar from '../../Components/Layouts/ProcessToolbar'
import useFetch from '../../hooks/useFetch'
import Box from '@mui/material/Box';
import ProcessTable from '../../Components/UI/ProcessTable';
import useToggle from '../../hooks/useToggle';
import TaskModal from '../../Components/UI/Modal/TaskModal';
import SettingsModal from '../../Components/UI/Modal/SettingsModal';

const baseUrl = process.env.REACT_APP_BASE_URL

const ProcessPage = () => {
  const { data, status, error } = useFetch(baseUrl + '/processes')
  const [open, toggle] = useToggle(false)
  const [openSettings, toggleSettings] = useToggle(false)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    toggle()
  };

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
      <ProcessToolbar toggleOpen={toggleSettings} />
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