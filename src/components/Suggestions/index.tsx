import React from 'react';
import { Image } from 'react-native';
import * as S from './styles';
import images from './images';

const Suggestions: React.FC = () => {
  return (
    <S.Container>
      {images.map(image => (
        <S.Options key={image.key}>
          <Image source={image.img} />
          <S.Label>{image.label}</S.Label>
        </S.Options>
      ))}
    </S.Container>
  );
};

export default Suggestions;
