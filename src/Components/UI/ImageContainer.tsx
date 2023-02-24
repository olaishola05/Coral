import React from 'react';

interface ImageContainerProps {
  src: string;
  alt: string;
}

const ImageContainer: React.FC<ImageContainerProps> = ({ src, alt }) => {
  return (
    <>
      <img src={src} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'fill', }} />
    </>
  );
};

export default ImageContainer;