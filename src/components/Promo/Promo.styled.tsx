import { BreakPoint, FontColor } from 'constants/style-variables';
import styled from 'styled-components';
import { SContainer } from 'styled-elements/SContainer';

export const PromoWrapper = styled.div`
    display: grid;
    grid-template-rows: [header-start] auto [header-end] 0 [image-start] 28px [text-start] auto [text-end] 28px [can-start] 136px [image-end] 138px [can-end] 0 [button-start] 40px [button-end] 20px;
    grid-template-columns: [page-start] 20px [content-start] auto [content-end] 20px [page-end];

    width: 100%;
    max-width: 2000px;
    box-sizing: border-box;

    @media (min-width: ${BreakPoint.TabletLow}) and (max-width: ${BreakPoint.TabletTop}) {
        grid-template-rows: [header-start] auto [header-end] 0 [text-start] auto [text-end] 0 [can-start] 28px [button-start] 54px [button-end] 526px [can-end];
        grid-template-columns: [page-start] 30px [content-start] auto [content-end] 30px [page-end];
    }

    @media (min-width: ${BreakPoint.Desktop}) {
        grid-template-rows: [header-start] 0 [image-start] auto [header-end] 0 [can-start] 82px [text-start] auto [text-end] 52px [button-start] 54px [button-end] 66px [can-end] 118px [image-end];
        grid-template-columns: [page-start] auto [content-start] 80px [text-start] 0 [button-start] 244px [button-end] 124px [can-start] 162px [text-end] 0 [image-start] auto [can-end] auto [content-end] auto [image-end] 0 [page-end];
    }
`;

export const ImageWrapper = styled.div`
    position: relative;
    grid-row: image-start / image-end;
    grid-column: page-start/page-end;

    width: 100%;
    max-width: 1440px;
    height: 302px;
    box-sizing: border-box;

    background-image: url('/img/pictures/promo-bg-mobile.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;

    &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0.85;

        background-color: #68b738;
    }

    @media (min-resolution: 2dppx) {
        background-image: url('/img/pictures/promo-bg-mobile@2x.jpg');
    }

    @media (min-width: ${BreakPoint.TabletLow}) and (max-width: ${BreakPoint.TabletTop}) {
        display: none;
    }

    @media (min-width: ${BreakPoint.Desktop}) {
        grid-row: image-start/image-end;
        grid-column: image-start/image-end;
        height: auto;

        background-image: url('/img/pictures/promo-bg-desktop.jpg');
    }

    @media (min-width: ${BreakPoint.Desktop}) and (min-resolution: 2dppx) {
        background-image: url('/img/pictures/promo-bg-desktop@2x.jpg');
    }
`;

export const TextWrapper = styled.div`
    grid-row: text-start/text-end;
    grid-column: content-start/content-end;
    z-index: 3;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;

    text-align: center;

    @media (min-width: ${BreakPoint.TabletLow}) and (max-width: ${BreakPoint.TabletTop}) {
        align-items: flex-start;
        gap: 40px;

        padding-left: 16%;
        padding-top: 31px;
        padding-bottom: 20px;

        text-align: left;
    }

    @media (min-width: ${BreakPoint.Desktop}) {
        grid-row: text-start/text-end;
        grid-column: text-start/text-end;

        align-items: flex-start;
        gap: 40px;
        text-align: left;
    }
`;

export const PromoText = styled.span`
    font-weight: 400;
    font-size: 14px;
    color: ${FontColor.Light};
    text-transform: uppercase;

    @media (min-width: ${BreakPoint.TabletLow}) {
        font-size: 20px;
        color: ${FontColor.Dark};
        text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    }

    @media (min-width: ${BreakPoint.Desktop}) {
        text-shadow: none;
    }
`;

export const CanWrapper = styled.div`
    grid-row: can-start/can-end;
    grid-column: page-start/page-end;
    z-index: 4;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;

    @media (min-width: ${BreakPoint.Desktop}) {
        grid-column: can-start/can-end;
    }
`;

export const SelectButtonContainer = styled(SContainer)`
    grid-row: button-start/button-end;
    grid-column: content-start/content-end;
    padding: 0;
    width: 100%;

    @media (min-width: ${BreakPoint.TabletLow}) and (max-width: ${BreakPoint.TabletTop}) {
        z-index: 4;

        width: 245px;
        margin-left: 16%;
        padding: 0;
        height: auto;

        border: 1px solid #000000;
    }

    @media (min-width: ${BreakPoint.Desktop}) {
        grid-column: button-start/button-end;
        padding: 0;
    }
`;
