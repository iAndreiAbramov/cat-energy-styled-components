import { BreakPoint } from 'constants/style-variables';
import styled from 'styled-components';

export const FeatureList = styled.section`
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
