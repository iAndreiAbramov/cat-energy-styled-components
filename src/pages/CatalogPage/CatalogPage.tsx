import React from 'react';
import { extraProducts } from 'constants/extra-products';
import { products } from 'constants/products';
import { SMain } from 'styled-elements/SMain';

import { ExtraCard } from 'components/ExtraCard';
import { ExtraPromo } from 'components/ExtraPromo';
import { PageFooter } from 'components/PageFooter';
import { PageHeader } from 'components/PageHeader';
import { ProductCard } from 'components/ProductCard';
import { EmptyCard } from 'components/ProductCard/EmptyCard';

import * as S from './CatalogPage.styled';

export const CatalogPage: React.FC = () => {
    return (
        <>
            <PageHeader />
            <SMain>
                <S.CatalogWrapper>
                    <S.CatalogPageTitle className="container">Каталог продукции</S.CatalogPageTitle>
                    <S.ProductsList>
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                        <EmptyCard />
                    </S.ProductsList>
                    <S.ExtraOuterWrapper className="container">
                        <S.ExtraTitle>Дополнительные товары</S.ExtraTitle>
                        <S.ExtraItemsWrapper>
                            {extraProducts.map((extraProduct) => (
                                <ExtraCard key={extraProduct.id} extraProduct={extraProduct} />
                            ))}
                        </S.ExtraItemsWrapper>
                        <ExtraPromo />
                    </S.ExtraOuterWrapper>
                </S.CatalogWrapper>
            </SMain>
            <PageFooter />
        </>
    );
};
