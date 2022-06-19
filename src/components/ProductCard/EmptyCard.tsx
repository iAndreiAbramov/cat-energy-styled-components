import React from 'react';
import { ButtonColorType } from 'constants/style-variables';
import { ReactComponent as Plus } from 'icons/plus.svg';

import * as S from './Card.styled';
import { IconWrapper } from './Card.styled';

export const EmptyCard: React.FC = () => {
    return (
        <S.EmptyCardWrapper>
            <IconWrapper>
                <Plus />
            </IconWrapper>
            <S.EmptyCardTitle>Показать еще 100500 товаров</S.EmptyCardTitle>
            <S.EmptyCardText>На самом деле вкусов гораздо больше!</S.EmptyCardText>
            <S.EmptyCardButtonWrapper>
                <S.CardButton colorType={ButtonColorType.Gray}>показать все</S.CardButton>
            </S.EmptyCardButtonWrapper>
        </S.EmptyCardWrapper>
    );
};
