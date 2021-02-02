import styled, { css } from 'styled-components';
import { Form as Unform } from '@unform/web';

export const Form = styled(Unform)`
  ${({ theme }) => css`
    padding: 4.8rem 4rem;
    display: flex;
    flex-direction: column;

    h1 {
      font-weight: 600;
      font-size: 3.6rem;
      line-height: 3.6rem;
      margin-bottom: 4rem;
    }

    button {
      margin-top: 4.8rem;
      align-self: flex-end;
    }

    button {
      font-weight: 600;
      border-radius: 0.8rem;
      border: 0;
      background: ${theme.colors.positive};
      color: ${theme.colors.write};

      display: flex;
      flex-direction: row;
      align-items: center;

      .text {
        padding: 1.6rem 2.4rem;
      }

      .icon {
        display: flex;
        padding: 1.6rem 1.6rem;
        background: ${theme.colors.positive};
        border-radius: 0 0.8rem 0.8rem 0;
        margin: 0 auto;
      }
    }
  `}
`;

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
