import React from 'react'
import Box from '@mui/material/Box'
import HeaderText from '../../Components/UI/HeaderText'
import { generateRandomNumber, processList } from '../../utils/utils'
import CustomCard from '../../Components/UI/Card'
import useToggle from '../../hooks/useToggle'
import ProcessModal from '../../Components/UI/Modal/ProcessModal'
import ProcessIcon from '../../Assets/svg/process.svg'


const Processes = () => {
  const [open, toggle] = useToggle(false)
  const [process, setProcess] = React.useState({
    id: generateRandomNumber(),
    name: '',
    background: '',
    icon: ProcessIcon,
  })

  const [processes, setProcesses] = React.useState(processList)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProcess({ ...process, [e.target.name]: e.target.value })
  }

  const handleCreate = () => {
    setProcesses((prev) => [...prev, process])
  }

  return (

    <Box sx={{ width: '100%', height: '90vh', backgroundColor: '#F5F5F5', padding: '30px 10px 24px 24px' }}>
      <ProcessModal open={open} toggle={toggle} onChange={handleChange} submit={handleCreate} />
      <HeaderText
        header='Welcome, Fabrizio Nillo'
        text='Work with your team mates, take track of your process and close all tasks'
        customStyles={{ fontSize: '36px', color: '#464356', fontWeight: '700', lineHeight: '45px' }}
      />

      <Box sx={{ width: '95%', display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
        {processes.map((item, index) => (
          <Box key={index}>
            <CustomCard item={item} toggle={toggle} />
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default Processes