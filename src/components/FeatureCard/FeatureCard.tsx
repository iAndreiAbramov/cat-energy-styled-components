import React, { ReactElement } from 'react';
import { AppRoute } from 'constants/AppRoute';

import {
    FeatureCardWrapper,
    FeatureImageWrapper,
    FeatureLinkText,
    FeatureLinkWrapper,
    FeatureText,
    FeatureTitle,
} from './FeatureCard.styled';

interface IFeatureCard {
    title: string;
    description: string;
    linkText: string;
    icon: ReactElement;
}

export const FeatureCard: React.FC<IFeatureCard> = ({ title, description, icon, linkText }) => {
    return (
        <FeatureCardWrapper>
            <FeatureTitle>{title}</FeatureTitle>
            <FeatureImageWrapper>{icon}</FeatureImageWrapper>
            <FeatureText>{description}</FeatureText>
            <FeatureLinkWrapper to={AppRoute.Catalog()}>
                <FeatureLinkText>{linkText}</FeatureLinkText>
            </FeatureLinkWrapper>
        </FeatureCardWrapper>
    );
};
