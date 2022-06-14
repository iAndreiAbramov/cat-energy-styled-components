import React from 'react';
import { IStatsItem } from 'types/stats-item.types';

import * as S from './ExampleStatsItem.styled';

export const ExampleStatsItem: React.FC<IStatsItem> = ({ bigText, smallText }) => {
    return (
        <S.Wrapper>
            <S.BigText>{bigText}</S.BigText>
            <S.SmallText>{smallText}</S.SmallText>
        </S.Wrapper>
    );
};
