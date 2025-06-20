import Image, { ImageProps } from 'next/image';
import React, { useState } from 'react';

interface ImageLoaderProps extends ImageProps {
  fallbackSrc?: string;
  styles?:object;
  onLoad?: () => void;
}

const ImageLoader: React.FC<ImageLoaderProps> = ({
  src,
  styles,
  fallbackSrc = 'https://dummyimage.com/220x220/cccccc/fff.jpg&text=IMAGE_NOT_FOUND', // Default fallback image
  alt,
  onLoad,
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);
  const handleError = () => setImgSrc(fallbackSrc);


  const handleOnLoad = () => {
    setIsLoading(false);
    if (onLoad) {
      onLoad();
    }
  };

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
      onLoad={handleOnLoad}
      style={{ opacity: isLoading ? 0.5 : 1, transition: 'opacity 0.3s ease', objectFit:'cover', ...styles }}
      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
      onError={handleError} // Set fallback image on error
    />
  );
};

export default ImageLoader;
