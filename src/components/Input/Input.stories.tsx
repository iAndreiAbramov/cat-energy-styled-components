import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Input } from './Input';

export default {} as ComponentMeta<typeof Input>;

export const Default: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Text = Default.bind({});
Text.args = {
    width: '300px',
    placeholder: 'Placeholder',
};
