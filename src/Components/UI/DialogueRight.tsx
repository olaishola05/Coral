import React from 'react'
import Box from '@mui/material/Box';
import MiniHeader from './MiniHeader';
import TextInput from './TextInput';
import Label from './Label';
import { ReactComponent as DoubleArrowIcon } from '../../Assets/svg/doubleArrow.svg';
import { ReactComponent as StartIcon } from '../../Assets/svg/start.svg';
import CustomAccordion from './CustomAccordion';
import useToggle from '../../hooks/useToggle';

interface Props {
  dialogueItems: any
}

const DialogueRight = ({ dialogueItems }: Props) => {
  const [expanded, toggle] = useToggle(false)

  return (
    <Box sx={{ ...dialogueItems, width: '590px', gap: '24px' }}>
      <MiniHeader
        text='Fields’ Phase'
        textStyle={{ color: '#464356', fontSize: '18px', lineHeight: '27px', fontWeight: '700' }}
      />

      <Box sx={{ display: 'flex', gap: '24px', width: '100%' }}>
        <CustomAccordion
          expanded={expanded}
          onChange={toggle}
          summaryChildren={
            <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'space-between' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <DoubleArrowIcon />
                <MiniHeader text='Phase 1' />
              </Box>
              <Label text='Ready' backgroundColor='primary.main' />
            </Box>
          }

        >
          <Box sx={{ display: 'flex', gap: '24px', width: '100%' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
              <TextInput
                placeholder='Phase Name'
                value=''
                onChange={() => { }}
                InputStyles={{ width: '100%' }}
                required
                label='Phase Name'
              />

              <TextInput
                placeholder='Phase Name'
                value=''
                onChange={() => { }}
                InputStyles={{ width: '100%' }}
                required
                label='Phase Name'
              />
            </Box>
          </Box>
        </CustomAccordion>
      </Box>

      <CustomAccordion
        expanded={expanded}
        onChange={toggle}
        summaryChildren={
          <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <DoubleArrowIcon />
              <MiniHeader text='New Contract' />
            </Box>
          </Box>
        }
      >
        <Box sx={{ display: 'flex', gap: '24px', width: '100%' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
            <TextInput
              placeholder='Phase Name'
              value=''
              onChange={() => { }}
              InputStyles={{ width: '100%' }}
              required
              label='Phase Name'
            />
          </Box>
        </Box>
      </CustomAccordion>

      <CustomAccordion
        expanded={expanded}
        onChange={toggle}
        summaryChildren={
          <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <StartIcon />
              <MiniHeader text='Start' />
            </Box>
          </Box>
        }
      >
      </CustomAccordion>
    </Box>
  )
}

export default DialogueRight