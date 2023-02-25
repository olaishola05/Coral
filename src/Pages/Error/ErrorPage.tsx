import React from 'react';
import Box from '@mui/material/Box';
import Error404 from '../../Assets/svg/404.svg';
import Typography from '@mui/material/Typography';
import CustomButton from '../../Components/UI/CustomButton';
import { useNavigation } from '../../hooks/useNavigation';

export default function ErrorPage() {
  const navigate = useNavigation()
  return (
    <Box sx={{ width: '607px', height: '318px', position: 'absolute', left: '397px', top: '150px' }}>
      <img src={Error404} alt={Error404} />
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '30px' }}>
        <Typography variant="h1" sx={{ fontSize: '24px', lineHeight: '36px', color: '#312E43', fontWeight: '700', marginTop: '40px' }}>
          Page not found
        </Typography>

        <Typography variant="body1" sx={{ fontSize: '14px', lineHeight: '18px', color: '#5A5869', fontWeight: '400', textAlign: 'center' }}>
          The page you are trying to reach is not available. It may have been deleted or its URL was misspelled.
        </Typography>

        <CustomButton
          type='button'
          variant='contained'
          color='secondary'
          onClick={() => navigate('/')}
          btnStyles={{ width: '90px', padding: '0px 12px;' }}
        >
          Go back
        </CustomButton>

      </Box>
    </Box>
  );
}