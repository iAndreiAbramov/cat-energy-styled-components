import { BreakPoint, FontColor, FontFamily, FontWeight } from 'constants/style-variables';
import styled from 'styled-components';

export const ExtraPromoWrapper = styled.article`
    position: relative;
    grid-row: 2/-1;
    grid-column-gap: 2/-1;
    margin-top: 36px;

    @media (min-width: ${BreakPoint.TabletLow}) and (max-width: ${BreakPoint.TabletTop}) {
        margin-top: 70px;
    }

    @media (min-width: ${BreakPoint.Desktop}) {
        margin-top: 0;
    }
`;

export const ExtraPromoImageWrapper = styled.picture`
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 280px;
    width: 100%;
    height: 288px;

    & img {
        width: 100%;
        height: 288px;
        object-fit: cover;
    }

    &::after {
        content: '';
        position: absolute;
        display: block;
        width: 100%;
        height: 100%;
        background-color: rgba(104, 183, 56, 0.85);
    }

    @media (min-width: ${BreakPoint.TabletLow}) and (max-width: ${BreakPoint.TabletTop}) {
        min-width: 706px;
        height: 200px;

        & img {
            width: 100%;
            height: 200px;
            object-fit: cover;
        }
    }
`;

export const ExtraPromoContent = styled.div`
    position: absolute;
    top: 58px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 3;

    height: 178px;
    width: 160px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @media (min-width: ${BreakPoint.TabletLow}) and (max-width: ${BreakPoint.TabletTop}) {
        top: 50%;
        transform: translate(-50%, -50%);

        flex-direction: row;

        width: 75%;
    }
`;

export const ExtraPromoIconWrapper = styled.div`
    flex-grow: 0;
    flex-shrink: 0;

    width: 78px;
    height: 80px;

    & svg {
        width: 100%;
        height: 100%;
    }
`;

export const ExtraPromoText = styled.span`
    display: block;

    text-align: center;
    font-family: ${FontFamily.Arial};
    font-weight: ${FontWeight.Regular};
    font-size: 16px;
    line-height: 1.25;
    color: ${FontColor.Light};

    @media (min-width: ${BreakPoint.TabletLow}) and (max-width: ${BreakPoint.TabletTop}) {
        width: 160px;
        text-align: left;
    }
`;
