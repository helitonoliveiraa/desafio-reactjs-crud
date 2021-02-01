import styled from 'styled-components';
import { FormStyle } from '../FormStyle/styles';

export const Form = styled(FormStyle)``;

export const InputWrapper = styled.aside`
  display: flex;
  align-items: center;
  margin: 2.4rem 0;
  width: 100%;

  div {
    input {
      width: 2rem;
    }
  }
`;
