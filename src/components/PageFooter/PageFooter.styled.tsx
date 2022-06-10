import { BgColor, Border, BreakPoint, FontFamily } from 'constants/style-variables';
import styled from 'styled-components';

export const FooterWrapper = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    width: 100%;

    background-color: ${BgColor.BasicGray};

    @media (min-width: ${BreakPoint.TabletLow}) {
        flex-direction: row;
        padding-top: 58px;
        padding-bottom: 55px;
    }
`;

export const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 96px;
    border-bottom: ${Border.FooterItemMobile};

    @media (min-width: ${BreakPoint.TabletLow}) {
        border-bottom: none;
        width: auto;
    }
`;

export const SocialsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 36px;
    height: 62px;

    width: 100%;
    border-bottom: ${Border.FooterItemMobile};

    @media (min-width: ${BreakPoint.TabletLow}) {
        border-bottom: none;
    }
`;

export const AcademyLogoWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    max-width: 320px;
    height: 90px;

    & span {
        font-family: ${FontFamily.Arial};
        font-weight: 400;
        font-size: 16px;
    }

    @media (min-width: ${BreakPoint.TabletLow}) {
        max-width: 164px;
    }
`;
