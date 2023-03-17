import React from 'react'
import Box from '@mui/material/Box';
import MiniHeader from './MiniHeader';
import TextInput from './TextInput';
import Label from './Label';
import { ReactComponent as DoubleArrowIcon } from '../../Assets/svg/doubleArrow.svg';
import { ReactComponent as StartIcon } from '../../Assets/svg/start.svg';
import CustomAccordion from './CustomAccordion';


interface Props {
  dialogueItems: any
}

const AccordionSummaryStyles = {
  display: 'flex', alignItems: 'center', gap: '8px'
}

const accordionChildrenStyles = {
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  alignItems: 'flex-start',
  padding: '0px 0px 0px 16px',
}

const DialogueRight = ({ dialogueItems }: Props) => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={{ ...dialogueItems, width: '590px', gap: '24px', mr: '8px' }}>
      <MiniHeader
        text='Fields’ Phase'
        textStyle={{ color: '#464356', fontSize: '18px', lineHeight: '27px', fontWeight: '700' }}
      />

      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '16px', }}>
        <CustomAccordion
          expanded={expanded === 'panel1'}
          onChange={handleChange('panel1')}
          summaryStyles={{ mb: '16px' }}
          summaryChildren={
            <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Box sx={{ ...AccordionSummaryStyles }}>
                <DoubleArrowIcon />
                <MiniHeader text='Phase 1' />
              </Box>
              <Label text='Ready' backgroundColor='primary.main' />
            </Box>
          }

        >

          <Box sx={{ ...accordionChildrenStyles }}>
            <TextInput
              placeholder='NSU37292NSDJS'
              value=''
              onChange={() => { }}
              InputStyles={{ width: '100%' }}
              required
              label='Contract number'
              color='secondary'
              size='small'
            />

            <TextInput
              placeholder='NSU37292NSDJS'
              value=''
              onChange={() => { }}
              InputStyles={{ width: '100%' }}
              required
              label='Contract number 2'
              color='secondary'
              size='small'
            />
          </Box>
        </CustomAccordion>
      </Box>

      <CustomAccordion
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
        summaryStyles={{ mb: '16px' }}
        summaryChildren={
          <Box sx={{ ...AccordionSummaryStyles }}>
            <DoubleArrowIcon />
            <MiniHeader text='New Contract' />
          </Box>
        }
      >
        <Box sx={{ ...accordionChildrenStyles }}>
          <TextInput
            placeholder='07/10/21'
            value=''
            onChange={() => { }}
            InputStyles={{ width: '100%' }}
            required
            label='Start date'
            color='secondary'
            size='small'
          />
        </Box>
      </CustomAccordion>

      <CustomAccordion
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
        summaryStyles={{ mb: '16px' }}
        summaryChildren={
          <Box sx={{ ...AccordionSummaryStyles }}>
            <StartIcon />
            <MiniHeader text='Start' />
          </Box>
        }
      >
      </CustomAccordion>
    </Box>
  )
}

export default DialogueRight