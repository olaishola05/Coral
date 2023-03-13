import React from 'react'
import { styled } from '@mui/material/styles'
import { Box } from '@mui/system'
import TextInput from './TextInput'
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, useTheme } from '@mui/material'
import CustomAccordion from './CustomAccordion'
import { ReactComponent as BagIcon } from '../../Assets/svg/bag.svg'
import MiniHeader from './MiniHeader'
import { StyledButton } from '../../styles'

const StyledContainer = styled(Box)(() => ({
  width: 400,
  height: 700,
  position: 'absolute',
  left: '-310%',
  right: 0,
  top: '126%',
  backgroundColor: 'white',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '24px',
  padding: '24px 0px',
  border: '1px solid #D6D5D9'
}))

const StyledContainerContents = styled(Box)(() => ({
  width: '333px',
  height: '700px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0px 24px',
  backgroundColor: 'white',
}))

const StyledContainerTop = styled(Box)(() => ({
  width: '333px',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '3px 0px',
  gap: '24px',
  overflowY: 'scroll',
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

const StyledAccordion = styled(Box)<{ height?: 'string' | number }>(({ height }) => ({
  width: '333px',
  height: height,
  display: 'flex',
  alignItems: 'flex-start',
}))

const StyledAccordionDetails = styled(Box)(() => ({
  width: '100%',
  display: 'flex', alignItems: 'flex-start', gap: '16px', mb: '0px'
}))

const StyledAccordionChildren = styled(Box)(() => ({
  width: '100%',
  // height: '174px',
  display: 'flex',
  alignItems: 'flex-start',
  gap: '18px',
  flexDirection: 'column',
}))

const StyledButtonContainer = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  gap: '16px',
  padding: '0px 24px',
}))



const AddDrawer = ({ onClose, ...props }: { open: boolean, onClose: () => void }) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [selectedValue, setSelectedValue] = React.useState('');
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const listsOptions = [
    '1 Anno',
    '2 Anni',
  ]
  const [formData, setFormData] = React.useState({
    contractNumber: '',
    customerNumber: '',
    email: '',
    contractType: '',
    phoneProvider: '',
    product: {
      email: '',
      type: '',
      discount: '',
    }
  })

  const handleExpandClick = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }


  const handleListItemClick = (index: number) => {
    setSelectedIndex(index);
  };

  const handleSelectChange = (event: SelectChangeEvent<typeof selectedValue>) => {
    const {
      target: { value },
    } = event;

    setSelectedValue(typeof value === 'string' ? value : value,);
  };

  const { contractNumber, customerNumber, email, phoneProvider, product } = formData
  const { email: productEmail, type, discount } = product
  const theme = useTheme()
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
            <InputLabel id="1Anon">1 Anno</InputLabel>
            <StyledSelect
              labelId="1 Anno"
              value={''}
              // onChange={handleSelectChange}
              label="1 Anno"
              size='small'
              color='secondary'
              id='1Anno'
              name='1Anno'
            >
              {listsOptions.map((item, index) => (
                <StyledMenuItems key={index} value={item}
                  onClick={() => handleListItemClick(index)}
                >
                  {item}
                </StyledMenuItems>
              ))
              }
            </StyledSelect>
          </FormControl>
          <StyledContainerInput
            label="Phone provider"
            placeholder="Barbara Tremi"
            value={phoneProvider}
            onChange={handleInputChange}
            name="phoneProvider"
            required
            size='small'
            color='secondary'
          />
          <StyledAccordion
            height={24}
          >
            <CustomAccordion
              expanded={expanded === 'panel1'}
              onChange={handleExpandClick('panel1')}
              background='white'
              summaryChildren={
                <StyledAccordionDetails>
                  <BagIcon />
                  <MiniHeader text='TIM' />
                </StyledAccordionDetails>
              }
            >
            </CustomAccordion>
          </StyledAccordion>
          <StyledAccordion
            height={expanded === 'panel2' ? 222 : 24}
          >
            <CustomAccordion
              expanded={expanded === 'panel2'}
              onChange={handleExpandClick('panel2')}
              background='white'
              summaryChildren={
                <StyledAccordionDetails>
                  <BagIcon />
                  <MiniHeader text='Disney Plus' />
                </StyledAccordionDetails>
              }
            >
              <StyledAccordionChildren>
                <StyledContainerInput
                  label="Email"
                  placeholder="test@enelgas.it"
                  value={productEmail}
                  onChange={handleInputChange}
                  name="productEmail"
                  required
                  size='small'
                  color='secondary'
                />
                <StyledContainerInput
                  label="Customer type"
                  placeholder="Mensile"
                  value={type}
                  onChange={handleInputChange}
                  name="type"
                  required
                  size='small'
                  color='secondary'
                />
                <StyledContainerInput
                  label="Discount"
                  placeholder="50%"
                  value={discount}
                  onChange={handleInputChange}
                  name="discount"
                  required
                  size='small'
                  color='secondary'
                />
              </StyledAccordionChildren>
            </CustomAccordion>
          </StyledAccordion>
        </StyledContainerTop>

      </StyledContainerContents>
      <StyledButtonContainer>
        <StyledButton
          variant="text"
          color="secondary"
          size='small'
          onClick={onClose}
          sx={{ width: '77px', height: '40px', border: `1px solid ${theme.palette.secondary.main}` }}
        >
          Annulla
        </StyledButton>

        <StyledButton
          variant="contained"
          color="success"
          size='small'
          onClick={onClose}
          sx={{ width: '62px', height: '40px' }}
        >
          Salva
        </StyledButton>
      </StyledButtonContainer>
    </StyledContainer >
  )
}

export default AddDrawer