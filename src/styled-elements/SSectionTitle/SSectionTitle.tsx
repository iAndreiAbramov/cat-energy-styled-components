import { BreakPoint, FontColor, FontFamily, FontWeight } from 'constants/style-variables';
import styled from 'styled-components';

export const SSectionTitle = styled.h2`
    width: 100%;
    margin-bottom: 40px;

    font-family: ${FontFamily.Oswald};
    font-weight: ${FontWeight.Regular};
    font-size: 36px;
    color: ${FontColor.Dark};
    text-align: left;

    @media (min-width: ${BreakPoint.TabletLow}) {
        margin-bottom: 70px;
        font-weight: 400;
        font-size: 60px;
        color: ${FontColor.Dark};
    }
`;
