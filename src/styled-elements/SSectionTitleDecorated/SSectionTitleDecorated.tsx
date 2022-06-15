import { BgColor, FontColor } from 'constants/style-variables';
import styled from 'styled-components';

export const SSectionTitleDecorated = styled.h3`
    display: flex;
    justify-content: stretch;
    gap: 14px;
    width: 100%;

    font-weight: 400;
    font-size: 24px;
    line-height: 1.08;
    color: ${FontColor.Dark};

    &:after {
        content: '';

        display: block;
        height: 3px;
        width: 100%;
        margin-top: 14px;

        background-color: ${BgColor.BasicGreen};
    }
`;
