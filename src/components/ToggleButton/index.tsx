import React, { ButtonHTMLAttributes } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

import { useTheme } from '../../context/theme';

import { Container } from './styles';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const ToggleButton: React.FC<IButtonProps> = () => {
  const { toggleTheme, currenTheme } = useTheme();

  return (
    <Container onClick={toggleTheme}>
      {currenTheme.title === 'dark' ? (
        <FiMoon size={20} color={currenTheme.colors.texts} />
      ) : (
        <FiSun size={20} color={currenTheme.colors.secondary} />
      )}
    </Container>
  );
};

export default ToggleButton;
