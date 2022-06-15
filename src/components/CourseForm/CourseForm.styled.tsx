import { Border, BreakPoint, FontColor, FontFamily, FontWeight } from 'constants/style-variables';
import styled from 'styled-components';
import { SButton } from 'styled-elements/SButton';
import { SContainer } from 'styled-elements/SContainer';
import { SSectionTitleDecorated } from 'styled-elements/SSectionTitleDecorated';
import { STextarea } from 'styled-elements/STextarea';

export const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;

    margin-top: 40px;

    @media (min-width: ${BreakPoint.TabletLow}) {
        margin-top: 66px;
    }
`;

export const Row = styled.div`
    display: flex;
    flex-direction: column;
`;

export const GeneraFieldSet = styled.fieldset`
    display: flex;
    flex-direction: column;
    gap: 13px;

    padding-bottom: 24px;
    border-bottom: ${Border.HorizontalLine};

    @media (min-width: ${BreakPoint.TabletLow}) and (max-width: ${BreakPoint.TabletTop}) {
        padding-bottom: 72px;
    }
`;

export const PurposeFieldSet = styled.fieldset`
    display: flex;
    flex-direction: column;
    gap: 13px;

    padding-bottom: 24px;
    padding-top: 24px;
    border-bottom: ${Border.HorizontalLine};
`;

export const Legend = styled(SSectionTitleDecorated)`
    padding-left: 20px;

    @media (min-width: ${BreakPoint.TabletLow}) {
        padding-left: 0;
    }
`;

export const HostFieldSet = styled.fieldset`
    display: flex;
    flex-direction: column;

    margin-top: 24px;

    @media (min-width: ${BreakPoint.TabletLow}) and (max-width: ${BreakPoint.TabletTop}) {
        margin-top: 76px;
    }
`;

export const HostInputs = styled.div`
    display: flex;
    flex-direction: column;
    gap: 14px;

    margin-top: 36px;

    @media (min-width: ${BreakPoint.TabletLow}) and (max-width: ${BreakPoint.TabletTop}) {
        margin-top: 76px;
    }
`;

export const HabitsFieldSet = styled.fieldset`
    margin-top: 24px;

    @media (min-width: ${BreakPoint.TabletLow}) and (max-width: ${BreakPoint.TabletTop}) {
        margin-top: 65px;
    }
`;

export const HabitsInputs = styled.div`
    margin-top: 36px;

    @media (min-width: ${BreakPoint.TabletLow}) and (max-width: ${BreakPoint.TabletTop}) {
        margin-top: 76px;
    }
`;

export const HabitsTextarea = styled(STextarea)`
    height: 150px;

    @media (min-width: ${BreakPoint.TabletLow}) and (max-width: ${BreakPoint.TabletTop}) {
        height: 174px;
    }
`;

export const ExtraFieldSet = styled.fieldset`
    margin-top: 24px;

    @media (min-width: ${BreakPoint.TabletLow}) and (max-width: ${BreakPoint.TabletTop}) {
        margin-top: 65px;
    }
`;

export const ExtraInputs = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    margin-top: 34px;

    @media (min-width: ${BreakPoint.TabletLow}) and (max-width: ${BreakPoint.TabletTop}) {
        flex-direction: row;
        flex-wrap: wrap;

        & label {
            min-width: 45%;
        }
    }
`;

export const SubmitContainer = styled(SContainer)`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    width: 100%;
    margin-top: 34px;

    @media (min-width: ${BreakPoint.TabletLow}) and (max-width: ${BreakPoint.TabletTop}) {
        flex-direction: row;
        margin-top: 54px;
        gap: 61px;
    }
`;

export const SubmitButton = styled(SButton)`
    height: 40px;

    @media (min-width: ${BreakPoint.TabletLow}) and (max-width: ${BreakPoint.TabletTop}) {
        height: 52px;
        max-width: 40%;
    }
`;

export const Note = styled.span`
    font-family: ${FontFamily.Arial};
    font-weight: ${FontWeight.Regular};
    font-size: 14px;
    color: ${FontColor.Dark};
    text-align: center;

    @media (min-width: ${BreakPoint.TabletLow}) and (max-width: ${BreakPoint.TabletTop}) {
        font-size: 16px;
    }
`;
