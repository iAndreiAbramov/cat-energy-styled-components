import React from 'react';
import { explanations } from 'constants/explanations';
import { features } from 'constants/features';
import { HiddenHint } from 'elements/HiddenHint';
import { StyledMain } from 'elements/StyledMain/StyledMain';

import { ExplanationCard } from 'components/ExplanationCard';
import { FeatureCard } from 'components/FeatureCard';
import { PageFooter } from 'components/PageFooter';
import { Promo } from 'components/Promo';

import {
    ExplanationContent,
    ExplanationList,
    ExplanationTitle,
    FeatureList,
} from './HomePage.styled';

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
                <ExplanationList className="container">
                    <ExplanationTitle>Как это работает</ExplanationTitle>
                    <ExplanationContent>
                        {explanations.map(({ icon, text, number }) => (
                            <ExplanationCard key={number} icon={icon} text={text} number={number} />
                        ))}
                    </ExplanationContent>
                </ExplanationList>
            </StyledMain>
            <PageFooter />
        </>
    );
};
