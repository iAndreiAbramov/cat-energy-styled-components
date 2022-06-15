import { FontColor, FontWeight } from 'constants/style-variables';
import styled from 'styled-components';
import { SMain } from 'styled-elements/SMain';
import { SPageTitle } from 'styled-elements/SPageTitle';

export const MainWrapper = styled(SMain)`
    padding-top: 26px;
    padding-bottom: 32px;
`;

export const FormPageTitle = styled(SPageTitle)`
    color: ${FontColor.Dark};
    margin-right: auto;
`;

export const FormPageSubTitle = styled.h2`
    margin-right: auto;
    margin-top: 40px;

    font-weight: ${FontWeight.Regular};
    font-size: 20px;
    line-height: 1.5;
    text-transform: uppercase;
    color: ${FontColor.Dark};
`;
