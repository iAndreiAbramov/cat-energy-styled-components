import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { StyledInput } from './StyledInput';

export default {} as ComponentMeta<typeof StyledInput>;

export const Default: ComponentStory<typeof StyledInput> = (args) => <StyledInput {...args} />;

export const Text = Default.bind({});
Text.args = {
    width: '300px',
    placeholder: 'Text',
};

export const TextIncorrect = Default.bind({});
TextIncorrect.args = {
    width: '300px',
    placeholder: 'Incorrect',
    isIncorrect: true,
};

export const Email = Default.bind({});
Email.args = {
    width: '300px',
    placeholder: 'Email',
    type: 'email',
};

export const EmailIncorrect = Default.bind({});
EmailIncorrect.args = {
    width: '300px',
    placeholder: 'Incorrect',
    type: 'email',
    isIncorrect: true,
};
