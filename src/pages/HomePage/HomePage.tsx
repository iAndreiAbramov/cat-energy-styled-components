import React from 'react';
import { features } from 'constants/features';
import { HiddenHint } from 'elements/HiddenHint';
import { StyledMain } from 'elements/StyledMain/StyledMain';

import { FeatureCard } from 'components/FeatureCard';
import { PageFooter } from 'components/PageFooter';
import { Promo } from 'components/Promo';

import { FeatureList } from './HomePage.styled';

export const HomePage: React.FC = () => {
    return (
        <>
            <Promo />
            <StyledMain>
                <FeatureList className="container">
                    <HiddenHint as="h2">возможности, которые мы предлагаем</HiddenHint>
                    {features.map(({ title, description, icon, linkText }) => (
                        <FeatureCard
                            key={title}
                            title={title}
                            description={description}
                            linkText={linkText}
                            icon={icon}
                        />
                    ))}
                </FeatureList>
            </StyledMain>
            <PageFooter />
        </>
    );
};
