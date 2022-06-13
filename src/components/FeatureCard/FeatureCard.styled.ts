import { Link } from 'react-router-dom';
import { BgColor, Border, BreakPoint, FontColor } from 'constants/style-variables';
import styled from 'styled-components';
import { SRegularText } from 'styled-elements/SRegularText';

export const FeatureImageWrapper = styled.div`
    position: absolute;

    display: flex;
    align-items: center;
    justify-content: center;
    top: 20px;
    left: 20px;

    width: 50px;
    height: 50px;

    background-color: ${BgColor.BasicGreen};
    border-radius: 50%;

    & svg {
        position: absolute;
    }

    @media (min-width: ${BreakPoint.TabletLow}) and (max-width: ${BreakPoint.TabletTop}) {
        top: 81px;
        left: auto;
        right: 62px;

        width: 200px;
        height: 200px;
    }

    @media (min-width: ${BreakPoint.Desktop}) {
        position: absolute;
        top: 40px;
        left: 50px;

        width: 100px;
        height: 100px;

        background-color: ${BgColor.BasicGreen};
        border-radius: 50%;
    }
`;

export const FeatureTitle = styled.h3`
    display: flex;
    align-items: center;

    margin-left: 80px;

    font-weight: 400;
    font-size: 24px;
    text-transform: uppercase;
    color: ${FontColor.Dark};

    @media (min-width: ${BreakPoint.TabletLow}) and (max-width: ${BreakPoint.TabletTop}) {
        margin-left: 0;
        font-size: 36px;
    }

    @media (min-width: ${BreakPoint.Desktop}) {
        display: flex;
        align-items: center;

        margin-left: 162px;
        font-size: 36px;
    }
`;

export const FeatureText = styled(SRegularText)`
    flex: 1 0 80px;
    padding: 0;
    margin-top: 30px;
    border-bottom: ${Border.HorizontalLine};

    @media (min-width: ${BreakPoint.TabletLow}) and (max-width: ${BreakPoint.TabletTop}) {
        max-width: 50%;
        margin-top: 30px;
        border-bottom: none;
    }

    @media (min-width: ${BreakPoint.Desktop}) {
        flex: 1 0 80px;

        padding: 0;
        margin-top: 73px;

        font-size: 16px;
        line-height: 1.5;

        border-bottom: none;
    }
`;

export const FeatureLinkWrapper = styled(Link)`
    flex: 0 0 58px;
    display: flex;
    align-items: center;
    gap: 15px;

    text-decoration: none;
    color: ${FontColor.Dark};

    transition: all 0.3s linear;

    &::after {
        content: '';
        display: block;
        width: 24px;
        height: 12px;
        background-image: url('/img/icons/link-arrow.svg');
    }

    &:hover::after {
        width: 32px;
        background-image: url('/img/icons/link-arrow-hover.svg');
    }

    &:active {
        opacity: 0.3;
    }

    @media (min-width: ${BreakPoint.TabletLow}) and (max-width: ${BreakPoint.TabletTop}) {
        gap: 25px;
    }

    @media (min-width: ${BreakPoint.Desktop}) {
        display: flex;
        align-items: center;
        gap: 15px;

        text-decoration: none;
        color: ${FontColor.Dark};
    }
`;

export const FeatureLinkText = styled.span`
    font-weight: 400;
    font-size: 16px;
    text-transform: uppercase;

    @media (min-width: ${BreakPoint.TabletLow}) and (max-width: ${BreakPoint.TabletTop}) {
        font-size: 20px;
    }

    @media (min-width: ${BreakPoint.Desktop}) {
        font-size: 20px;
    }
`;

export const FeatureCardWrapper = styled.article`
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    min-height: 266px;
    width: 100%;
    padding: 30px 22px 0;

    background-color: #f2f2f2;

    &:first-of-type ${FeatureImageWrapper} svg {
        width: auto;
        height: 50px;
    }

    &:last-of-type ${FeatureImageWrapper} svg {
        width: 67px;
        height: auto;
    }

    @media (min-width: ${BreakPoint.TabletLow}) and (max-width: ${BreakPoint.TabletTop}) {
        min-height: 372px;
        width: 100%;
        padding: 78px 52px 33px;

        &:first-of-type ${FeatureImageWrapper} svg {
            width: auto;
            height: 200px;
        }

        &:last-of-type ${FeatureImageWrapper} svg {
            width: 268px;
            height: auto;
        }
    }

    @media (min-width: ${BreakPoint.Desktop}) {
        min-height: 374px;
        min-width: 470px;
        padding: 70px 54px 33px;

        &:first-of-type ${FeatureImageWrapper} svg {
            width: auto;
            height: 100px;
        }

        &:last-of-type ${FeatureImageWrapper} svg {
            width: 134px;
            height: auto;
        }
    }
`;
