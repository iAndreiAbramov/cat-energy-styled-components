import { Border, BreakPoint, FontFamily, FontWeight } from 'constants/style-variables';
import styled from 'styled-components';

interface IStyledRadioLabel {
    isDisabled?: boolean;
}

export const StyledRadioLabel = styled.label<IStyledRadioLabel>`
    display: flex;
    align-items: center;
    gap: 20px;

    font-family: ${FontFamily.Oswald};
    font-size: 20px;
    font-weight: ${FontWeight.Regular};
    text-transform: uppercase;

    opacity: ${({ isDisabled }) => (isDisabled ? 0.3 : 1)};

    @media (max-width: ${BreakPoint.MobileTop}) {
        font-size: 16px;
    }
`;

export const StyledRadioHidden = styled.input.attrs({ type: 'radio' })`
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    border: 0 none;
    clip-path: inset(100%);
`;

export const StyledRadioVisible = styled.div`
    box-sizing: border-box;
    width: 40px;
    height: 40px;

    border: ${Border.InputRegular};
    border-radius: 50%;

    ${StyledRadioHidden}:checked + & {
        background-image: url('/icons/radio-active.svg');
        background-repeat: no-repeat;
        background-position: center center;
    }
`;
