import React, { ReactElement } from 'react';
import { AppRoute } from 'constants/AppRoute';

import * as S from './FeatureCard.styled';

interface IFeatureCard {
    title: string;
    description: string;
    linkText: string;
    icon: ReactElement;
}

export const FeatureCard: React.FC<IFeatureCard> = ({ title, description, icon, linkText }) => {
    return (
        <S.FeatureCardWrapper>
            <S.FeatureTitle>{title}</S.FeatureTitle>
            <S.FeatureImageWrapper>{icon}</S.FeatureImageWrapper>
            <S.FeatureText>{description}</S.FeatureText>
            <S.FeatureLinkWrapper to={AppRoute.Catalog()}>
                <S.FeatureLinkText>{linkText}</S.FeatureLinkText>
            </S.FeatureLinkWrapper>
        </S.FeatureCardWrapper>
    );
};
