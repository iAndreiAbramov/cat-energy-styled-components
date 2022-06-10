import { ReactComponent as TextLogo } from 'icons/text-logo.svg';
import styled from 'styled-components';

interface IStyledTextLogo {
    width?: string;
    height?: string;
}

export const StyledTextLogo = styled(TextLogo)<IStyledTextLogo>`
    width: ${({ width }) => (width ? width : '128px')};
    height: ${({ height }) => (height ? height : '24px')};
`;
