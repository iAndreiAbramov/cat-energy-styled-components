import React from 'react';
import { SButton } from 'styled-elements/SButton';
import { IExtraProduct } from 'types/extra-products.types';

import * as S from './ExtraCard.styled';

interface IExtraProductProps {
    extraProduct: IExtraProduct;
}

export const ExtraCard: React.FC<IExtraProductProps> = ({ extraProduct }) => {
    const { name, amount, unit, price } = extraProduct;
    return (
        <S.ExtraWrapper>
            <S.ExtraTitle>{name}</S.ExtraTitle>
            <S.ExtraInfo>
                <S.ExtraInfoText as="dt">{`${amount} ${unit}`}</S.ExtraInfoText>
                <S.ExtraInfoText as="dd">{`${price} Р.`}</S.ExtraInfoText>
            </S.ExtraInfo>
            <S.ExtraButtonWrapper>
                <SButton>заказать</SButton>
            </S.ExtraButtonWrapper>
        </S.ExtraWrapper>
    );
};
