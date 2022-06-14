import {
    BgColor,
    Border,
    BreakPoint,
    FontColor,
    FontFamily,
    FontWeight,
} from 'constants/style-variables';
import styled from 'styled-components';

export const Wrapper = styled.div`
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;

    min-width: 124px;
    max-width: 30%;
    min-height: 56px;

    border: ${Border.StatsItem};
    border-radius: 3px;

    @media (min-width: ${BreakPoint.TabletLow}) {
        min-width: 162px;
        max-width: 40%;
        min-height: 72px;
    }
`;

export const BigText = styled.span`
    font-weight: ${FontWeight.Regular};
    font-size: 24px;
    text-align: center;
    color: ${FontColor.Dark};
    text-transform: uppercase;

    @media (min-width: ${BreakPoint.TabletLow}) {
        font-size: 30px;
    }
`;

export const SmallText = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: -18px;
    z-index: 2;

    width: 60%;
    padding-left: 20px;
    padding-right: 20px;
    box-sizing: border-box;

    font-family: ${FontFamily.Arial};
    font-weight: ${FontWeight.Regular};
    font-size: 12px;
    text-align: center;

    color: #444444;
    background-color: ${BgColor.BasicGray};

    @media (min-width: ${BreakPoint.TabletLow}) and (max-width: ${BreakPoint.TabletTop}) {
        background-color: ${BgColor.White};
    }

    @media (min-width: ${BreakPoint.TabletLow}) {
        bottom: -7px;

        font-size: 14px;
        width: auto;
        padding-left: 10px;
        padding-right: 10px;
    }
`;
