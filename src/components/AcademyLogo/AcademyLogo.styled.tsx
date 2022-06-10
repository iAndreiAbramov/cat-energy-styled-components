import { ReactComponent as AcademyLogo } from 'icons/academy-logo.svg';
import styled from 'styled-components';

export const StyledAcademyLogo = styled(AcademyLogo)`
    width: 27px;
    height: 34px;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.6;
    }
`;
