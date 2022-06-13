import { BreakPoint } from 'constants/style-variables';
import styled from 'styled-components';

export const FeatureSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 44px;

    @media (min-width: ${BreakPoint.TabletLow}) and (max-width: ${BreakPoint.TabletTop}) {
        gap: 30px;
    }

    @media (min-width: ${BreakPoint.Desktop}) {
        flex-direction: row;
        gap: 80px;
        justify-content: space-around;
    }

    @media (min-width: ${BreakPoint.Desktop}) {
        padding-top: 82px;
        padding-bottom: 70px;
    }
`;

export const ExplanationSection = styled.section`
    padding-top: 20px;
    padding-bottom: 20px;
    width: 100%;

    @media (min-width: ${BreakPoint.TabletLow}) and (max-width: ${BreakPoint.TabletTop}) {
        padding-top: 45px;
        padding-bottom: 60px;
    }

    @media (min-width: ${BreakPoint.Desktop}) {
        padding-top: 0;
        padding-bottom: 80px;
    }
`;

export const ExplanationContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (min-width: ${BreakPoint.TabletLow}) and (max-width: ${BreakPoint.TabletTop}) {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(230px, 35%));
        column-gap: 152px;
        row-gap: 90px;
        width: 100%;
    }

    @media (min-width: ${BreakPoint.Desktop}) {
        flex-direction: row;
        justify-content: space-between;
        gap: 94px;
    }
`;

// title
// description
// stats

export const ExampleSection = styled.section`
    display: flex;
`;
