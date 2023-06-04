import React from 'react';
import { styled } from '@mui/material/styles';

const Image = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: 'center',
});

const ImageContainerStyle = styled('div')({
  width: '100%',
  height: '100%',
});

interface ImageContainerProps {
  src: string;
  alt: string;
}

const ImageContainer: React.FC<ImageContainerProps> = ({ src, alt }) => {
  return (
    <ImageContainerStyle>
      <Image src={src} alt={alt} />
    </ImageContainerStyle>
  );
};

export default ImageContainer;