import { BgColor, BreakPoint, FontColor, FontFamily } from 'constants/style-variables';
import styled from 'styled-components';

export const ExplanationWrapper = styled.article<{ number: string }>`
    position: relative;

    display: flex;
    gap: 20px;
    min-height: 60px;
    width: 100%;

    @media (min-width: ${BreakPoint.TabletLow}) and (max-width: ${BreakPoint.TabletTop}) {
        flex-direction: column;
        gap: unset;
        min-height: 228px;
        width: auto;
    }

    @media (min-width: ${BreakPoint.Desktop}) {
        flex-direction: column;

        width: 230px;
        min-height: 228px;
        gap: 31px;
    }
`;

export const ExplanationImageWrapper = styled.div`
    position: relative;

    flex: 0 0 60px;
    max-width: 60px;
    max-height: 60px;

    background-color: ${BgColor.BasicGreen};

    & svg {
        position: absolute;
        top: 50%;
        left: 50%;

        transform: translate(-50%, -50%);
    }

    @media (min-width: ${BreakPoint.TabletLow}) {
        flex: 0 0 80px;
        max-width: 80px;
        max-height: 80px;
    }
`;

export const ExplanationText = styled.p`
    padding-top: 4px;
    font-family: ${FontFamily.Arial};
    font-weight: 400;
    font-size: 14px;
    line-height: 1.3;
    color: ${FontColor.Gray};

    @media (min-width: ${BreakPoint.TabletLow}) and (max-width: ${BreakPoint.TabletTop}) {
        margin-top: 30px;
        max-width: 85%;
    }
`;

export const ExplanationNumber = styled.div`
    position: absolute;
    z-index: -1;
    top: 0;
    right: 0;

    display: block;

    font-family: ${FontFamily.Oswald};
    font-weight: 400;
    font-size: 280px;
    line-height: 0.7;
    letter-spacing: 0;
    color: #f2f2f2;

    @media (max-width: ${BreakPoint.MobileTop}) {
        display: none;
    }
`;
