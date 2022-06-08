import { BreakPoint } from 'constants/style-variables';
import styled, { css } from 'styled-components';

import { ButtonBgColor, ButtonTextColor, ColorType, IButtonProps } from './Button.types';

export const Button = styled.button<IButtonProps>`
    width: ${({ width }) => width || '100%'};
    height: ${({ height }) => height || '40px'};

    box-sizing: border-box;
    text-transform: uppercase;
    font-style: normal;
    font-size: 16px;
    text-align: center;

    @media (min-width: ${BreakPoint.Desktop}) {
        font-size: 20px;
    }

    appearance: none;
    border: none;
    cursor: pointer;

    ${(props) => {
        switch (props.colorType) {
            case ColorType.Gray:
                return css`
                    background-color: ${ButtonBgColor.BasicGray};
                    color: ${ButtonTextColor.SpecialDarkGray};

                    &:hover {
                        background-color: ${ButtonBgColor.BasicGrayHovered};
                    }

                    &:active {
                        background-color: ${ButtonBgColor.BasicGrayPressed};
                        opacity: 0.3;
                    }
                `;
            default:
                return css`
                    background-color: ${ButtonBgColor.BasicGreen};
                    color: ${ButtonTextColor.BasicWhite};

                    &:hover {
                        background-color: ${ButtonBgColor.BasicGreenHovered};
                    }

                    &:active {
                        background-color: ${ButtonBgColor.BasicGreenPressed};
                        opacity: 0.3;
                    }
                `;
        }
    }}
`;
