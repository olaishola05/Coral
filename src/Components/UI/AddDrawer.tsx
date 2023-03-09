import React from 'react'
import { styled } from '@mui/material/styles'
import { Box } from '@mui/system'
import TextInput from './TextInput'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'

const StyledContainer = styled(Box)(() => ({
  width: 400,
  height: 600,
  position: 'absolute',
  left: '-310%',
  right: 0,
  top: '126%',
  backgroundColor: 'white',
  border: '1px solid red',
}))

const StyledContainerContents = styled(Box)(() => ({
  width: '333px',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0px 24px',
  backgroundColor: 'white',
  gap: '24px',
  margin: '0px auto',
}))

const StyledContainerTop = styled(Box)(() => ({
  width: '333px',
  height: '306px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '3px 0px',
  gap: '24px',
}))

const StyledContainerInput = styled(TextInput)(({ color, size }) => ({
  width: '333px',
  color: color || 'primary',
  size: size,
}))

const StyledSelect = styled(Select)(() => ({
  width: '333px',
  height: '42px',
  padding: '0px 16px',
  display: 'flex',
  alignItems: 'flex-start',
}))

const StyledMenuItems = styled(MenuItem)(() => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontSize: '16px',
  gap: '8px',
  padding: '10px',
  color: 'theme.palette.secondary.main',
  '& .Mui-selected': {
    backgroundColor: 'theme.palette.secondary.main',
    color: 'white',
  },
}))




const AddDrawer = ({ onClose, ...props }: { open: boolean, onClose: () => void }) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [selectedValue, setSelectedValue] = React.useState('');
  const listsOptions = [
    '1 Anno',
    '2 Anni',
  ]
  const [formData, setFormData] = React.useState({
    contractNumber: '',
    customerNumber: '',
    email: '',
    contractType: '',
  })

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }


  const handleListItemClick = (index: number) => {
    setSelectedIndex(index);
  };

  const handleSelectChange = (event: any) => {
    setSelectedValue(event.target.value)
    // setFormData({ ...formData, contractType: selectedValue })
  }

  const { contractNumber, customerNumber, email } = formData
  console.log(formData)
  return (
    <StyledContainer
      onClick={onClose}
      {...props}
    >
      <StyledContainerContents>
        <StyledContainerTop>
          <StyledContainerInput
            label="Contract numbers"
            placeholder="G82373289AS"
            value={contractNumber}
            onChange={handleInputChange}
            name="contractNumber"
            required
            size='small'
            color='secondary'
          />

          <StyledContainerInput
            label="Customer number"
            placeholder="1239212139"
            value={customerNumber}
            onChange={handleInputChange}
            name="customerNumber"
            required
            size='small'
            color='secondary'
          />
          <StyledContainerInput
            label="Email"
            placeholder="test@enelgas.it"
            value={email}
            onChange={handleInputChange}
            name="email"
            required
            size='small'
            color='secondary'
            type='email'
          />

          <FormControl>
            <InputLabel id="1Anon">Contract type</InputLabel>
            <StyledSelect
              labelId="1 Anno"
              // placeholder="Inserisci il nome"
              value={selectedValue}
              onChange={handleSelectChange}
              label="Contract type"
              size='small'
              color='secondary'
              name="contractType"
            >
              <Box>
                {listsOptions.map((item, index) => (
                  <StyledMenuItems key={index} value={item}
                    onClick={() => handleListItemClick(index)}
                  >
                    {item}
                  </StyledMenuItems>
                ))
                }
              </Box>
            </StyledSelect>
          </FormControl>
        </StyledContainerTop>
      </StyledContainerContents>
    </StyledContainer >
  )
}

export default AddDrawer