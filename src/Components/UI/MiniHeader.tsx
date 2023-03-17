import React from 'react'
import Typography from '@mui/material/Typography';

interface Props {
  text?: string;
  icon?: any;
  variant?: 'h6' | 'h5' | 'h4' | 'h3' | 'h2' | 'h1' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption' | 'button' | 'overline' | 'srOnly' | 'inherit';
  textStyle?: any;
}

const MiniHeader = ({ text, textStyle }: Props) => {
  return (
    <Typography variant="h6" sx={{ fontWeight: '600', fontSize: '16', lineHeight: '24px', color: '#464356', ...textStyle }}>{text}</Typography>
  )
}

export default MiniHeader