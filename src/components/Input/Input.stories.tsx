import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Input } from './Input';

export default {} as ComponentMeta<typeof Input>;

export const Default: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Text = Default.bind({});
Text.args = {
    width: '300px',
    placeholder: 'Text',
    labelText: 'Name:*',
};

export const TextIncorrect = Default.bind({});
TextIncorrect.args = {
    width: '300px',
    placeholder: 'Incorrect',
    isIncorrect: true,
    labelText: 'Name:*',
};

export const Email = Default.bind({});
Email.args = {
    width: '300px',
    placeholder: 'кuklachev@gmail.com',
    type: 'email',
    labelText: 'Email:*',
};

export const EmailIncorrect = Default.bind({});
EmailIncorrect.args = {
    width: '300px',
    placeholder: 'кuklachev@gmail.com',
    type: 'email',
    isIncorrect: true,
    labelText: 'e-mail:*',
};

export const Tel = Default.bind({});
Tel.args = {
    width: '300px',
    placeholder: '8 (960) 900-60-90',
    type: 'tel',
    labelText: 'Телефон:*',
};

export const TelIncorrect = Default.bind({});
TelIncorrect.args = {
    width: '300px',
    placeholder: '8 (960) 900-60-90',
    type: 'tel',
    labelText: 'Телефон:*',
    isIncorrect: true,
};
