import React from 'react';

import { FiPlusSquare } from 'react-icons/fi';
import { Container, Button } from './styles';
import ToggleButton from '../ToggleButton';

import { useTheme } from '../../context/theme';

import Logo from '../../assets/logo.svg';

interface IHeaderProps {
  openModal: () => void;
}

const Header: React.FC<IHeaderProps> = ({ openModal }) => {
  const { toggleTheme } = useTheme();

  return (
    <Container>
      <header>
        <img src={Logo} alt="GoRestaurant" />
        <nav>
          <div>
            <ToggleButton onClick={toggleTheme}>Trocar</ToggleButton>
            <Button
              type="button"
              onClick={() => {
                openModal();
              }}
            >
              <div className="text">Novo Prato</div>
              <div className="icon">
                <FiPlusSquare size={24} />
              </div>
            </Button>
          </div>
        </nav>
      </header>
    </Container>
  );
};

export default Header;
