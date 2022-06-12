import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { FontColor } from 'constants/style-variables';

import { StyledMainTitle } from './StyledMainTitle';

export default {} as ComponentMeta<typeof StyledMainTitle>;

export const Default: ComponentStory<typeof StyledMainTitle> = (args) => (
    <StyledMainTitle {...args}>Функциональное питание для котов</StyledMainTitle>
);

export const White = Default.bind({});
White.args = {
    color: FontColor.Light,
};
