import React from 'react'
import { styled } from '@mui/material/styles'

import { Box } from '@mui/system'

const styles = {
  width: 381,
  height: 900,
  gap: '10px',
  position: 'absolute',
  left: '72.79%',
  right: 0,
  top: 'calc(75% - 900px / 2)',
}

const StyledContainer = styled(Box)(() => ({
  width: 450,
  height: 600,
  position: 'absolute',
  left: '-330%',
  right: 0,
  top: '126%',
  // backgroundColor: 'white',
}))

const StyledHeader = styled(Box)(() => ({
  width: '100%',
  border: '1px solid red',
  // display: 'flex',
  // alignItems: 'center',
  // justifyContent: 'space-between',
  // padding: '0px 20px',
}))



const AddDrawer = ({ open, onClose }: { open: boolean, onClose: () => void }) => {
  return (
    <StyledContainer>
      <Box sx={{ width: '100%', height: '100%', border: '1px solid red' }}>
        <h1>Content</h1>
      </Box>
    </StyledContainer>
  )
}

export default AddDrawer