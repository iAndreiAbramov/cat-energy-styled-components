import { Border, BorderColor, BreakPoint, FontFamily } from 'constants/style-variables';
import styled, { css } from 'styled-components';

import { IInputProps } from './StyledInput.types';

export const StyledInput = styled.input<IInputProps>`
    display: block;

    width: ${({ width }) => width || '100%'};
    box-sizing: border-box;
    padding: 10px 18px;
    max-width: 100%;

    font-family: ${FontFamily.Oswald};
    font-size: 20px;
    text-transform: uppercase;

    appearance: none;
    height: 52px;
    border: ${({ isIncorrect }) => (isIncorrect ? Border.InputIncorrect : Border.InputRegular)};

    &:focus {
        outline: ${({ isIncorrect }) =>
            isIncorrect ? Border.InputIncorrect : Border.InputFocused};
        border-radius: 0;
        border-color: ${({ isIncorrect }) =>
            isIncorrect ? BorderColor.InputIncorrect : BorderColor.InputFocused};
    }

    ${({ type, isIncorrect }) => {
        switch (type) {
            case 'email':
                return css`
                    background-image: url(${isIncorrect
                        ? '/icons/email-red.svg'
                        : '/icons/email.svg'});
                    background-repeat: no-repeat;
                    background-position: right 20px top 50%;

                    &:focus {
                        background-image: url(${isIncorrect
                            ? '/icons/email-red.svg'
                            : '/icons/email-green.svg'});
                    }
                `;
            default: {
                return css``;
            }
        }
    }};

    @media (max-width: ${BreakPoint.Tablet}) {
        height: 40px;
        font-size: 16px;
    }
`;
