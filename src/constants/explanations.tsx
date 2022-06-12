import React from 'react';
import { ReactComponent as Clock } from 'icons/clock.svg';
import { ReactComponent as Cutlery } from 'icons/cutlery.svg';
import { ReactComponent as Leaf } from 'icons/leaf.svg';
import { ReactComponent as Wash } from 'icons/wash.svg';
import { IExplanation } from 'types/explanations.types';

export const explanations: IExplanation[] = [
    {
        number: '1',
        text: 'Функциональное питание содержит только полезные питательные вещества.',
        icon: <Leaf />,
    },
    {
        number: '2',
        text: 'Выпускается в виде порошка, который нужно лишь залить кипятком и готово.',
        icon: <Wash />,
    },
    {
        number: '3',
        text: 'Замените один-два приема обычной еды на наше функциональное питание.',
        icon: <Cutlery />,
    },
    {
        number: '4',
        text: 'Функциональное питание содержит только полезные питательные вещества.',
        icon: <Clock />,
    },
];
