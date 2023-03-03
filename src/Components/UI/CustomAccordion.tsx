// create a resuable accordion component using material ui accordion

import React from 'react'
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface Props {
  children: any
  expanded: boolean
  onChange: () => void
  summaryChildren?: any
}

const CustomAccordion = ({ children, expanded, onChange, summaryChildren }: Props) => {
  return (
    <Box sx={{ width: '100%' }}>
      <Accordion expanded={expanded} onChange={onChange}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ padding: '12px', backgroundColor: '#F6F8FA' }}
        >
          {summaryChildren}
        </AccordionSummary>
        {children}
      </Accordion>
    </Box>
  )
}

export default CustomAccordion
