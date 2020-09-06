import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

interface TextProps {
  focused: number;
}

export const Container = styled.TouchableWithoutFeedback``;

export const Gradiente = styled(LinearGradient)`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.Text<TextProps>`
  color: ${props => (props.focused ? '#000' : '#fff')};
  font-size: 12px;
`;
