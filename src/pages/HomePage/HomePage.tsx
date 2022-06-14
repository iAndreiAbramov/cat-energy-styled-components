import React from 'react';
import { explanations } from 'constants/explanations';
import { features } from 'constants/features';
import { statsItems } from 'constants/stats-items';
import { SHiddenHint } from 'styled-elements/SHiddenHint';
import { SMain } from 'styled-elements/SMain';

import { ExampleCompare } from 'components/ExampleCompare';
import { ExampleStatsItem } from 'components/ExampleStatsItem';
import { ExplanationCard } from 'components/ExplanationCard';
import { FeatureCard } from 'components/FeatureCard';
import { PageFooter } from 'components/PageFooter';
import { Promo } from 'components/Promo';

import * as S from './HomePage.styled';
import { ExplanationTitle } from './HomePage.styled';

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
                    <ExplanationTitle>Как это работает</ExplanationTitle>
                    <S.ExplanationContent>
                        {explanations.map(({ icon, text, number }) => (
                            <ExplanationCard key={number} icon={icon} text={text} number={number} />
                        ))}
                    </S.ExplanationContent>
                </S.ExplanationSection>
                <S.ExampleSection className="container">
                    <S.ExampleTitle>Живой пример</S.ExampleTitle>
                    <S.ExampleText>
                        Борис сбросил 5 кг за 2 месяца, просто заменив свой обычный корм на Cat
                        Energy Slim. Отличный результат без изнуряющих тренировок! При этом он не
                        менял своих привычек и по-прежнему спит по 16 часов в день.
                    </S.ExampleText>
                    <S.ExampleResults>
                        <S.ExampleStats>
                            {statsItems.map(({ bigText, smallText }) => (
                                <ExampleStatsItem
                                    key={bigText}
                                    bigText={bigText}
                                    smallText={smallText}
                                />
                            ))}
                        </S.ExampleStats>
                        <S.ExamplePrice>
                            <S.ExamplePriceItem>Затраты на питание:</S.ExamplePriceItem>
                            <S.ExamplePriceItem>15 000 руб.</S.ExamplePriceItem>
                        </S.ExamplePrice>
                    </S.ExampleResults>
                    <ExampleCompare />
                </S.ExampleSection>
            </SMain>
            <PageFooter />
        </>
    );
};
