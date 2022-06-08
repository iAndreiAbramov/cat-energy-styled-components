import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button } from './Button';
import { ColorType } from './Button.types';

export default {} as ComponentMeta<typeof Button>;

export const Default: ComponentStory<typeof Button> = (args) => <Button {...args}>Каталог</Button>;

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
