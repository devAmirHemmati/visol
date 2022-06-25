import NextImage, { ImageProps } from 'next/image';
import { FC } from 'react';

const Image: FC<ImageProps> = ({ ...props }) => {
  return <NextImage draggable="false" {...props} />;
};

export default Image;
