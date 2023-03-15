import React from 'react';
import { Card, CardContent, CardHeader, Typography, Box, CardActionArea } from '@mui/material';
import { useNavigation } from '../../hooks/useNavigation';
interface CardProps {
  item: {
    id: string;
    name: string;
    background: string;
    icon: string;
    color?: string;
    private?: {
      LockIcon: string;
      ElipsesIcon: string;
    }
  },
  toggle: () => void;
}

const CustomCard: React.FC<CardProps> = ({ item, toggle }) => {
  const { name, background, icon, color, id } = item;
  const navigate = useNavigation();

  const handleClick = (id: string) => {
    if (id === '0') {
      toggle();
    }

    else {
      navigate(`/process/${id}`);
    }

  }

  return (
    <Card
      sx={{
        display: 'flex',
        width: '150px', height: '150px',
        padding: '12px 12px 30px',
        backgroundColor: background,
        border: color ? '1px dotted #D6D5D9' : 'none',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '8px',
        order: parseInt(`${id}`),
      }}>
      <>
        {item.private && (
          <CardHeader
            action={
              <Box sx={{ width: '138px', display: 'flex', justifyContent: 'space-between', paddingRight: '5px' }}>
                <img src={item.private.LockIcon} alt={item.private.LockIcon} />
                <img src={item.private.ElipsesIcon} alt={item.private.ElipsesIcon} />
              </Box>
            }
          />
        )}
      </>
      <CardActionArea
        onClick={() => handleClick(id)}
      >
        <CardContent
          sx={{
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', gap: '10px',
          }}>
          <img src={icon} alt={icon} style={{ width: '26.67px', height: '26.67px' }} />
          <Typography variant="body2" color={color ? color : 'white'} sx={{ textAlign: 'center' }}>
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CustomCard;