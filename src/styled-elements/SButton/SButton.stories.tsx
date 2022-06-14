import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ButtonColorType } from 'constants/style-variables';
import { SButton } from 'styled-elements/SButton';

export default {} as ComponentMeta<typeof SButton>;

export const Default: ComponentStory<typeof SButton> = (args) => (
    <SButton {...args}>Каталог</SButton>
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
