import React from 'react';
import { BreakPoint } from 'constants/style-variables';
import { IProduct } from 'types/products.types';

import * as S from './Card.styled';

interface IProductCardProps {
    product: IProduct;
}

export const ProductCard: React.FC<IProductCardProps> = ({ product }) => {
    const {
        name,
        type,
        weight,
        taste,
        price,
        imageBig,
        imageBigRetina,
        imageSmall,
        imageSmallRetina,
    } = product;
    return (
        <S.CardOuterWrapper>
            <S.CardInnerWrapper>
                <S.ImageWrapper>
                    <source
                        srcSet={`${imageBig} 1x, ${imageBigRetina} 2x`}
                        media={`(min-width:${BreakPoint.TabletLow})`}
                    />
                    <img
                        src={imageSmall}
                        srcSet={`${imageSmall} 1x, ${imageSmallRetina} 2x`}
                        alt="Изображение товара"
                    />
                </S.ImageWrapper>
                <S.InfoWrapper>
                    <S.InfoTitle>{`${name} ${type} ${weight} г`}</S.InfoTitle>
                    <S.InfoList>
                        <S.InfoListRow>
                            <S.TextItem as="dt">Масса</S.TextItem>
                            <S.TextItem as="dd">{`${weight} г`}</S.TextItem>
                        </S.InfoListRow>
                        <S.InfoListRow>
                            <S.TextItem as="dt">Вкус</S.TextItem>
                            <S.TextItem as="dd">{taste}</S.TextItem>
                        </S.InfoListRow>
                        <S.InfoListRow>
                            <S.TextItem as="dt">Цена</S.TextItem>
                            <S.TextItem as="dd">{`${price} р.`}</S.TextItem>
                        </S.InfoListRow>
                    </S.InfoList>
                </S.InfoWrapper>
            </S.CardInnerWrapper>
            <S.ButtonWrapper>
                <S.CardButton>заказать</S.CardButton>
            </S.ButtonWrapper>
        </S.CardOuterWrapper>
    );
};
