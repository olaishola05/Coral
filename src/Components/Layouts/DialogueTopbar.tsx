import React from 'react'
import Box from '@mui/material/Box';
import Typogrophy from '@mui/material/Typography';
import { ReactComponent as EyeIcon } from '../../Assets/svg/eye.svg'
import Typography from '@mui/material/Typography';
import { ReactComponent as AnchorIcon } from '../../Assets/svg/anchor.svg'
import { ReactComponent as ScanIcon } from '../../Assets/svg/scan.svg'
import { ReactComponent as LinkIcon } from '../../Assets/svg/link.svg'
import { ReactComponent as PathIcon } from '../../Assets/svg/path.svg'
import { ReactComponent as TrashIcon } from '../../Assets/svg/trash.svg'
import { ReactComponent as DividerIcon } from '../../Assets/svg/Divider.svg'

const display = {
  display: 'flex',
  alignItems: 'center',
}

const topBarStyles = {
  ...display,
  justifyContent: 'space-between',
  height: 60,
  width: '100%',
  padding: '24px 24px 0px',
}

const headerStyles = {
  ...display,
  fontWeight: 700,
  fontSize: '20px',
  lineHeight: '36px',
  color: '#464356',
  order: 1
}

const rightBarStyles = {
  display: 'flex',
  alignItems: 'center',
  order: 1,
  gap: '24px',
  width: '403px',
}

interface DialogueTopbarProps {
  toggleOpen: () => void
}


const DialogueTopbar = ({ toggleOpen }: DialogueTopbarProps) => {
  return (
    <Box sx={topBarStyles}>
      <Box>
        <Typogrophy variant="h6" sx={headerStyles}>Courtney@mail.com</Typogrophy>
      </Box>

      <Box sx={rightBarStyles}>
        <Box sx={{ ...display, gap: '8px', width: '137px' }}>
          <EyeIcon />
          <Typography variant="h6" sx={{ fontWeight: '600', fontSize: '16px', ...display, lineHeight: '24px', textDecoration: 'underline', color: 'primary.main' }}>KO Motivation </Typography>
        </Box>

        <Box sx={{ ...display, gap: '16px', width: '184px', order: 2, cursor: 'pointer', }}>
          <AnchorIcon />
          <ScanIcon />
          <LinkIcon />
          <PathIcon />
          <TrashIcon />
          <DividerIcon />
        </Box>
        <Box sx={{
          ...display, order: 3, width: '20px', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold', color: '#9897A1'
        }}
          onClick={toggleOpen}
        >
          X
        </Box>
      </Box>
    </Box>
  )
}

export default DialogueTopbar