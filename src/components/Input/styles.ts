import styled, { css } from 'styled-components';

interface IContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<IContainerProps>`
  ${({ theme, isFocused, isFilled }) => css`
    display: flex;
    flex: 1;
    align-items: center;

    background: ${theme.colors.write};
    border: 2px solid ${theme.colors.write};
    border-radius: 8px;
    padding: 18px 24px;
    width: 100%;
    font-size: 16px;
    color: ${theme.colors.inputs};

    & + div {
      margin-top: 24px;
    }

    h1 {
      margin-bottom: 40px;
      font-weight: 600;
      font-size: 36px;
      line-height: 36px;
    }

    ${isFocused &&
    css`
      color: ${theme.colors.focus};
      border-color: ${theme.colors.focus};
    `}

    ${isFilled &&
    css`
      color: ${theme.colors.focus};
    `}

  input {
      flex: 1;
      background: transparent;
      border: 0;
      color: ${theme.colors.inputs};

      &::placeholder {
        color: ${theme.colors.inputs};
      }
    }

    svg {
      margin-right: 16px;
    }
  `}
`;
