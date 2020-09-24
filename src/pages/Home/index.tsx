import React from 'react';
import { MaterialCommunityIcons, AntDesign } from 'expo-vector-icons';

import * as S from './styles';
import Suggestions from '../../components/Suggestions';
import Activities from '../../components/Activities';

const Home: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Container keyboardShouldPersistTaps="handled">
        <S.Header>
          <MaterialCommunityIcons
            name="qrcode-scan"
            color="#10c86e"
            size={30}
          />
          <S.BalanceContainer>
            <S.BalanceTitle>Meu saldo</S.BalanceTitle>
            <S.Balance>R$1254k</S.Balance>
          </S.BalanceContainer>
          <AntDesign name="gift" color="#10c86e" size={30} />
        </S.Header>
        <Suggestions />
        <Activities />
      </S.Container>
    </S.Wrapper>
  );
};

export default Home;
