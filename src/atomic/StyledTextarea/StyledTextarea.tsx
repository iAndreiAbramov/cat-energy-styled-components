import { Border, BreakPoint, FontFamily } from 'constants/style-variables';
import styled from 'styled-components';

export const StyledTextarea = styled.textarea`
    resize: none;
    width: 100%;
    max-width: 100%;
    height: 174px;
    padding: 10px 20px;
    box-sizing: border-box;

    font-family: ${FontFamily.Oswald};
    font-weight: 400;
    font-size: 20px;
    text-transform: uppercase;

    border: ${Border.InputRegular};

    &:focus {
        border: ${Border.InputFocused};
        outline: ${Border.InputFocused};
    }

    @media (max-width: ${BreakPoint.Tablet}) {
        height: 150px;
        font-size: 16px;
    }
`;
