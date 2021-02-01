import styled, { css } from 'styled-components';

interface IFoodPlateProps {
  available: boolean;
}

export const Container = styled.div<IFoodPlateProps>`
  ${({ theme, available }) => css`
    background: ${theme.colors.backgroundCard};
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    flex: 1;

    header {
      background: ${theme.colors.secondary};
      border-radius: 8px 8px 0px 0px;
      height: 192px;
      overflow: hidden;
      transition: 0.3s opacity;
      text-align: center;

      ${!available &&
      css`
        opacity: 0.3;
      `};

      img {
        pointer-events: none;
        user-select: none;
      }
    }

    section.body {
      padding: 30px;
      flex: 1;

      h2 {
        color: ${theme.colors.titleCard};
      }

      p {
        color: ${theme.colors.titleCard};

        margin-top: 16px;
      }

      .price {
        font-style: normal;
        font-size: 24px;
        line-height: 34px;
        color: ${theme.colors.positive};

        b {
          font-weight: 600;
        }
      }
    }

    section.footer {
      display: flex;
      justify-content: space-between;
      align-items: center;

      padding: 20px 30px;
      background: ${theme.colors.cardFaixa};
      border-radius: 0px 0px 8px 8px;

      div.icon-container {
        display: flex;

        button {
          background: ${theme.colors.cardButton};
          padding: 10px;
          border-radius: 8px;
          display: flex;
          border: none;
          transition: 0.1s;

          svg {
            color: ${theme.colors.titles};
          }

          & + button {
            margin-left: 6px;
          }
        }
      }

      div.availability-container {
        display: flex;
        align-items: center;

        p {
          color: ${theme.colors.titles};
        }

        .switch {
          position: relative;
          display: inline-block;
          width: 88px;
          height: 32px;
          margin-left: 12px;

          & input {
            opacity: 0;
            width: 0;
            height: 0;
          }

          .slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #c72828;
            -webkit-transition: 0.4s;
            transition: 0.4s;
            border-radius: 16px;

            &:before {
              position: absolute;
              content: '';
              height: 20px;
              width: 40px;
              left: 8px;
              bottom: 6px;
              background-color: white;
              -webkit-transition: 0.4s;
              transition: 0.4s;
              border-radius: 10px;
            }
          }

          input:checked + .slider {
            background-color: ${theme.colors.positive};
          }

          input:focus + .slider {
            box-shadow: 0 0 1px #2196f3;
          }

          input:checked + .slider:before {
            -webkit-transform: translateX(32px);
            -ms-transform: translateX(32px);
            transform: translateX(32px);
          }
        }
      }
    }
  `}
`;
