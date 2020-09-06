import React from 'react';
import { MaterialIcons } from 'expo-vector-icons';
import { Container, Gradiente, Title } from './styles';

interface TouchbleProps {
  onPress: () => void;
  focused: boolean;
}

const PayButton: React.FC<TouchbleProps> = ({ onPress, focused }) => {
  return (
    <Container onPress={onPress}>
      <Gradiente
        colors={focused ? [`#fff`, `#ccc`] : [`#00fc6c`, `#00ac4a`]}
        start={[1, 0.2]}
      >
        <MaterialIcons
          name="attach-money"
          size={30}
          color={focused ? '#000' : '#fff'}
        />
        <Title focused={Number(focused)}>Pagar</Title>
      </Gradiente>
    </Container>
  );
};

export default PayButton;
