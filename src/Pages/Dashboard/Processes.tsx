import React from 'react'
import Box from '@mui/material/Box'
import HeaderText from '../../Components/UI/HeaderText'
import { generateRandomNumber, processList } from '../../utils/utils'
import CustomCard from '../../Components/UI/Card'
import { useToggle } from '../../hooks'
import { ProcessModal } from '../../Components/UI/Modal'
import ProcessIcon from '../../Assets/svg/process.svg'
import { Dashboard } from '../Dashboard'
import { styled } from '@mui/material'


const StyledProcessBox = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '90vh',
  backgroundColor: '#F5F5F5',
  padding: '30px 10px 24px 24px',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    height: 'auto',
    padding: '30px 10px 24px 10px',
    border: '1px solid red',

  },
}))

const StyledCardBox = styled(Box)(({ theme }) => ({
  width: '95%', 
  display: 'flex', 
  alignItems: 'center', 
  gap: '24px', 
  flexWrap: 'wrap',

  [theme.breakpoints.down('sm')]: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
}))

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
    <Dashboard>
      <StyledProcessBox>
        <ProcessModal open={open} toggle={toggle} onChange={handleChange} submit={handleCreate} />
        <HeaderText
          header='Welcome, Fabrizio Nillo'
          text='Work with your team mates, take track of your process and close all tasks'
          customStyles={{ fontSize: '36px', color: '#464356', fontWeight: '700', lineHeight: '45px' }}
        />

        <StyledCardBox>
          {processes.map((item, index) => (
            <Box key={index}>
              <CustomCard item={item} toggle={toggle} />
            </Box>
          ))}
        </StyledCardBox>
      </StyledProcessBox>
    </Dashboard>
  )
}

export default Processes