import { BreakPoint, FontColor } from 'constants/style-variables';
import styled from 'styled-components';
import { SMain } from 'styled-elements/SMain';
import { SPageTitle } from 'styled-elements/SPageTitle';

export const CatalogMain = styled(SMain)`
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
