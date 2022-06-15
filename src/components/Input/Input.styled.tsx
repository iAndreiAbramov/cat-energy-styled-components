import { Border, BorderColor, BreakPoint, FontFamily, FontWeight } from 'constants/style-variables';
import styled, { css } from 'styled-components';

interface IInputStyled {
    isIncorrect?: boolean;
    type: 'text' | 'email' | 'tel';
}

export const StyledInputLabel = styled.label`
    display: flex;
    align-items: center;
    gap: 20px;

    font-family: ${FontFamily.Oswald};
    font-weight: ${FontWeight.Regular};
    font-size: 20px;
    text-transform: uppercase;

    & span {
        word-break: keep-all;
        white-space: nowrap;
    }

    @media (max-width: ${BreakPoint.MobileTop}) {
        font-size: 16px;
    }
`;

export const StyledInput = styled.input<IInputStyled>`
    display: block;

    width: ${({ width }) => width || '100%'};
    box-sizing: border-box;
    padding: 10px 18px;
    max-width: 100%;

    font-family: ${FontFamily.Oswald};
    font-weight: ${FontWeight.Regular};
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
                        ? '/img/icons/email-red.svg'
                        : '/img/icons/email.svg'});
                    background-repeat: no-repeat;
                    background-position: right 20px top 50%;

                    &:focus {
                        background-image: url(${isIncorrect
                            ? '/img/icons/email-red.svg'
                            : '/img/icons/email-green.svg'});
                    }
                `;
            case 'tel':
                return css`
                    background-image: url(${isIncorrect
                        ? '/img/icons/phone-red.svg'
                        : '/img/icons/phone.svg'});
                    background-repeat: no-repeat;
                    background-position: right 20px top 50%;
                `;
            default: {
                return css``;
            }
        }
    }};

    @media (max-width: ${BreakPoint.MobileTop}) {
        height: 40px;
        font-size: 16px;
    }
`;
