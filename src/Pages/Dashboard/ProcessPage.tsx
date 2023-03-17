import React from 'react'
import { ProcessToolbar } from '../../Components/Layouts'
import Box from '@mui/material/Box';
import ProcessTable from '../../Components/UI/ProcessTable';
import { TaskModal, SettingsModal } from '../../Components/UI/Modal';
import { useFetch, useToggle } from '../../hooks';
import Skeleton from '@mui/material/Skeleton';

const baseUrl = process.env.REACT_APP_BASE_URL

const ProcessPage = () => {
  const { data, status, error } = useFetch(baseUrl + '/processes')
  const [open, toggle] = useToggle(false)
  const [openSettings, toggleSettings] = useToggle(false)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    toggle()
  };

  if (error) {
    return <div>
      <>
        Error: {error}</>
    </div>
  }

  if (status === 'loading') {
    return <Skeleton variant="rectangular" width={1350} height={770} />
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
        />
      ))
      }
    </Box>
  )
}

export default ProcessPage