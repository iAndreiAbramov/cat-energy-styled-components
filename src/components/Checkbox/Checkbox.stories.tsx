import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Checkbox } from './Checkbox';

export default {} as ComponentMeta<typeof Checkbox>;

export const Default: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const Checked = Default.bind({});
Checked.args = {
    labelText: 'сахарозаменитель',
    isDefaultChecked: true,
};

export const Disabled = Default.bind({});
Disabled.args = {
    labelText: 'сахарозаменитель',
    isDisabled: true,
};
