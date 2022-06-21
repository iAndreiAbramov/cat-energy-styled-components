import { BreakPoint, FontColor, FontWeight } from 'constants/style-variables';
import styled from 'styled-components';
import { SMain } from 'styled-elements/SMain';
import { SPageTitle } from 'styled-elements/SPageTitle';

export const MainWrapper = styled(SMain)`
    padding-top: 26px;
    padding-bottom: 32px;
    max-width: 1600px;

    @media (min-width: ${BreakPoint.TabletLow}) and (max-width: ${BreakPoint.TabletTop}) {
        padding-top: 30px;
        padding-bottom: 72px;
    }

    @media (min-width: ${BreakPoint.Desktop}) {
        padding-top: 30px;
        padding-bottom: 82px;
    }
`;

export const FormPageTitle = styled(SPageTitle)`
    color: ${FontColor.Dark};
    margin-right: auto;
`;

export const FormPageSubTitle = styled.h2`
    margin-right: auto;
    margin-top: 40px;

    font-weight: ${FontWeight.Regular};
    font-size: 14px;
    line-height: 1.3;
    text-transform: uppercase;
    color: ${FontColor.Dark};

    @media (min-width: ${BreakPoint.TabletLow}) {
        margin-top: 54px;
        font-size: 20px;
    }
`;
