import { BreakPoint, FontFamily, FontWeight, TextColor } from 'constants/style-variables';
import styled from 'styled-components';

export const StyledMainTitle = styled.h1`
    font-family: ${FontFamily.Oswald};
    font-weight: ${FontWeight.Regular};
    font-size: 60px;
    line-height: 1;
    color: ${({ color }) => (color ? color : TextColor.Dark)};

    @media (max-width: ${BreakPoint.Tablet}) {
        font-size: 36px;
    }
`;
