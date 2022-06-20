import { Border, BreakPoint, FontColor, FontFamily, FontWeight } from 'constants/style-variables';
import styled from 'styled-components';

export const ExtraWrapper = styled.article`
    display: grid;
    grid-template-rows: repeat(2, auto);
    row-gap: 14px;

    padding-top: 14px;
    padding-bottom: 20px;
    min-height: 130px;

    border-top: ${Border.ProductCard};

    &:last-of-type {
        border-bottom: ${Border.ProductCard};
    }

    @media (min-width: ${BreakPoint.TabletLow}) and (max-width: ${BreakPoint.TabletTop}) {
        display: grid;
        grid-template-rows: repeat(3, auto);
        grid-template-columns: 1fr auto;
        gap: 25px;

        padding: 26px 38px 28px;
        min-height: 140px;

        border-left: ${Border.ProductCard};
        border-right: ${Border.ProductCard};
    }

    @media (min-width: ${BreakPoint.Desktop}) {
        grid-template-rows: auto;
        grid-template-columns: repeat(2, minmax(220px, 1fr)) minmax(220px, 1fr);
        column-gap: 36px;
        align-items: center;

        padding: 16px 0;
        min-height: 72px;
    }
`;

export const ExtraTitle = styled.h3`
    font-weight: ${FontWeight.Regular};
    font-size: 20px;
    color: ${FontColor.SpecialGray};
    text-transform: uppercase;
`;

export const ExtraInfo = styled.dl`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 55px;
`;

export const ExtraInfoText = styled.span`
    font-family: ${FontFamily.Arial};
    font-weight: ${FontWeight.Regular};
    font-size: 14px;
    color: ${FontColor.SpecialGray};
`;

export const ExtraButtonWrapper = styled.div`
    width: 100%;
    height: 40px;

    @media (min-width: ${BreakPoint.TabletLow}) and (max-width: ${BreakPoint.TabletTop}) {
        grid-column: 1/-1;
        grid-row: 2/-1;
    }
`;
