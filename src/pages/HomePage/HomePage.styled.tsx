import { BgColor, BreakPoint, FontColor, FontWeight } from 'constants/style-variables';
import styled from 'styled-components';
import { SRegularText } from 'styled-elements/SRegularText';
import { SSectionTitle } from 'styled-elements/SSectionTitle';

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
        padding-bottom: 40px;
    }
`;

export const ExplanationTitle = styled(SSectionTitle)`
    margin-bottom: 40px;

    @media (min-width: ${BreakPoint.TabletLow}) {
        margin-bottom: 70px;
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

export const ExampleSection = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-top: 25px;
    padding-bottom: 40px;

    background-color: ${BgColor.BasicGray};

    @media (min-width: ${BreakPoint.TabletLow}) and (max-width: ${BreakPoint.TabletTop}) {
        padding-top: 50px;
        padding-bottom: 55px;

        background: linear-gradient(${BgColor.White} 620px, ${BgColor.BasicGray} 180px 100%);
    }

    @media (min-width: ${BreakPoint.Desktop}) {
        display: grid;
        grid-template-columns: 436px auto;
        grid-template-rows: 210px auto 1fr;
        justify-content: space-between;

        padding-top: 50px;
        padding-bottom: 70px;

        background: linear-gradient(${BgColor.White} 180px, ${BgColor.BasicGray} 180px 100%);
    }
`;

export const ExampleTitle = styled(SSectionTitle)`
    margin-bottom: 40px;

    @media (min-width: ${BreakPoint.TabletLow}) and (max-width: ${BreakPoint.TabletTop}) {
        margin-bottom: 62px;
    }

    @media (min-width: ${BreakPoint.Desktop}) {
        grid-column: 1/2;
        grid-row: 1/2;
        margin-bottom: 0;
    }
`;

export const ExampleText = styled(SRegularText)`
    @media (min-width: ${BreakPoint.Desktop}) {
        grid-column: 1/2;
        grid-row: 2/3;
    }
`;

export const ExampleResults = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;

    @media (min-width: ${BreakPoint.TabletLow}) and (max-width: ${BreakPoint.TabletTop}) {
        flex-direction: row;
        justify-content: space-between;

        margin-top: 54px;
    }

    @media (min-width: ${BreakPoint.Desktop}) {
        justify-content: space-between;
        grid-column: 1/2;
        grid-row: 3/-1;

        min-width: 366px;
        max-width: 35%;
        margin-top: 70px;
    }
`;

export const ExampleStats = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 32px;

    @media (min-width: ${BreakPoint.Desktop}) {
        justify-content: space-between;
    }
`;

export const ExamplePrice = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    margin-top: 32px;

    @media (min-width: ${BreakPoint.TabletLow}) and (max-width: ${BreakPoint.TabletTop}) {
        flex-direction: column;
        align-items: flex-end;
        margin-top: 0;
    }

    @media (min-width: ${BreakPoint.Desktop}) {
        justify-content: space-between;

        margin-top: 55px;
    }
`;

export const ExamplePriceItem = styled.span`
    text-transform: uppercase;

    font-weight: ${FontWeight.Regular};
    font-size: 14px;
    text-align: center;
    color: ${FontColor.Dark};

    @media (min-width: ${BreakPoint.TabletLow}) and (max-width: ${BreakPoint.TabletTop}) {
        font-size: 20px;
    }

    @media (min-width: ${BreakPoint.Desktop}) {
        &:last-child {
            margin-right: 12%;
        }
    }
`;
