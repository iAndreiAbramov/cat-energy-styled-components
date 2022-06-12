import React from 'react';
import { IExplanation } from 'types/explanations.types';

import {
    ExplanationImageWrapper,
    ExplanationNumber,
    ExplanationText,
    ExplanationWrapper,
} from './ExplanationCard.styled';

export const ExplanationCard: React.FC<IExplanation> = ({ text, number, icon }) => {
    return (
        <ExplanationWrapper number={number}>
            <ExplanationImageWrapper>{icon}</ExplanationImageWrapper>
            <ExplanationText>{text}</ExplanationText>
            <ExplanationNumber>{number}</ExplanationNumber>
        </ExplanationWrapper>
    );
};
