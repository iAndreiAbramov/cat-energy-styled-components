import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SPageTitle } from 'styled-elements/SPageTitle';

export default {} as ComponentMeta<typeof SPageTitle>;

export const Default: ComponentStory<typeof SPageTitle> = (args) => (
    <SPageTitle {...args}>Функциональное питание для котов</SPageTitle>
);
