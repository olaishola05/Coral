// create a resuable accordion component using material ui accordion

import React from 'react'
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface Props {
  children: any
  expanded: boolean
  onChange: (event: React.ChangeEvent<{}>, isExpanded: boolean) => void
  summaryChildren?: any
}

const CustomAccordion = ({ children, expanded, onChange, summaryChildren }: Props) => {
  return (
    <Box sx={{ width: '100%' }}>
      <Accordion
        expanded={expanded}
        onChange={onChange}
        sx={{ boxShadow: 'none', border: 'none', }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{ padding: '3px', backgroundColor: '#F6F8FA', display: 'flex', alignItems: 'center', gap: '10px', mb: '16px', }}
        >
          {summaryChildren}
        </AccordionSummary>
        {children}
      </Accordion>
    </Box>
  )
}

export default CustomAccordion
