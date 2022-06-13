import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { STextarea } from 'styled-elements/STextarea';

export default {} as ComponentMeta<typeof STextarea>;

export const Default: ComponentStory<typeof STextarea> = (args) => <STextarea {...args} />;
Default.args = {
    placeholder: 'Расскажите обо всех повадках кота',
};
