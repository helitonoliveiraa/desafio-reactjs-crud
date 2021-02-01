import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.primary};
    padding: 30px 0;

    header {
      width: 1280px;
      margin: 0 auto;
      padding: 0 0 160px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      nav {
        div {
          display: flex;
        }
      }
    }
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    font-weight: 600;
    border-radius: 8px;
    border: 0;
    background: ${theme.colors.positive};
    color: ${theme.colors.write};

    display: flex;
    flex-direction: row;
    align-items: center;

    .text {
      padding: 16px 24px;
    }

    .icon {
      display: flex;
      padding: 16px 16px;
      background: ${theme.colors.positive};
      border-radius: 0 8px 8px 0;
      margin: 0 auto;
    }
  `}
`;
