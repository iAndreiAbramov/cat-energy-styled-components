import { BreakPoint, FontColor } from 'constants/style-variables';
import styled from 'styled-components';
import { SPageTitle } from 'styled-elements/SPageTitle';
import { SSectionTitleDecorated } from 'styled-elements/SSectionTitleDecorated';

export const CatalogWrapper = styled.section`
    padding-top: 27px;
    padding-bottom: 34px;
`;

export const CatalogPageTitle = styled(SPageTitle)`
    margin-bottom: 42px;
    color: ${FontColor.Dark};

    @media (min-width: ${BreakPoint.TabletLow}) and (max-width: ${BreakPoint.TabletTop}) {
        margin-bottom: 82px;
    }
`;

export const ProductsList = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: ${BreakPoint.TabletLow}) and (max-width: ${BreakPoint.TabletTop}) {
        display: grid;
        grid-template-columns: repeat(2, minmax(324px, auto));
        gap: 60px;

        padding-right: 30px;
        padding-left: 30px;
    }

    @media (min-width: ${BreakPoint.Desktop}) {
        display: grid;
        grid-template-columns: repeat(4, minmax(224px, auto));
        column-gap: 60px;
        row-gap: 60px;

        padding-right: 70px;
        padding-left: 70px;
    }
`;

export const ExtraOuterWrapper = styled.section`
    display: flex;
    flex-direction: column;

    padding-top: 25px;
    padding-bottom: 36px;

    @media (min-width: ${BreakPoint.TabletLow}) {
        padding-top: 68px;
        padding-bottom: 76px;
    }

    @media (min-width: ${BreakPoint.Desktop}) {
        display: grid;
        grid-template-rows: repeat(2, auto);
        grid-template-columns: 1fr auto;
        grid-column-gap: 80px;
    }
`;
export const ExtraItemsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    grid-row: 2/-1;
    grid-column: 1/2;
`;

export const ExtraTitle = styled(SSectionTitleDecorated)`
    white-space: nowrap;
    margin-bottom: 36px;

    @media (min-width: ${BreakPoint.TabletLow}) {
        margin-bottom: 80px;
    }

    @media (min-width: ${BreakPoint.Desktop}) {
        grid-row: 1/2;
    }
`;
