import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { StyledTextarea } from './StyledTextarea';

export default {} as ComponentMeta<typeof StyledTextarea>;

export const Default: ComponentStory<typeof StyledTextarea> = (args) => (
    <StyledTextarea {...args} />
);
Default.args = {
    placeholder: 'Расскажите обо всех повадках кота',
};
