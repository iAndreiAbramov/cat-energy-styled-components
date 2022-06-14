import styled from 'styled-components';

export const SContainer = styled.div`
    max-width: 1440px;
    padding-left: 20px;
    padding-right: 20px;
    margin: 0 auto;
    box-sizing: border-box;

    @media screen and (min-width: 767px) and (max-width: 1220px) {
        padding-left: 30px;
        padding-right: 30px;
    }

    @media (min-width: 1220px) {
        padding-left: 70px;
        padding-right: 70px;
    }
`;
