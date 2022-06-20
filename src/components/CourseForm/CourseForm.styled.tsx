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

    @media (min-width: ${BreakPoint.Desktop}) {
        flex-direction: row;
        justify-content: space-between;
        gap: 80px;
    }
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

    @media (min-width: ${BreakPoint.Desktop}) {
        justify-content: space-between;
        flex: 0 1 50%;

        padding-bottom: 0;
        border-bottom: none;
    }
`;

export const PurposeFieldSet = styled.fieldset`
    display: flex;
    flex-direction: column;
    gap: 13px;

    padding-bottom: 24px;
    padding-top: 24px;
    border-bottom: ${Border.HorizontalLine};

    @media (min-width: ${BreakPoint.Desktop}) {
        flex: 0 1 50%;

        padding: 25px 28px;
        border: ${Border.InputRegular};
    }
`;

export const Legend = styled(SSectionTitleDecorated)`
    padding-left: 20px;

    @media (min-width: ${BreakPoint.TabletLow}) {
        padding-left: 0;
    }

    @media (min-width: ${BreakPoint.Desktop}) {
        padding-left: 36px;
    }
`;

export const HostFieldSet = styled.fieldset`
    display: flex;
    flex-direction: column;

    margin-top: 24px;

    @media (min-width: ${BreakPoint.TabletLow}) {
        margin-top: 76px;
    }
`;

export const HostInputs = styled.div`
    display: flex;
    flex-direction: column;
    gap: 14px;

    margin-top: 36px;

    @media (min-width: ${BreakPoint.TabletLow}) {
        margin-top: 76px;
    }

    @media (min-width: ${BreakPoint.Desktop}) {
        flex-direction: row;
        gap: 78px;

        & label {
            flex: 0 1 50%;
        }
    }
`;

export const HabitsFieldSet = styled.fieldset`
    margin-top: 24px;

    @media (min-width: ${BreakPoint.TabletLow}) and (max-width: ${BreakPoint.TabletTop}) {
        margin-top: 65px;
    }

    @media (min-width: ${BreakPoint.Desktop}) {
        margin-top: 70px;
    }
`;

export const HabitsInputs = styled.div`
    margin-top: 36px;

    @media (min-width: ${BreakPoint.TabletLow}) {
        margin-top: 76px;
    }
`;

export const HabitsTextarea = styled(STextarea)`
    height: 150px;

    @media (min-width: ${BreakPoint.TabletLow}) {
        height: 174px;
    }
`;

export const ExtraFieldSet = styled.fieldset`
    margin-top: 24px;

    @media (min-width: ${BreakPoint.TabletLow}) {
        margin-top: 65px;
    }
`;

export const ExtraInputs = styled.div`
    display: flex;
    flex-direction: column;
    gap: 13px;
    margin-top: 34px;

    @media (min-width: ${BreakPoint.TabletLow}) and (max-width: ${BreakPoint.TabletTop}) {
        flex-direction: row;
        flex-wrap: wrap;
        gap: 32px;

        & label {
            flex: 1 0 45%;
        }
    }

    @media (min-width: ${BreakPoint.Desktop}) {
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: nowrap;
        gap: 20px;
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

    @media (min-width: ${BreakPoint.Desktop}) {
        flex-direction: row;
        align-items: center;
        gap: 80px;

        width: 100%;
        margin-top: 60px;
    }
`;

export const SubmitButton = styled(SButton)`
    height: 40px;

    @media (min-width: ${BreakPoint.TabletLow}) {
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
