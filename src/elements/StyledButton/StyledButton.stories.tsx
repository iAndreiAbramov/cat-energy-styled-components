import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ButtonColorType } from 'constants/style-variables';

import { StyledButton } from './StyledButton';

export default {} as ComponentMeta<typeof StyledButton>;

export const Default: ComponentStory<typeof StyledButton> = (args) => (
    <StyledButton {...args}>Каталог</StyledButton>
);

export const Gray = Default.bind({});
Gray.args = {
    colorType: ButtonColorType.Gray,
    width: '300px',
    height: '40px',
};

export const Green = Default.bind({});
Green.args = {
    colorType: ButtonColorType.Green,
    width: '300px',
    height: '40px',
};
