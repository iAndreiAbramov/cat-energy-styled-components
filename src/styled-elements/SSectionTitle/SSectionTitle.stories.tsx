import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { SSectionTitle } from './SSectionTitle';

export default {} as ComponentMeta<typeof SSectionTitle>;

export const Default: ComponentStory<typeof SSectionTitle> = (args) => (
    <SSectionTitle {...args}>Как это работает</SSectionTitle>
);
