import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { StyledButton } from './StyledButton';
import { ColorType } from './StyledButton.types';

export default {} as ComponentMeta<typeof StyledButton>;

export const Default: ComponentStory<typeof StyledButton> = (args) => (
    <StyledButton {...args}>Каталог</StyledButton>
);

export const Gray = Default.bind({});
Gray.args = {
    colorType: ColorType.Gray,
    width: '300px',
    height: '40px',
};

export const Green = Default.bind({});
Green.args = {
    colorType: ColorType.Green,
    width: '300px',
    height: '40px',
};
