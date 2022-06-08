import { Border, BreakPoint } from 'constants/style-variables';
import styled from 'styled-components';

export const Input = styled.input.attrs((props) => ({
    type: props.type || 'text',
}))`
    width: ${({ width }) => width || '100%'};

    box-sizing: border-box;
    padding: 10px 18px;

    appearance: none;
    height: 52px;
    border: ${Border.InputRegular};

    @media (max-width: ${BreakPoint.Tablet}) {
        height: 40px;
    }
`;
