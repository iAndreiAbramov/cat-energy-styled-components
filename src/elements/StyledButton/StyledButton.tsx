import {
    BgColor,
    BreakPoint,
    ButtonColorType,
    ButtonTextColor,
    FontFamily,
    FontWeight,
} from 'constants/style-variables';
import styled, { css } from 'styled-components';

export interface IButtonProps {
    width?: string;
    height?: string;
    colorType?: ButtonColorType;
}

export const StyledButton = styled.button<IButtonProps>`
    display: block;

    width: ${({ width }) => width || '100%'};
    height: ${({ height }) => height || '100%'};
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
            case ButtonColorType.Gray:
                return css`
                    background-color: ${BgColor.BasicGray};
                    color: ${ButtonTextColor.SpecialDarkGray};

                    &:hover {
                        background-color: ${BgColor.BasicGrayHovered};
                    }

                    &:active {
                        background-color: ${BgColor.BasicGrayPressed};
                        opacity: 0.3;
                    }
                `;
            default:
                return css`
                    background-color: ${BgColor.BasicGreen};
                    color: ${ButtonTextColor.BasicWhite};

                    &:hover {
                        background-color: ${BgColor.BasicGreenHovered};
                    }

                    &:active {
                        background-color: ${BgColor.BasicGreenPressed};
                        opacity: 0.3;
                    }
                `;
        }
    }}
`;
