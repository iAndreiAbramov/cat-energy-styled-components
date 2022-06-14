import { BreakPoint, FontColor, FontFamily, FontWeight } from 'constants/style-variables';
import styled from 'styled-components';

export const SRegularText = styled.p`
    font-family: ${FontFamily.Arial};
    font-weight: ${FontWeight.Regular};
    font-size: 14px;
    line-height: 1.3;
    color: ${FontColor.Gray};

    @media (min-width: ${BreakPoint.TabletLow}) {
        font-size: 16px;
        line-height: 1.5;
    }
`;
