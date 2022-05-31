import styled from 'styled-components/native';
import { colorStyles } from '../styles';

interface ButtonProps {
    icon?: React.ReactNode;
    onPress: () => void;
}

export const GrayButton = styled.TouchableOpacity<ButtonProps>`
    color: ${(props) => (props.theme.current === 'light' ? colorStyles.Gray800 : null)};
    width: 77px;
    height: 56px;
    border-radius: 8px;
    background-color: ${colorStyles.Gray800};
`;
export const PurpleButton = styled(GrayButton)`
    color: ${(props) => (props.theme.current === 'light' ? colorStyles.Purple500 : null)};
`;
