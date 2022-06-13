import { BreakPoint, FontColor, FontFamily, FontWeight } from 'constants/style-variables';
import styled from 'styled-components';

export const SPageTitle = styled.h1`
    font-family: ${FontFamily.Oswald};
    font-weight: ${FontWeight.Regular};
    font-size: 60px;
    line-height: 1;
    color: ${FontColor.Dark};

    @media (max-width: ${BreakPoint.MobileTop}) {
        font-size: 36px;
        color: ${FontColor.Light};
    }
`;
