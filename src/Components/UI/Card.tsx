import React from 'react';
import { Card, CardContent, CardHeader, Typography, } from '@mui/material';

interface CardProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

const CustomCard: React.FC<CardProps> = ({ title, children, icon }, ...rest) => {
  return (
    <Card {...rest}>
      <CardHeader title={title} avatar={icon} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {children}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CustomCard;