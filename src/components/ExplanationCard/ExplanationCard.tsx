import React from 'react';
import { IExplanation } from 'types/explanations.types';

import * as S from './ExplanationCard.styled';

export const ExplanationCard: React.FC<IExplanation> = ({ text, number, icon }) => {
    return (
        <S.ExplanationWrapper number={number}>
            <S.ExplanationImageWrapper>{icon}</S.ExplanationImageWrapper>
            <S.ExplanationText>{text}</S.ExplanationText>
            <S.ExplanationNumber>{number}</S.ExplanationNumber>
        </S.ExplanationWrapper>
    );
};
