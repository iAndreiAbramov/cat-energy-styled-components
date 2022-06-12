import React from 'react';
import { ReactComponent as Cat } from 'icons/cat_back.svg';
import { ReactComponent as Puma } from 'icons/puma_back.svg';
import { IFeature } from 'types/features.types';

export const features: IFeature[] = [
    {
        title: 'похудение',
        description:
            'Ваш кот весит больше собаки и почти утратил способность лазить по деревьям? Пора на\n' +
            '                диету! Cat Energy Slim поможет вашему питомцу сбросить лишний вес.',
        linkText: 'каталог slim',
        icon: <Cat />,
    },
    {
        title: 'Набор массы',
        description:
            'Заработать авторитет среди дворовых котов и даже собак? Серия Cat Energy Pro поможет вашему' +
            ' коту нарастить необходимые мышцы!',
        linkText: 'каталог pro',
        icon: <Puma />,
    },
];
