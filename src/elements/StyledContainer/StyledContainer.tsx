import styled from 'styled-components';

export const StyledContainer = styled.div`
    max-width: 1440px;
    padding-left: 30px;
    padding-right: 30px;

    @media screen and (max-width: 767px) {
        padding-left: 20px;
        padding-right: 20px;
    }
`;
