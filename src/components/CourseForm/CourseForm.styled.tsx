import { Border, FontColor, FontFamily, FontWeight } from 'constants/style-variables';
import styled from 'styled-components';
import { SButton } from 'styled-elements/SButton';
import { SContainer } from 'styled-elements/SContainer';
import { SSectionTitleDecorated } from 'styled-elements/SSectionTitleDecorated';
import { STextarea } from 'styled-elements/STextarea';

export const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
`;

export const GeneraFieldSet = styled.fieldset`
    display: flex;
    flex-direction: column;
    gap: 13px;

    margin-top: 40px;
    padding-bottom: 24px;
    border-bottom: ${Border.HorizontalLine};
`;

export const PurposeFieldSet = styled.fieldset`
    display: flex;
    flex-direction: column;
    gap: 13px;

    padding-bottom: 24px;
    padding-top: 24px;
    border-bottom: ${Border.HorizontalLine};
`;

export const HostFieldSet = styled.fieldset`
    display: flex;
    flex-direction: column;
    gap: 34px;

    margin-top: 24px;
`;

export const HostInputs = styled.div`
    display: flex;
    flex-direction: column;
    gap: 14px;

    margin-top: 36px;
`;

export const Legend = styled(SSectionTitleDecorated)`
    padding-left: 20px;
`;

export const HabitsFieldSet = styled.fieldset`
    margin-top: 24px;
`;

export const HabitsInputs = styled.div`
    margin-top: 36px;
`;

export const HabitsTextarea = styled(STextarea)`
    height: 150px;
`;

export const ExtraFieldSet = styled.fieldset`
    display: flex;
    flex-direction: column;
    gap: 13px;

    margin-top: 24px;
`;

export const ExtraInputs = styled.div`
    display: flex;
    flex-direction: column;
    gap: 13px;

    margin-top: 34px;
`;

export const SubmitContainer = styled(SContainer)`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    width: 100%;
`;

export const SubmitButton = styled(SButton)`
    height: 40px;
    margin-top: 34px;
`;

export const Note = styled.span`
    font-family: ${FontFamily.Arial};
    font-weight: ${FontWeight.Regular};
    font-size: 14px;
    color: ${FontColor.Dark};
    text-align: center;
`;
