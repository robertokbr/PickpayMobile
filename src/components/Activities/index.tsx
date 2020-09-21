import React from 'react';
import { Feather, MaterialCommunityIcons, AntDesign } from 'expo-vector-icons';
import avatar from '../../assets/avatar.png';
import * as S from './styles';

const Activities: React.FC = () => {
  return (
    <S.Container>
      <S.Header>
        <S.Title>Atividades</S.Title>
      </S.Header>
      <S.Card>
        <S.CardHeader>
          <S.Avatar source={avatar} />
          <S.Description>
            <S.Bold>Você </S.Bold>
            pagou a<S.Bold> @robertokbr</S.Bold>
          </S.Description>
        </S.CardHeader>
        <S.CardBody>
          <S.UserName>Robertokbr</S.UserName>
        </S.CardBody>
        <S.CardFooter>
          <S.Details>
            <S.Values>125k</S.Values>
            <S.Divider />
            <Feather name="lock" color="#fff" size={14} />
            <S.Date>Há 2 anos</S.Date>
          </S.Details>
          <S.Actions>
            <S.Options>
              <MaterialCommunityIcons
                name="comment-outline"
                size={14}
                color="#fff"
              />
              <S.OptionsLabel>0</S.OptionsLabel>
            </S.Options>
            <S.Options>
              <AntDesign name="hearto" size={14} color="#fff" />
              <S.OptionsLabel>0</S.OptionsLabel>
            </S.Options>
          </S.Actions>
        </S.CardFooter>
      </S.Card>
    </S.Container>
  );
};

export default Activities;
