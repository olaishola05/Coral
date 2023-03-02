import React from 'react'
import CustomModal from './CustomModal'
import { Typography } from '@mui/material'
import CustomButton from '../CustomButton'
import TextInput from '../TextInput'
import Box from '@mui/material/Box'
import { generateRandomNumber } from '../../../utils/utils'
import InputAdornment from '@mui/material/InputAdornment';
import { ReactComponent as PalleteIcon } from '../../../Assets/svg/pallete.svg'
import IconButton from '@mui/material/IconButton';


const styles = {
  top: '50%',
  left: '50%',
  width: 603,
}

interface Props {
  open: boolean
  toggle: () => void
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  submit?: () => void
}

interface Process {
  id: string
  name: string
  background: string
  icon?: string
}

const ProcessModal = ({ open, toggle, onChange, submit }: Props) => {
  const [processName, setProcessName] = React.useState<Process>({
    id: generateRandomNumber(),
    name: '',
    background: '',
    icon: '',
  })

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProcessName({
      ...processName,
      [e.target.name]: e.target.value
    })
    onChange && onChange(e)
  }

  const handleCancel = () => {
    setProcessName({ id: '', name: '', background: '', icon: '' })
    toggle()
  }

  const handleCreate = () => {
    submit && submit()
    setProcessName({ id: '', name: '', background: '', icon: '' })
    toggle()
  }

  return (
    <CustomModal open={open} onClose={toggle} sx={styles}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography
            variant='h4'
            sx={{ fontWeight: '700', fontSize: '20px', lineHeight: '36px', color: '#464356' }}>Create a new process
          </Typography>
          <CustomButton
            variant='text'
            onClick={toggle}
            btnStyles={{ width: '0px', color: '#9897A1', fontSize: '18px', }}
          >
            X
          </CustomButton>
        </Box>
        <Box component='form' sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column' as 'column',
          gap: '24px',
        }}
        >
          <TextInput
            label='Process name'
            name='name'
            value={processName.name}
            placeholder='Enter process name'
            onChange={(event) => onChangeHandler(event)}
            required
            size='small'
            color='secondary'
          />

          <TextInput
            label='Color'
            name='background'
            value={processName.background}
            placeholder='Enter color'
            onChange={(event) => onChangeHandler(event)}
            required
            size='small'
            color='secondary'
            InputProps={{
              startAdornment: <InputAdornment position="start" >
                <IconButton
                  sx={{ backgroundColor: processName.background }}
                >
                  <Box sx={{ width: '10px', height: '10px', borderRadius: '50%' }} />
                </IconButton>
              </InputAdornment>,
              endAdornment: <InputAdornment position="end" >
                <PalleteIcon />
              </InputAdornment>,
            }}
          />

          <Box sx={{ width: '150px', display: 'flex', gap: '16px', marginLeft: 'auto' }}>
            <CustomButton
              variant='outlined'
              onClick={handleCancel}
              color='secondary'
              btnStyles={{ width: '77px', color: 'secondary', fontSize: '14px', lineHeight: '18px', }}
            >
              Annulla
            </CustomButton>
            <CustomButton
              variant='contained'
              onClick={handleCreate}
              color='success'
              type='submit'
              btnStyles={{ width: '57px', color: 'white', fontSize: '14px', lineHeight: '18px', }}
            >
              Crea
            </CustomButton>

          </Box>
        </Box>
      </Box>
    </CustomModal>
  )
}

export default ProcessModal