import React from 'react';
import { products } from 'constants/products';

import { PageFooter } from 'components/PageFooter';
import { PageHeader } from 'components/PageHeader';
import { ProductCard } from 'components/ProductCard';
import { EmptyCard } from 'components/ProductCard/EmptyCard';

import * as S from './CatalogPage.styled';

export const CatalogPage: React.FC = () => {
    return (
        <>
            <PageHeader />
            <S.CatalogMain>
                <S.CatalogPageTitle className="container">Каталог продукции</S.CatalogPageTitle>
                <S.ProductsList>
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                    <EmptyCard />
                </S.ProductsList>
            </S.CatalogMain>
            <PageFooter />
        </>
    );
};
