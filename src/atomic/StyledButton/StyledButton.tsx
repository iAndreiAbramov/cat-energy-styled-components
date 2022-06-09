import { BreakPoint, FontFamily, FontWeight } from 'constants/style-variables';
import styled, { css } from 'styled-components';

import { ButtonBgColor, ButtonTextColor, ColorType, IButtonProps } from './StyledButton.types';

export const StyledButton = styled.button<IButtonProps>`
    display: block;

    width: ${({ width }) => width || '100%'};
    height: ${({ height }) => height || '40px'};
    box-sizing: border-box;

    font-family: ${FontFamily.Oswald};
    font-weight: ${FontWeight.Regular};
    text-transform: uppercase;
    font-style: normal;
    font-size: 16px;
    text-align: center;

    appearance: none;
    border: none;
    cursor: pointer;

    @media (min-width: ${BreakPoint.Desktop}) {
        font-size: 20px;
    }

    @media (min-width: ${BreakPoint.Desktop}) {
        font-size: 20px;
    }

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
