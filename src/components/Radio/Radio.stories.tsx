import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Radio } from './Radio';

export default {} as ComponentMeta<typeof Radio>;

export const Default: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;
Default.args = {
    name: 'Цель',
    value: 'похудение',
    labelText: 'похудение',
};

export const Checked = Default.bind({});
Checked.args = {
    name: 'Цель',
    value: 'похудение',
    labelText: 'похудение',
    isDefaultChecked: true,
};

export const Disabled = Default.bind({});
Disabled.args = {
    name: 'Цель',
    value: 'похудение',
    labelText: 'похудение',
    isDisabled: true,
};
