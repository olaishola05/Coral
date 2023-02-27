import React from 'react'
import Box from '@mui/material/Box'
import HeaderText from '../../Components/UI/HeaderText'
import { processList } from '../../utils/utils'
import CustomCard from '../../Components/UI/Card'
import useToggle from '../../hooks/useToggle'
import CustomModal from '../../Components/UI/Modal/CustomModal'
import { Typography } from '@mui/material'
import CustomButton from '../../Components/UI/CustomButton'
import TextInput from '../../Components/UI/TextInput'

const styles = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

const Processes = () => {
  const [open, toggle] = useToggle(false)
  return (

    <Box sx={{ width: '100%', height: '90vh', backgroundColor: '#F5F5F5', padding: '30px 10px 24px 24px' }}>
      <CustomModal open={open} onClose={toggle} sx={styles}>
        <Box>
          <Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant='h4' sx={{ fontWeight: '700', fontSize: '24px', lineHeight: '29px' }}>Create a new process</Typography>
              <CustomButton
                variant='text'
                onClick={toggle}
                btnStyles={{ color: '#464356', fontSize: '24px', lineHeight: '29px', }}
              >
                X
              </CustomButton>
            </Box>
            <Box>
              <TextInput
                label='Process name'
                name='processName'
                value='processName'
                placeholder='Enter process name'
                onChange={() => { }}
                required
                size='small'
                color='primary'
              />

              <TextInput
                label='Color'
                name='color'
                value='color'
                placeholder='Enter color'
                onChange={() => { }}
                required
                size='small'
                color='primary'
              />
            </Box>
          </Box>
        </Box>
      </CustomModal>
      <HeaderText
        header='Welcome, Fabrizio Nillo'
        text='Work with your team mates, take track of your process and close all tasks'
        customStyles={{ fontSize: '36px', color: '#464356', fontWeight: '700', lineHeight: '45px' }}
      />

      <Box sx={{ width: '95%', display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
        {processList.map((item, index) => (
          <Box key={index} sx={{}}>
            <CustomCard item={item} toggle={toggle} />
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default Processes