import { BreakPoint } from 'constants/style-variables';
import { ReactComponent as TextLogo } from 'icons/text-logo.svg';
import styled from 'styled-components';

export const SHeaderTextLogo = styled(TextLogo)`
    width: 101px;
    height: 18px;

    @media (min-width: ${BreakPoint.TabletLow}) {
        display: none;
    }
`;

export const SFooterTextLogo = styled(TextLogo)`
    width: 128px;
    height: 24px;
`;
