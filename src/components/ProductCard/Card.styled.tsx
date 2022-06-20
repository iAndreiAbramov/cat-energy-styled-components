import {
    BgColor,
    Border,
    BreakPoint,
    FontColor,
    FontFamily,
    FontWeight,
} from 'constants/style-variables';
import styled from 'styled-components';
import { SButton } from 'styled-elements/SButton';

export const CardOuterWrapper = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 100%;
    min-height: 210px;
    padding-bottom: 25px;

    border-top: ${Border.ProductCard};

    @media (min-width: ${BreakPoint.TabletLow}) {
        padding-bottom: 40px;
        min-height: 521px;

        border: none;
        background: linear-gradient(${BgColor.White} 0 82px, ${BgColor.BasicGray} 82px 100%);
    }
`;

export const CardInnerWrapper = styled.div`
    display: grid;
    grid-template-columns: [start] 20px [image-start] 1fr [image-end] 0 [info-start] 1fr [info-end] 20px [end];

    padding-top: 18px;
    padding-bottom: 26px;
    min-height: 144px;

    @media (min-width: ${BreakPoint.TabletLow}) {
        grid-template-rows: 204px auto auto;
        row-gap: 34px;
        grid-template-columns: 38px [content-start] 1fr [content-end] 38px;

        padding-top: 0;
        padding-bottom: 0;
    }
`;

export const ImageWrapper = styled.picture`
    grid-column: image-start / image-end;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 100%;
    flex: 1 0 140px;

    @media (min-width: ${BreakPoint.TabletLow}) {
        grid-column: content-start / content-end;
        justify-content: end;
    }
`;

export const InfoWrapper = styled.div`
    grid-column: info-start / info-end;
    flex: 1 0 140px;

    @media (min-width: ${BreakPoint.TabletLow}) {
        grid-column: content-start / content-end;
    }
`;

export const InfoTitle = styled.h3`
    margin-bottom: 18px;
    max-width: 5em;

    font-weight: ${FontWeight.Regular};
    font-size: 16px;
    line-height: 1.25;
    color: ${FontColor.SpecialGray};
    text-transform: uppercase;

    @media (min-width: ${BreakPoint.TabletLow}) {
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 22px;
        max-width: 7em;

        font-size: 20px;
        line-height: 1.2;
        text-align: center;
    }
`;

export const InfoList = styled.dl`
    display: flex;
    flex-direction: column;
    gap: 6px;
`;

export const InfoListRow = styled.div`
    display: flex;
    justify-content: space-between;

    @media (min-width: ${BreakPoint.TabletLow}) and (max-width: ${BreakPoint.TabletTop}) {
        border-bottom: ${Border.ProductCard};
        padding-bottom: 6px;
    }
`;

export const TextItem = styled.span`
    font-family: ${FontFamily.Arial};
    font-weight: ${FontWeight.Regular};
    font-size: 12px;
    line-height: 1.33;
    color: ${FontColor.Gray};

    @media (min-width: ${BreakPoint.TabletLow}) and (max-width: ${BreakPoint.TabletTop}) {
        font-size: 16px;
        line-height: 1;
    }
`;

export const ButtonWrapper = styled.div`
    grid-column: image-start / info-end;
    width: 100%;
    padding: 0 20px;

    @media (min-width: ${BreakPoint.TabletLow}) and (max-width: ${BreakPoint.TabletTop}) {
        grid-column: content-start / content-end;
        padding: 0 38px;
    }
`;

export const CardButton = styled(SButton)`
    min-height: 40px;
`;

export const EmptyCardWrapper = styled(CardOuterWrapper)`
    align-items: center;
    justify-content: flex-start;

    padding-top: 25px;
    border-bottom: ${Border.ProductCard};

    @media (min-width: ${BreakPoint.TabletLow}) {
        padding-top: 52px;

        background: none;
        border: ${Border.EmptyCard};
    }
`;

export const IconWrapper = styled.div`
    width: 30px;
    height: 30px;
    margin-bottom: 24px;

    & svg {
        width: 100%;
        height: 100%;
    }

    @media (min-width: ${BreakPoint.TabletLow}) {
        width: 60px;
        height: 60px;
        margin-bottom: 48px;
    }
`;

export const EmptyCardTitle = styled(InfoTitle)`
    max-width: 100%;
    margin-bottom: 8px;

    @media (min-width: ${BreakPoint.TabletLow}) {
        margin-bottom: 24px;
        max-width: 8em;
    }
`;

export const EmptyCardText = styled(TextItem)`
    margin-bottom: 22px;
    text-align: center;

    @media (min-width: ${BreakPoint.TabletLow}) {
        max-width: 12em;
    }
`;

export const EmptyCardButtonWrapper = styled(ButtonWrapper)`
    margin-top: auto;
`;
