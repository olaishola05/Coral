import React from 'react';
import Box from '@mui/material/Box';
import Logo from '../../Assets/svg/Logo.svg';
import { SnackbarError, SnackSuccess } from '../UI/snacks';
import { styled } from '@mui/material/styles';

interface PageLayoutSplitProps {
  leftSide: React.ReactNode;
  rightSide: React.ReactNode;
  leftClassName?: any;
  rightStyles?: any;
  error?: any;
  message?: string;
  toggle?: () => void;
  value?: boolean;
  success?: boolean;
  handleError?: () => void;
  handleSuccess?: () => void;
}

const PageLayoutSplitContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',

  [theme.breakpoints.down('md')]: {
    width: '100%',
  },

  [theme.breakpoints.down('sm')]: {
    width: '100%',
    flexDirection: 'column',
  },

  [theme.breakpoints.down('xs')]: {
    width: '100%',
    flexDirection: 'column',
  },
}));

const PageLayoutSplitLeftContainer = styled(Box)(({ theme }) => ({
  width: '520px',
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  gap: '70px',
  padding: '60px 50px',

  '& .MuiTypography-body1': {
    color: theme.palette.text.primary,
    fontSize: '15px',
  },

  [theme.breakpoints.down('sm')]: {
    width: '100%',
    gap: '30px',
    padding: '40px 5px',
  },
}));

const PageLayoutSplitRightContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100vh',

  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

function PageLayoutSplit(props: PageLayoutSplitProps): JSX.Element {
  const { leftSide, rightSide, leftClassName, rightStyles, error, message, success, value } = props;

  const handleError = () => {
    props.toggle && props.toggle();
  }

  const handleSuccess = () => {
    props.toggle && props.toggle();
  }

  return (
    <PageLayoutSplitContainer>
      <Box sx={{height: '100vh'}}>
        <PageLayoutSplitLeftContainer sx={{ ...leftClassName }}>
          <img src={Logo} alt={Logo} />
          {leftSide}
        </PageLayoutSplitLeftContainer>
        {error && <SnackbarError value={value} message={message} toggle={handleError} />}  {success && <SnackSuccess value={value} message={message} toggle={handleSuccess} />}
      </Box>
      <PageLayoutSplitRightContainer sx={{...rightStyles}}>{rightSide}</PageLayoutSplitRightContainer>
    </PageLayoutSplitContainer>
  )

}
export default PageLayoutSplit;