import React from 'react';
import { explanations } from 'constants/explanations';
import { features } from 'constants/features';
import { SContainer } from 'styled-elements/SContainer';
import { SHiddenHint } from 'styled-elements/SHiddenHint';
import { SMain } from 'styled-elements/SMain';
import { SSectionTitle } from 'styled-elements/SSectionTitle';

import { ExplanationCard } from 'components/ExplanationCard';
import { FeatureCard } from 'components/FeatureCard';
import { PageFooter } from 'components/PageFooter';
import { Promo } from 'components/Promo';

import * as S from './HomePage.styled';

export const HomePage: React.FC = () => {
    return (
        <>
            <Promo />
            <SMain>
                <S.FeatureSection className="container">
                    <SHiddenHint as="h2">возможности, которые мы предлагаем</SHiddenHint>
                    {features.map(({ title, description, icon, linkText }) => (
                        <FeatureCard
                            key={title}
                            title={title}
                            description={description}
                            linkText={linkText}
                            icon={icon}
                        />
                    ))}
                </S.FeatureSection>
                <S.ExplanationSection className="container">
                    <SSectionTitle>Как это работает</SSectionTitle>
                    <S.ExplanationContent>
                        {explanations.map(({ icon, text, number }) => (
                            <ExplanationCard key={number} icon={icon} text={text} number={number} />
                        ))}
                    </S.ExplanationContent>
                </S.ExplanationSection>
                <S.ExampleSection>
                    <SContainer>
                        <SSectionTitle>Живой пример</SSectionTitle>
                    </SContainer>
                </S.ExampleSection>
            </SMain>
            <PageFooter />
        </>
    );
};
