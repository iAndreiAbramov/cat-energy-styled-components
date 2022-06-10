import { BreakPoint } from 'constants/style-variables';
import { ReactComponent as TextLogo } from 'icons/text-logo.svg';
import styled from 'styled-components';

interface IStyledTextLogo {
    isForHeader?: boolean;
}

export const StyledTextLogo = styled(TextLogo)<IStyledTextLogo>`
    width: ${({ isForHeader }) => (isForHeader ? '101px ' : '128px')};
    height: ${({ isForHeader }) => (isForHeader ? '18px' : '24px')};

    @media (min-width: ${BreakPoint.TabletLow}) {
        display: ${({ isForHeader }) => (isForHeader ? 'none' : '')};
    }
`;
